// Quiz bank: hard-coded so content never depends on the network.
// type: 'poll' (no right answer, 0 pts) or 'quiz' (a = index of correct option)
window.QUIZ = {
  topics: ["Opener", "Ops & why it matters", "Dev vs Deployment", "The 8 DevOps phases", "AI in DevOps", "Rapid-fire", "Your next step"],
  items: [
    // ---- Opener polls ----
    { id: "p1", type: "poll", topic: 0, q: "Where does the code you write in class actually run?",
      o: ["Only on my laptop", "College lab / server", "A cloud server (AWS, Azure, GCP)", "Honestly, no idea"], e: "" },
    { id: "p2", type: "poll", topic: 0, q: "Five years from now, which job do you see yourself in?",
      o: ["Software developer", "Cloud / DevOps engineer", "Data / AI engineer", "Not sure yet"], e: "" },

    // ---- Quiz 1: Ops & why it matters ----
    { id: "t1q1", type: "quiz", topic: 1, q: "CampusCart crashes at 2 AM during a sale. Who keeps the business running until developers wake up?",
      o: ["Marketing team", "The Ops (operations) team", "HR team", "Sales team"], a: 1,
      e: "Ops keeps systems available 24x7. Downtime is their problem to prevent and fix." },
    { id: "t1q2", type: "quiz", topic: 1, q: "Which 'Ops' focuses on detecting and responding to security threats?",
      o: ["NetOps", "FinOps", "SecOps", "DataOps"], a: 2,
      e: "SecOps = security operations: monitoring, threat detection, incident response." },
    { id: "t1q3", type: "quiz", topic: 1, q: "CampusCart's cloud bill doubled this month with no new users. Which practice investigates this?",
      o: ["FinOps", "MLOps", "NetOps", "SecOps"], a: 0,
      e: "FinOps = cloud financial accountability: who spends what, and why." },
    { id: "t1q4", type: "quiz", topic: 1, q: "A recommendation model works in a notebook, but nobody can deploy or retrain it safely. Which Ops fixes this?",
      o: ["SysOps", "FinOps", "NetOps", "MLOps"], a: 3,
      e: "MLOps = deploy, monitor and retrain machine-learning models reliably." },
    { id: "t1q5", type: "quiz", topic: 1, q: "Why do companies invest so heavily in Ops?",
      o: ["Downtime costs money and customer trust", "So fewer developers are needed", "Because code never has bugs", "To avoid using the cloud"], a: 0,
      e: "Every minute offline means lost orders and lost trust." },

    // ---- Quiz 2: Dev vs Deployment ----
    { id: "t2q1", type: "quiz", topic: 2, q: "'It works on my machine' usually means:",
      o: ["The code is perfect", "The server is broken", "The environment differs between laptop and server", "The tests passed"], a: 2,
      e: "Different OS, versions, configs, or secrets: environment drift." },
    { id: "t2q2", type: "quiz", topic: 2, q: "Which tool packages an app with its dependencies so it runs the same everywhere?",
      o: ["Git", "Postman", "Figma", "Docker"], a: 3,
      e: "Docker containers bundle the app + libraries + config." },
    { id: "t2q3", type: "quiz", topic: 2, q: "Development builds features. Deployment is about:",
      o: ["Writing code faster", "Designing logos", "Writing documents", "Getting the code running safely for real users"], a: 3,
      e: "Deployment = making the code run reliably in a real environment." },
    { id: "t2q4", type: "quiz", topic: 2, q: "A Friday 5 PM release breaks checkout. Which practice reduces this risk most?",
      o: ["Deploy only on Fridays", "Automated tests + small, frequent releases", "Skip testing to save time", "Release without telling anyone"], a: 1,
      e: "Small changes + automation = smaller blast radius, faster fixes." },
    { id: "t2q5", type: "quiz", topic: 2, q: "Your update just broke production. Fastest safe response?",
      o: ["Debug live for 3 hours", "Delete the database", "Roll back to the last good version", "Restart your laptop"], a: 2,
      e: "Roll back first, investigate later. Restore service, then find the cause." },

    // ---- Quiz 3: The 8 phases ----
    { id: "t3q1", type: "quiz", topic: 3, q: "The team writes user stories and plans the sprint. Which phase is this?",
      o: ["Build", "Deploy", "Monitor", "Plan"], a: 3,
      e: "Plan: requirements, backlog, sprint planning." },
    { id: "t3q2", type: "quiz", topic: 3, q: "Every commit is automatically compiled into a deployable package. Which phase?",
      o: ["Code", "Build", "Operate", "Plan"], a: 1,
      e: "Build: compile, package, create the artifact or container image." },
    { id: "t3q3", type: "quiz", topic: 3, q: "Unit tests, security scans and integration tests run automatically. Which phase?",
      o: ["Monitor", "Release", "Test", "Plan"], a: 2,
      e: "Test: automated quality gates before anything ships." },
    { id: "t3q4", type: "quiz", topic: 3, q: "CampusCart is slow at 9 PM and dashboards show CPU at 95%. Which phase caught it?",
      o: ["Monitor", "Plan", "Code", "Test"], a: 0,
      e: "Monitor: metrics, logs and alerts from the live system." },
    { id: "t3q5", type: "quiz", topic: 3, q: "Which statement about the DevOps loop is true?",
      o: ["It ends after deployment", "Monitoring feedback flows back into Plan", "Only developers use it", "It needs no automation"], a: 1,
      e: "It is a loop: what you learn in production shapes the next plan." },

    // ---- Quiz 4: AI in DevOps ----
    { id: "t4q1", type: "quiz", topic: 4, q: "A tool suggests code as you type inside your editor. What category is it?",
      o: ["Load balancer", "AI coding assistant", "Firewall", "Compiler"], a: 1,
      e: "AI coding assistants (Copilot, Claude Code, etc.) help in the Code phase." },
    { id: "t4q2", type: "quiz", topic: 4, q: "AIOps tools mainly help Ops teams by:",
      o: ["Replacing all servers", "Writing exam papers", "Finding anomalies and cutting alert noise", "Designing UI screens"], a: 2,
      e: "AIOps correlates alerts, spots anomalies, and speeds up root-cause analysis." },
    { id: "t4q3", type: "quiz", topic: 4, q: "A pipeline fails. An AI agent reads the logs, finds the cause and proposes a fix for human approval. This idea is called:",
      o: ["Manual deployment", "Cold storage", "Pair programming", "A self-healing pipeline"], a: 3,
      e: "Self-healing: detect, diagnose, propose or apply a fix, with humans in control." },
    { id: "t4q4", type: "quiz", topic: 4, q: "AI generated a Terraform script. What should you do before applying it to production?",
      o: ["Apply it immediately: AI is always right", "Review it and test in a safe environment first", "Delete the tests", "Share your cloud password with the AI"], a: 1,
      e: "AI can hallucinate configs. You own the result: review, test, then apply." },
    { id: "t4q5", type: "quiz", topic: 4, q: "As AI writes more code, which skill becomes MORE valuable?",
      o: ["Typing speed", "Memorising syntax", "Judging, testing and running systems reliably", "Avoiding Git"], a: 2,
      e: "Judgement, testing, security and operations skills carry the premium." },

    // ---- Quiz 5: Rapid-fire ----
    { id: "t5q1", type: "quiz", topic: 5, q: "'Auto-build and test on every commit' is called:",
      o: ["CI (Continuous Integration)", "VPN", "DNS", "CPU"], a: 0,
      e: "CI = integrate often, build and test automatically." },
    { id: "t5q2", type: "quiz", topic: 5, q: "Infrastructure as Code (for example Terraform) means:",
      o: ["Writing code directly on servers by hand", "Servers created from version-controlled code", "Buying code from a vendor", "Drawing architecture diagrams"], a: 1,
      e: "Infrastructure defined in files: repeatable, reviewable, versioned." },
    { id: "t5q3", type: "quiz", topic: 5, q: "Monitoring shows a spike in errors right after a release. Best first step?",
      o: ["Ignore it, users will adapt", "Add more features", "Roll back or pause the rollout", "Switch off monitoring"], a: 2,
      e: "Stop the damage first: roll back or pause, then investigate." },
    { id: "t5q4", type: "quiz", topic: 5, q: "Which of these is NOT one of the 8 DevOps phases?",
      o: ["Recruit", "Monitor", "Release", "Test"], a: 0,
      e: "The 8: Plan, Code, Build, Test, Release, Deploy, Operate, Monitor." },
    { id: "t5q5", type: "quiz", topic: 5, q: "Best first step to move from classroom to cloud?",
      o: ["Memorise all 8 phases", "Wait for a company to train you", "Skip Git", "Deploy one small project and automate it"], a: 3,
      e: "Build, deploy, automate, and put it on GitHub. Proof of work beats theory." },

    // ---- Closing poll ----
    { id: "p3", type: "poll", topic: 6, q: "Which stage will you start this week?",
      o: ["Linux + Git", "CI/CD pipeline", "Docker + containers", "Cloud + Terraform"], e: "" }
  ]
};

