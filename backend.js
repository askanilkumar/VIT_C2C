// Thin wrapper around Firestore. Pages never touch Firebase directly,
// so a different backend (or the test mock) can be swapped in.
(function () {
  'use strict';
  var SDK = 'https://www.gstatic.com/firebasejs/10.12.2/';
  var fs, db, ready;

  function init(cfg) {
    if (ready) return ready;
    ready = (async function () {
      var appMod = await import(SDK + 'firebase-app.js');
      fs = await import(SDK + 'firebase-firestore.js');
      var app = appMod.initializeApp(cfg);
      // Long-polling auto-detect helps on restrictive college / mobile networks
      db = fs.initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
    })();
    return ready;
  }

  function liveRef() { return fs.doc(db, 'sessions', 'live'); }

  function onLive(cb, err) {
    return fs.onSnapshot(liveRef(), function (s) { cb(s.exists() ? s.data() : null); }, err || function () {});
  }
  function onColl(name, run, cb, err) {
    var q = fs.query(fs.collection(db, name), fs.where('run', '==', run));
    return fs.onSnapshot(q, function (s) { cb(s.docs.map(function (d) { return d.data(); })); }, err || function () {});
  }
  function onPlayers(run, cb, err) { return onColl('players', run, cb, err); }
  function onAnswers(run, cb, err) { return onColl('answers', run, cb, err); }

  // Host write: the PIN travels in a one-time hostctl doc (never readable by students)
  async function hostWrite(pin, data) {
    var nonce = 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    var b = fs.writeBatch(db);
    b.set(fs.doc(db, 'hostctl', nonce), { pin: pin });
    b.set(liveRef(), Object.assign({}, data, { nonce: nonce }));
    await b.commit();
    return nonce;
  }
  // Used only by the host "Setup check" to prove students cannot write the live doc
  async function liveWriteDirect(data) { await fs.setDoc(liveRef(), data); }

  async function putPlayer(run, uid, name) {
    await fs.setDoc(fs.doc(db, 'players', run + '_' + uid), { run: run, uid: uid, name: name, at: Date.now() });
  }
  // Create-only: a second answer for the same question is rejected by the rules => 'dup'
  async function putAnswer(run, q, uid, name, c, ms, pts) {
    try {
      await fs.setDoc(fs.doc(db, 'answers', run + '_' + q + '_' + uid),
        { run: run, uid: uid, name: name, q: q, c: c, ms: ms, pts: pts });
      return 'ok';
    } catch (e) {
      if (e && e.code === 'permission-denied') return 'dup';
      throw e;
    }
  }

  window.Backend = { init: init, onLive: onLive, onPlayers: onPlayers, onAnswers: onAnswers,
    hostWrite: hostWrite, liveWriteDirect: liveWriteDirect, putPlayer: putPlayer, putAnswer: putAnswer };
})();
