# Firebase setup (about 15 minutes, one time)

Console labels change now and then. If a button name differs slightly, follow the intent.
You need only a Google account. No credit card. Stay on the free **Spark** plan.

## 1. Create the project
1. Open https://console.firebase.google.com and sign in.
2. **Create a project** (or "Add project"). Name: `devops-c2c`.
3. Turn **Google Analytics off** (not needed). Create.

## 2. Create the database
1. Left menu: **Build → Firestore Database → Create database**.
2. Edition: **Standard**. Location: **asia-south1 (Mumbai)** (closest to Chennai/Vellore).
3. Start in **production mode**. Enable.

## 3. Publish the security rules
1. Firestore → **Rules** tab.
2. Delete everything and paste the block below.
3. Replace `CHANGE_ME_PIN` with **your own host PIN** (8+ characters, letters and digits). Remember it.
4. Click **Publish**.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // The host proves knowledge of the PIN by creating a one-time doc in the same batch.
    function pinOk() {
      let p = /databases/$(database)/documents/hostctl/$(request.resource.data.nonce);
      return !exists(p) && existsAfter(p) && getAfter(p).data.pin == 'CHANGE_ME_PIN';
    }

    // One-time PIN docs: anyone may create, nobody may read, change or delete.
    match /hostctl/{doc} {
      allow create: if true;
      allow read, update, delete: if false;
    }

    // Live session state: everyone reads, only the host (PIN) writes.
    match /sessions/live {
      allow read: if true;
      allow write: if pinOk();
    }

    match /players/{id} {
      allow read: if true;
      allow create, update: if request.resource.data.keys().hasOnly(['run','uid','name','at'])
        && request.resource.data.name is string
        && request.resource.data.name.size() > 0
        && request.resource.data.name.size() <= 30;
      allow delete: if false;
    }

    // Create-only: the first answer counts, a second attempt is rejected.
    match /answers/{id} {
      allow read: if true;
      allow create: if request.resource.data.keys().hasOnly(['run','uid','name','q','c','ms','pts'])
        && request.resource.data.q is int
        && request.resource.data.c is int && request.resource.data.c >= 0 && request.resource.data.c <= 3
        && request.resource.data.ms is int
        && request.resource.data.pts is int && request.resource.data.pts >= 0 && request.resource.data.pts <= 150;
      allow update, delete: if false;
    }
  }
}
```

## 4. Register the web app and copy the config
1. Project settings (gear icon) → **General** → **Your apps** → **Web** (`</>`).
2. Nickname `c2c-web`. Do **not** tick Firebase Hosting. Register.
3. Copy the `firebaseConfig` values (`apiKey`, `authDomain`, `projectId`, `appId`) into **config.js**.
   These values are not secrets. The rules above are what protect the data.

## 5. Put it on GitHub Pages
1. Create a public repo named `VIT_C2C` under `askanilkumar`.
2. Upload all files from this folder (config.js with your values filled in).
3. Repo **Settings → Pages → Build from branch → main / root**. Wait 1 to 3 minutes.
4. Your pages:
   - Lecture deck: `https://askanilkumar.github.io/VIT_C2C/`
   - Students: `.../q.html`
   - Host: `.../host.html`

## 6. Verify (5 minutes)
1. Open `host.html`, type your PIN, click **Use PIN**, then **Setup check**.
   Every line must show a green tick:
   - Host write with your PIN works
   - Wrong PIN is rejected
   - Students cannot write the live state
   - Student join / answer writes work
   - Second answer to the same question is rejected
2. If the first line fails: wrong PIN, rules not published, or config.js not saved.
3. If "wrong PIN is rejected" or "students cannot write" fails: the rules were not pasted exactly. Re-paste and publish.

## 7. Quota
Spark gives 50,000 reads, 20,000 writes per day (resets daily). Your session needs roughly
5,000 writes and 15,000 to 20,000 reads. A 180-student simulation of all 28 items would use about
5,000 writes on its own, so **test with 5 to 6 questions only** before the real session.

## Plan B if Firestore misbehaves during class
Students' pages fall back to **self-paced mode** automatically (they tap Next, score locally).
You keep teaching from the deck. Say: "Quiz is on your phone: answer, then follow the screen."

## Answer key (new)
Correct answers and explanations are in `key.js`. It is **not** on GitHub (`.gitignore`). In `host.html` click **Key file** and choose it. No Firebase rule change is needed.