// ---- Labels shared by the deck, the student page and the host console ----
// Add "quiz: 2" to an item to split a module into several quizzes; labels update automatically.
(function () {
  var Q = window.QUIZ;
  Q.info = function (i) {
    var it = Q.items[i];
    if (!it) return { module: 0, name: '', label: '' };
    var m = it.topic, name = Q.topics[m];
    if (it.type === 'poll') {
      var polls = Q.items.filter(function (x) { return x.topic === m && x.type === 'poll'; });
      var pn = polls.indexOf(it) + 1;
      return { module: m, name: name, label: 'Module ' + m + ' · ' + (m === 0 ? 'Warm-up poll ' : 'Poll ') + pn + ' of ' + polls.length };
    }
    var quizzes = 1;
    Q.items.forEach(function (x) { if (x.topic === m && x.type === 'quiz') quizzes = Math.max(quizzes, x.quiz || 1); });
    var qz = it.quiz || 1;
    var same = Q.items.filter(function (x) { return x.topic === m && x.type === 'quiz' && (x.quiz || 1) === qz; });
    return { module: m, name: name, quiz: qz, quizTotal: quizzes,
      label: 'Module ' + m + ' · Quiz ' + qz + ' of ' + quizzes + ' · Q' + (same.indexOf(it) + 1) + '/' + same.length };
  };
  Q.moduleStart = function (m) { for (var i = 0; i < Q.items.length; i++) if (Q.items[i].topic === m) return i; return -1; };
})();
