/* ============================================================
   DATA — each question now has its own unique punishment
   ============================================================ */
const QUESTIONS = [
  // ---------- Your 16 questions (updated with new ones) ----------
  {
    q: "Which option best describes digital education?",
    opts: [
      "Learning only through printed books",
      "Teaching and learning using digital technology",
      "Watching television only",
      "Shopping through the internet"
    ],
    ans: 1,
    topic: "Digital Education",
    exp: "Digital education means using computers, smartphones, the internet, and other digital technologies for teaching and learning.",
    punishment: "📢 Say 'Digital is the future!' loudly three times."
  },
  {
    q: "Why do millions of people prefer shopping on e-commerce websites?",
    opts: [
      "They are open 24 hours a day and can be accessed from anywhere.",
      "They require customers to visit the shop.",
      "They only work during office hours.",
      "They always take longer than traditional shopping."
    ],
    ans: 0,
    topic: "E-commerce",
    exp: "One of the biggest advantages of e-commerce is that customers can shop anytime from anywhere.",
    punishment: "💬 Share one online shopping experience in one sentence."
  },
  {
    q: "In cloud computing, where are your files actually stored?",
    opts: [
      "Only inside your computer",
      "On internet-connected remote servers",
      "Inside a DVD",
      "Inside a USB flash drive"
    ],
    ans: 1,
    topic: "Cloud Computing",
    exp: "Cloud storage saves data on remote servers that are accessed through the internet.",
    punishment: "☁️ Draw a small cloud on the board with a data icon."
  },
  {
    q: "Future robots are expected to become more ________ because of Artificial Intelligence.",
    opts: [
      "Noisy",
      "Heavy",
      "Intelligent",
      "Expensive"
    ],
    ans: 2,
    topic: "Artificial Intelligence",
    exp: "AI helps robots become smarter and perform complex tasks with less human help.",
    punishment: "🤖 Act like a robot for 5 seconds."
  },
  {
    q: "Which type of robot is mainly designed for manufacturing work in factories?",
    opts: [
      "Industrial Robot",
      "Toy Robot",
      "Medical Robot",
      "Service Robot"
    ],
    ans: 0,
    topic: "Robotics",
    exp: "Industrial robots are used for assembly, welding, packaging, and other factory work.",
    punishment: "🏭 Mimic a factory machine sound."
  },
  {
    q: "What normally happens after an online government service has been completed?",
    opts: [
      "Application submission",
      "Verification",
      "Feedback and monitoring",
      "Data storage"
    ],
    ans: 2,
    topic: "E-Governance",
    exp: "Feedback and monitoring are usually the final steps to improve government services.",
    punishment: "📝 Suggest one improvement for a government website."
  },
  {
    q: "Which sequence correctly shows how data moves in a simple IoT system?",
    opts: [
      "Sensors → Gateway → Actuators",
      "Gateway → Sensors → Actuators",
      "Actuators → Gateway → Sensors",
      "Gateway → Actuators → Sensors"
    ],
    ans: 0,
    topic: "IoT",
    exp: "Sensors collect information, the gateway transfers it, and actuators perform the required action.",
    punishment: "🔗 Explain IoT in your own words (10 seconds)."
  },
  {
    q: "What is the main job of an IoT Gateway?",
    opts: [
      "Charging IoT devices",
      "Connecting sensors to the cloud or local network",
      "Programming robots",
      "Saving files on a hard disk"
    ],
    ans: 1,
    topic: "IoT",
    exp: "A gateway acts as a bridge between IoT devices and the internet or cloud.",
    punishment: "🌐 Draw a simple gateway symbol on the board."
  },
  {
    q: "The birth of Artificial Intelligence as a research field is associated with which year?",
    opts: [
      "1986",
      "1950",
      "1994",
      "1956"
    ],
    ans: 3,
    topic: "AI History",
    exp: "Artificial Intelligence became an official research field during the Dartmouth Conference in 1956.",
    punishment: "📅 Recite the year 1956 five times fast."
  },
  {
    q: "A computer receives data without labels and discovers hidden groups by itself. Which learning method is being used?",
    opts: [
      "Supervised Learning",
      "Artificial Intelligence",
      "Unsupervised Learning",
      "Reinforcement Learning"
    ],
    ans: 2,
    topic: "Machine Learning",
    exp: "Unsupervised Learning finds patterns in data without labeled examples.",
    punishment: "🧩 Explain clustering in one sentence."
  },
  // ---- Replaced with your new AR question ----
  {
    q: "What is Augmented reality?",
    opts: [
      "A fully virtual world.",
      "A technology that adds digital objects to the real world.",
      "A type of computer virus.",
      "A programming language."
    ],
    ans: 1,
    topic: "Augmented Reality",
    exp: "AR overlays digital information onto the real environment, not replacing it.",
    punishment: "📱 Name one AR app other than Pokémon GO."
  },
  // ---- Replaced with your new AR example ----
  {
    q: "Which of the following is an example of AR?",
    opts: [
      "Vr headset.",
      "Pokémon go.",
      "Microsoft word.",
      "Calculator."
    ],
    ans: 1,
    topic: "Augmented Reality",
    exp: "Pokémon GO uses your phone's camera to place virtual characters in the real world.",
    punishment: "🎮 Imitate catching a Pokémon with your phone."
  },
  // ---- Replaced with your Gen AI full form ----
  {
    q: "What is the full form of Gen AI?",
    opts: [
      "General Artificial Intelligence",
      "Generative Artificial Intelligence",
      "Genuine Artificial Intelligence",
      "Genetic Artificial Intelligence"
    ],
    ans: 1,
    topic: "Generative AI",
    exp: "Generative AI creates new content such as text, images, music, and code.",
    punishment: "✍️ Write one sentence generated by AI."
  },
  // ---- Replaced with your Gen AI advantage ----
  {
    q: "Which of the following is an advantage of Generative AI?",
    opts: [
      "It securely backs up your computer files to the cloud.",
      "It automatically scans your computer for viruses and malware.",
      "It instantly generates unique images and artwork from a text prompt."
    ],
    ans: 2,
    topic: "Generative AI",
    exp: "Generative AI can create original visuals, stories, and more from simple prompts.",
    punishment: "🖼️ Describe an image you would ask AI to create."
  },
  // ---- Replaced with your social media use ----
  {
    q: "What can people do on social media?",
    opts: [
      "Share photos and videos",
      "Make documents",
      "Build houses",
      "Repair computers"
    ],
    ans: 0,
    topic: "Social Media",
    exp: "Social media platforms are built for sharing content and communicating with others.",
    punishment: "📸 Share a fun fact about your favourite social media platform."
  },
  // ---- Replaced with your social media benefit ----
  {
    q: "Which is a benefit of social media?",
    opts: [
      "Connecting with family and friends",
      "Making computer slower",
      "Deleting all files automatically",
      "Damaging mobile phones"
    ],
    ans: 0,
    topic: "Social Media",
    exp: "Social media helps people stay connected with loved ones across the globe.",
    punishment: "❤️ Say something nice to a classmate (virtually)."
  },

  // ---------- 5 questions on Learning Techniques ----------
  {
    q: "Which learning technique uses labelled data to train a model?",
    opts: [
      "Clustering",
      "Regression",
      "Association",
      "Dimensionality Reduction"
    ],
    ans: 1,
    topic: "Supervised Learning",
    exp: "Regression is a supervised learning technique that learns from labelled input-output pairs.",
    punishment: "📊 Explain the difference between labelled and unlabeled data in one sentence."
  },
  {
    q: "Which of these is a type of Unsupervised Learning?",
    opts: ["Classification", "Regression", "Clustering", "Decision Trees"],
    ans: 2,
    topic: "Unsupervised Learning",
    exp: "Clustering groups data without labels, making it a core unsupervised method.",
    punishment: "🔍 Name one real-world use of clustering."
  },
  {
    q: "In Supervised Learning, the model learns from:",
    opts: [
      "Input data only",
      "Input-output pairs",
      "Random noise",
      "Reward signals"
    ],
    ans: 1,
    topic: "Supervised Learning",
    exp: "Supervised learning needs labelled examples (inputs and correct outputs) to learn.",
    punishment: "🎯 Give an example of a supervised learning task."
  },
  {
    q: "What is the main goal of Unsupervised Learning?",
    opts: [
      "Predict labels",
      "Minimize error using labels",
      "Find hidden patterns in unlabeled data",
      "Maximize reward"
    ],
    ans: 2,
    topic: "Unsupervised Learning",
    exp: "Unsupervised learning discovers structures or patterns without using labels.",
    punishment: "🧩 Explain what 'clustering' means."
  },
  {
    q: "Which algorithm is commonly used for classification (a supervised task)?",
    opts: ["K-Means", "Logistic Regression", "PCA", "Apriori"],
    ans: 1,
    topic: "Supervised Learning",
    exp: "Logistic Regression is a supervised algorithm for classification problems.",
    punishment: "Hey everyone do you know i am a fool."
  },

  // ---------- 4 NEW questions ----------
  {
    q: "What is the difference between Supervised and Unsupervised Learning?",
    opts: [
      "Supervised uses labelled data, Unsupervised uses unlabeled data",
      "Supervised is faster than Unsupervised",
      "Unsupervised always gives better results",
      "There is no difference"
    ],
    ans: 0,
    topic: "Machine Learning",
    exp: "Supervised learning uses labelled input-output pairs, while unsupervised learning works with unlabeled data to find patterns.",
    punishment: "📝say sorry."
  },
  {
    q: "Which of the following is an example of Supervised Learning?",
    opts: [
      "Customer segmentation",
      "Predicting house prices",
      "Anomaly detection",
      "Market basket analysis"
    ],
    ans: 1,
    topic: "Supervised Learning",
    exp: "Predicting house prices uses labelled data (past sales) to train the model, making it a supervised regression task.",
    punishment: " Dance in which song you like."
  },
  {
    q: "What does 'training a model' mean in Machine Learning?",
    opts: [
      "The model learns patterns from data",
      "The model is deleted",
      "The model is copied",
      "The model is sold"
    ],
    ans: 0,
    topic: "Machine Learning",
    exp: "Training is the process where the model learns from data to make predictions or find patterns.",
    punishment: "🤖 I didn't know that! but i know to sing a song."
  },
  {
    q: "Which of these is NOT a type of Machine Learning?",
    opts: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Constructive Learning"
    ],
    ans: 3,
    topic: "Machine Learning",
    exp: "The three main types are Supervised, Unsupervised, and Reinforcement Learning. Constructive Learning is not a standard type.",
    punishment: "Sing a song in your own language."
  }
];

const TOTAL_Q = QUESTIONS.length; // now 25
const TOTAL_STUDENTS = 400;        // original class size

/* ---------- Excluded roll numbers ---------- */
const EXCLUDED_ROLLS = [118, 139, 213, 220, 224, 238, 239];

// Helper to get the full list of eligible students
function getEligibleStudents() {
  return Array.from({ length: TOTAL_STUDENTS }, (_, i) => i + 1)
              .filter(roll => !EXCLUDED_ROLLS.includes(roll));
}

/* ===================== STATE ===================== */
let state = {
  screen: "home", // home | quiz | teacherLogin | teacherDash | result
  theme: "dark",
  availableStudents: getEligibleStudents(),   // only eligible students
  selectedHistory: [], // {roll, qIndex}
  answers: {}, // qIndex -> {correct:bool, roll, chosen}
  currentQ: null,
  currentStudent: null,
  punishmentsEnabled: true,
  shownExplain: false,
  locked: false,
  _confettiShown: false,
};

function score() {
  return Object.values(state.answers).filter((a) => a.correct).length;
}

function attempted() {
  return Object.keys(state.answers).length;
}

function remaining() {
  return TOTAL_Q - attempted();
}

function studentsSelectedCount() {
  // selected students = total eligible - currently available
  return getEligibleStudents().length - state.availableStudents.length;
}

/* ===================== THEME ===================== */
function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", state.theme);
  document.getElementById("themeBtn").innerHTML =
    state.theme === "dark" ? "🌙 Dark" : "☀️ Light";
  renderBgFx();
}

function renderBgFx() {
  const el = document.getElementById("bgfx");
  let dots = "";
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * 100,
      y = Math.random() * 100,
      r = Math.random() * 1.6 + 0.4;
    dots += `<circle cx="${x}%" cy="${y}%" r="${r}" fill="${state.theme === "dark" ? "#22d3ee" : "#6366f1"}" opacity="${(Math.random() * 0.5 + 0.2).toFixed(2)}"/>`;
  }
  el.innerHTML = `<svg>${dots}</svg>`;
}

/* ===================== ICONS ===================== */
const ICONS = {
  brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5v1A3.5 3.5 0 0 0 4 9.5v1A3.5 3.5 0 0 0 2.5 14v.5A3.5 3.5 0 0 0 6 18h.5M9.5 2a3.5 3.5 0 0 1 3.5 3.5v13A3.5 3.5 0 0 1 9.5 22M14.5 2a3.5 3.5 0 0 1 3.5 3.5v1A3.5 3.5 0 0 1 20 9.5v1a3.5 3.5 0 0 1 1.5 3v.5A3.5 3.5 0 0 1 18 18h-.5M14.5 2a3.5 3.5 0 0 0-3.5 3.5v13a3.5 3.5 0 0 0 3.5 3.5"/></svg>`,
  tags: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M20.59 13.41 11 3.83a2 2 0 0 0-1.41-.58H4a1 1 0 0 0-1 1v5.59a2 2 0 0 0 .58 1.41l9.58 9.58a2 2 0 0 0 2.83 0l6.59-6.59a2 2 0 0 0 0-2.83Z"/><circle cx="7" cy="7" r="1"/></svg>`,
  cluster: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="18" r="2.5"/><circle cx="12" cy="12" r="2.5"/><path d="M8.2 7.5 10.3 10.3M15.8 7.5 13.7 10.3M8.2 16.5 10.3 13.7M15.8 16.5 13.7 13.7"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
};

/* ===================== RENDER ROOT ===================== */
function render() {
  const root = document.getElementById("screens");
  if (state.screen === "home") root.innerHTML = renderHome();
  else if (state.screen === "quiz") root.innerHTML = renderQuiz();
  else if (state.screen === "result") root.innerHTML = renderResult();
  else if (state.screen === "teacherLogin")
    root.innerHTML = renderTeacherLogin();
  else if (state.screen === "teacherDash") root.innerHTML = renderTeacherDash();
  renderBgFx();
}

/* ===================== HOME ===================== */
function renderHome() {
  const eligibleTotal = getEligibleStudents().length;
  return `
          <div class="glass hero">
            <h1>Learning Techniques in AI Quiz</h1>
            <p>Explore the two foundational pillars of machine learning — <b>Supervised Learning</b>, where models learn from labelled examples, and <b>Unsupervised Learning</b>, where models uncover hidden patterns on their own. Answer 25 questions, get randomly called on like in a real classroom, and see how your understanding stacks up.</p>
            <div class="badges">
              <div class="badge glass">${ICONS.tags}<span>Supervised Learning</span></div>
              <div class="badge glass">${ICONS.cluster}<span>Unsupervised Learning</span></div>
              <div class="badge glass">${ICONS.spark}<span>${TOTAL_Q} Questions</span></div>
            </div>
            <button class="neon-btn" onclick="startQuiz()">🚀 Start Quiz</button>
          </div>

          <div class="topics-grid">
            <div class="glass topic-card">
              <div class="topic-icon" style="color:var(--cyan)">${ICONS.tags}</div>
              <h3>Supervised Learning</h3>
              <p>Models are trained on labelled datasets — every input comes with a known correct output. The algorithm learns to map inputs to outputs, used in tasks like classification and regression.</p>
            </div>
            <div class="glass topic-card">
              <div class="topic-icon" style="color:var(--purple)">${ICONS.cluster}</div>
              <h3>Unsupervised Learning</h3>
              <p>Models work with unlabeled data and try to discover hidden structures, groupings, or relationships on their own — powering clustering, dimensionality reduction, and anomaly detection.</p>
            </div>
          </div>

          <div class="glass tracker-card">
            <div class="tracker-stat"><div class="num">${TOTAL_Q}</div><div class="lbl">Questions</div></div>
            <div class="tracker-stat"><div class="num">${eligibleTotal}</div><div class="lbl">Eligible Roll Numbers</div></div>
            <div class="progress-outer"><div class="progress-inner" style="width:${(attempted() / TOTAL_Q) * 100}%"></div></div>
            <div class="tracker-stat"><div class="num">${attempted()}/${TOTAL_Q}</div><div class="lbl">Progress</div></div>
          </div>

          <footer class="note">Built for classroom use • Teacher controls available via the Teacher button above</footer>
          `;
}

function startQuiz() {
  state.screen = "quiz";
  render();
}

/* ===================== QUIZ GRID ===================== */
function renderQuiz() {
  const eligibleTotal = getEligibleStudents().length;
  let grid = "";
  for (let i = 0; i < TOTAL_Q; i++) {
    const ans = state.answers[i];
    const done = !!ans;
    const cls = done ? (ans.correct ? "done" : "done wrongdone") : "";
    grid += `<div class="glass qnum ${cls}" onclick="${done ? "" : `questionClicked(${i})`}">
              ${done ? `<span class="tick">${ans.correct ? "✅" : "❌"}</span>` : `<div>Q${i + 1}</div>`}
              <span class="tag">${done ? (ans.correct ? "Correct" : "Wrong") : "Tap to call"}</span>
            </div>`;
  }
  return `
          <div class="section-title">
            <h2>📋 Quiz Questions</h2>
            <button class="icon-btn" onclick="goHome()">⬅ Home</button>
          </div>

          <div class="glass progress-card">
            <div class="pstats">
              <div class="pstat"><div class="v" style="color:var(--green)">${score()}</div><div class="l">Score</div></div>
              <div class="pstat"><div class="v">${attempted()}</div><div class="l">Attempted</div></div>
              <div class="pstat"><div class="v">${remaining()}</div><div class="l">Remaining</div></div>
              <div class="pstat"><div class="v" style="color:var(--purple)">${studentsSelectedCount()}/${eligibleTotal}</div><div class="l">Students Selected</div></div>
              <div class="pstat"><div class="v" style="color:var(--cyan)">${state.availableStudents.length}</div><div class="l">Remaining Students</div></div>
            </div>
          </div>
          <div class="progress-outer" style="height:12px;margin-bottom:24px;">
            <div class="progress-inner" style="width:${(attempted() / TOTAL_Q) * 100}%"></div>
          </div>
          <p style="text-align:center;color:var(--text-dim);font-size:13px;margin-top:-14px;margin-bottom:22px;">${attempted()}/${TOTAL_Q} Questions Completed</p>

          <div class="qgrid">${grid}</div>
          `;
}

function goHome() {
  state.screen = "home";
  render();
}

/* ===================== QUESTION FLOW ===================== */
function questionClicked(qIndex) {
  if (state.answers[qIndex]) return;

  // --- Normal random selection from eligible students ---
  if (state.availableStudents.length === 0) {
    state.availableStudents = getEligibleStudents();
  }
  const idx = Math.floor(Math.random() * state.availableStudents.length);
  const roll = state.availableStudents[idx];
  state.availableStudents.splice(idx, 1);
  state.currentStudent = roll;

  state.currentQ = qIndex;
  state.locked = false;
  state.shownExplain = false;

  showRoulette(roll, qIndex);
}

function showRoulette(roll, qIndex) {
  const modal = document.getElementById("modalRoot");
  modal.innerHTML = `
          <div class="modal-backdrop">
            <div class="glass modal roulette-wrap" id="rouletteModal">
              <h3>🎓 Selecting Student</h3>
              <div class="roulette-display" id="rouletteNum">--</div>
              <div class="spinner-track"><div class="spinner-bar"></div></div>
              <div class="roulette-sub" id="rouletteSub">Spinning roulette...</div>
              <div class="roulette-sub" style="margin-top:10px;">Students Selected: ${studentsSelectedCount()}/${getEligibleStudents().length} &nbsp;•&nbsp; Remaining: ${state.availableStudents.length}</div>
            </div>
          </div>`;

  const numEl = document.getElementById("rouletteNum");
  let count = 0;
  const totalTicks = 18;
  const interval = setInterval(() => {
    count++;
    const randomShow = Math.floor(Math.random() * TOTAL_STUDENTS) + 1;
    numEl.textContent = count >= totalTicks ? roll : randomShow;
    if (count >= totalTicks) {
      clearInterval(interval);
      document.getElementById("rouletteSub").innerHTML =
        `<span class="result-pop">🎯 Roll Number ${roll}, please answer this question!</span>`;
      setTimeout(() => {
        showQuestion(roll, qIndex);
      }, 1100);
    }
  }, 165);
}

function showQuestion(roll, qIndex) {
  const modal = document.getElementById("modalRoot");
  const Q = QUESTIONS[qIndex];
  const letters = ["A", "B", "C", "D"];
  modal.innerHTML = `
          <div class="modal-backdrop">
            <div class="glass modal" id="questionModal" style="max-width:600px;">
              <div class="q-meta">
                <span class="student-chip">🎯 Roll No. ${roll}</span>
                <span>Question ${qIndex + 1} of ${TOTAL_Q} • <span style="color:var(--cyan)">${Q.topic}</span></span>
              </div>
              <div class="q-text">Q${qIndex + 1}. ${Q.q}</div>
              <div class="options" id="optionsWrap">
                ${Q.opts.map((o, i) => `<div class="opt" data-i="${i}" onclick="submitAnswer(${qIndex},${i})"><span class="lbl-letter">${letters[i]}.</span>${o}</div>`).join("")}
              </div>
              <div id="explainWrap"></div>
              <div class="q-actions" id="qActionsWrap"></div>
            </div>
          </div>`;
}

function submitAnswer(qIndex, chosenIdx) {
  if (state.locked) return;
  state.locked = true;
  const Q = QUESTIONS[qIndex];
  const correct = chosenIdx === Q.ans;
  const roll = state.currentStudent;

  state.answers[qIndex] = { correct, roll, chosen: chosenIdx };

  // visually lock options
  const optsEls = document.querySelectorAll("#optionsWrap .opt");
  optsEls.forEach((el) => {
    el.classList.add("locked");
    const i = parseInt(el.dataset.i);
    if (i === Q.ans) el.classList.add("correct");
    if (i === chosenIdx && chosenIdx !== Q.ans) el.classList.add("wrong");
  });

  if (correct) {
    playSuccessSound();
    // ---- REWARD MESSAGE ----
    document.getElementById("explainWrap").innerHTML = `
      <div class="explain" style="background:rgba(255,215,0,0.15);border-color:gold;">
        <b>✅ Correct!</b> 
        <span style="font-size:1.4rem;display:block;margin:6px 0;">🎉 Wow! Take a chocolate! 🍫</span>
        <span style="font-size:0.9rem;color:var(--text-dim);">${Q.exp}</span>
      </div>
    `;
    document.getElementById("qActionsWrap").innerHTML = `
      <button class="neon-btn small" onclick="closeQuestionModal()">Continue ➜</button>
    `;
  } else {
    // WRONG — show the question's specific punishment
    document.getElementById("explainWrap").innerHTML = `
      <div class="explain"><b>📘 Explanation:</b> ${Q.exp}</div>
    `;
    document.getElementById("qActionsWrap").innerHTML = `
      <button class="neon-btn small ghost" onclick="${state.punishmentsEnabled ? "showPunishment()" : "closeQuestionModal()"}">${state.punishmentsEnabled ? "See Challenge ➜" : "Continue ➜"}</button>
    `;
  }
}

function playSuccessSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(523.25, ctx.currentTime);
    o.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
    o.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

/* ------------------------------------------------------------
   showPunishment — uses the CURRENT question's unique punishment
   ------------------------------------------------------------ */
function showPunishment() {
  const Q = QUESTIONS[state.currentQ];
  const punishment = Q.punishment || "📘 Explain the correct answer.";

  const modal = document.getElementById("modalRoot");
  modal.innerHTML = `
          <div class="modal-backdrop">
            <div class="glass modal punish-modal">
              <div class="x-icon">❌</div>
              <h2>Wrong Answer!</h2>
              <div class="correct-line">Correct Answer: <b style="color:var(--green)">${Q.opts[Q.ans]}</b></div>
              <div class="punish-box">
                <div class="ptitle">🎭 Your Challenge for this Question</div>
                <div class="ptext">${punishment}</div>
              </div>
              <button class="neon-btn" onclick="closeQuestionModal()">Challenge Completed ✅</button>
            </div>
          </div>`;
}

function closeQuestionModal() {
  document.getElementById("modalRoot").innerHTML = "";
  state.currentQ = null;
  state.currentStudent = null;
  if (attempted() === TOTAL_Q) {
    state.screen = "result";
    state._confettiShown = false;
  }
  render();
}

/* ===================== RESULT SCREEN ===================== */
function renderResult() {
  const correct = score();
  const wrong = attempted() - correct;
  const pct = Math.round((correct / TOTAL_Q) * 100);
  const pass = pct >= 40;

  if (pct >= 80 && !state._confettiShown) {
    state._confettiShown = true;
    setTimeout(fireConfetti, 200);
  }

  return `
          <div class="glass result-hero">
            <h1 style="font-size:30px;background:linear-gradient(90deg,var(--cyan),var(--purple));-webkit-background-clip:text;background-clip:text;color:transparent;">Quiz Completed!</h1>
            <div class="status ${pass ? "pass" : "fail"}">${pass ? "🎉 PASS" : "⚠️ FAIL"}</div>

            <div class="result-grid">
              <div class="glass result-tile"><div class="v">${correct}/${TOTAL_Q}</div><div class="l">Total Marks</div></div>
              <div class="glass result-tile"><div class="v">${pct}%</div><div class="l">Percentage</div></div>
              <div class="glass result-tile" style="color:var(--green)"><div class="v" style="color:var(--green)">${correct}</div><div class="l">Correct Answers</div></div>
              <div class="glass result-tile"><div class="v" style="color:var(--red)">${wrong}</div><div class="l">Wrong Answers</div></div>
            </div>

            <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
              <button class="neon-btn" onclick="restartQuiz()">🔄 Restart Quiz</button>
              <button class="neon-btn ghost" onclick="downloadResult()">⬇ Download Result</button>
              <button class="neon-btn purple" onclick="goHome()">🏠 Home</button>
            </div>
          </div>
          `;
}

function restartQuiz() {
  state.answers = {};
  state.availableStudents = getEligibleStudents();
  state._confettiShown = false;
  state.screen = "quiz";
  render();
}

function downloadResult() {
  const correct = score();
  const wrong = attempted() - correct;
  const pct = Math.round((correct / TOTAL_Q) * 100);
  const pass = pct >= 40;
  let lines = ["Learning Techniques in AI Quiz - Result", ""];
  lines.push(`Total Marks: ${correct}/${TOTAL_Q}`);
  lines.push(`Percentage: ${pct}%`);
  lines.push(`Correct Answers: ${correct}`);
  lines.push(`Wrong Answers: ${wrong}`);
  lines.push(`Status: ${pass ? "Pass" : "Fail"}`);
  lines.push("");
  lines.push("Question-wise breakdown:");
  for (let i = 0; i < TOTAL_Q; i++) {
    const a = state.answers[i];
    if (a) {
      lines.push(
        `Q${i + 1} (Roll No. ${a.roll}): ${a.correct ? "Correct" : "Wrong"}`,
      );
    }
  }
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quiz_result.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function fireConfetti() {
  const colors = ["#22d3ee", "#8b5cf6", "#3b82f6", "#f8fafc"];
  for (let i = 0; i < 70; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    piece.style.animation = `confettiFall ${2 + Math.random() * 2}s linear forwards`;
    piece.style.opacity = "0.9";
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4200);
  }
}
const styleSheet = document.createElement("style");
styleSheet.textContent = `@keyframes confettiFall{to{transform:translateY(105vh) rotate(720deg);opacity:0.3;}}`;
document.head.appendChild(styleSheet);

/* ===================== TEACHER LOGIN ===================== */
function openTeacherLogin() {
  state.screen = "teacherLogin";
  render();
}

function renderTeacherLogin() {
  return `
          <div class="glass" style="max-width:420px;margin:60px auto;padding:34px;text-align:center;">
            <div style="font-size:32px;margin-bottom:8px;">🛠️</div>
            <h2 style="margin:0 0 6px;">Teacher Dashboard</h2>
            <p style="color:var(--text-dim);font-size:13.5px;margin-bottom:22px;">Enter password to continue</p>
            <input type="password" id="teacherPass" class="search-input" placeholder="Password" style="margin-bottom:14px;max-width:100%;" onkeydown="if(event.key==='Enter')checkTeacherPass()">
            <div id="loginError" style="color:var(--red);font-size:12.5px;margin-bottom:10px;height:14px;"></div>
            <button class="neon-btn" style="width:100%;" onclick="checkTeacherPass()">Login</button>
            <button class="link-btn" style="margin-top:14px;" onclick="goHome()">⬅ Back to Home</button>
          </div>
          `;
}

function checkTeacherPass() {
  const val = document.getElementById("teacherPass").value;
  if (val === "teacher123") {
    state.screen = "teacherDash";
    render();
  } else {
    document.getElementById("loginError").textContent =
      "Incorrect password. Try again.";
  }
}

/* ===================== TEACHER DASHBOARD ===================== */
let dashSort = { key: null, dir: 1 };
let dashSearch = "";

function renderTeacherDash() {
  const correct = score();
  const wrong = attempted() - correct;
  const pct = TOTAL_Q ? Math.round((correct / TOTAL_Q) * 100) : 0;
  const classAvgPct = pct;

  let rows = Object.keys(state.answers).map((qi) => {
    const a = state.answers[qi];
    return {
      q: parseInt(qi) + 1,
      roll: a.roll,
      result: a.correct ? "Correct" : "Wrong",
    };
  });

  if (dashSearch) {
    rows = rows.filter((r) => String(r.roll).includes(dashSearch));
  }
  if (dashSort.key) {
    rows.sort((a, b) => {
      let va = a[dashSort.key],
        vb = b[dashSort.key];
      if (typeof va === "string") va = va.toLowerCase();
      if (typeof vb === "string") vb = vb.toLowerCase();
      return va > vb ? dashSort.dir : va < vb ? -dashSort.dir : 0;
    });
  }

  const rowsHtml = rows.length
    ? rows
        .map(
          (r) => `
              <tr>
                <td>Q${r.q}</td>
                <td>${r.roll}</td>
                <td style="color:${r.result === "Correct" ? "var(--green)" : "var(--red)"}">${r.result}</td>
              </tr>
            `,
        )
        .join("")
    : `<tr><td colspan="3" style="color:var(--text-dim);text-align:center;padding:18px;">No results yet</td></tr>`;

  // Build a list showing each question's unique punishment
  const punishmentList = QUESTIONS.map(
    (q, i) => `
              <div class="punishment-item">
                <span class="qnum-small">Q${i + 1}</span>
                <span class="p-text">${q.punishment || "—"}</span>
              </div>
            `,
  ).join("");

  return `
          <div class="section-title">
            <h2>🛠️ Teacher Dashboard</h2>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <button class="icon-btn" onclick="exportCSV()">⬇ Export CSV</button>
              <button class="icon-btn" onclick="goHome()">⬅ Home</button>
            </div>
          </div>

          <div class="glass dash-section">
            <h3>📊 Class Overview</h3>
            <div class="result-grid" style="margin:0;">
              <div class="glass result-tile"><div class="v">${studentsSelectedCount()}/${getEligibleStudents().length}</div><div class="l">Students Selected</div></div>
              <div class="glass result-tile"><div class="v">${attempted()}/${TOTAL_Q}</div><div class="l">Questions Attempted</div></div>
              <div class="glass result-tile" style="color:var(--green)"><div class="v" style="color:var(--green)">${correct}</div><div class="l">Correct</div></div>
              <div class="glass result-tile"><div class="v">${classAvgPct}%</div><div class="l">Class Average</div></div>
            </div>
          </div>

          <div class="glass dash-section">
            <h3>🔍 Selected Roll Numbers & Results</h3>
            <div class="row-flex">
              <div style="flex:1;min-width:180px;"><input class="search-input" placeholder="Search roll number..." oninput="dashSearch=this.value; renderDashTableOnly()" id="searchBox"></div>
              <span class="tag-pill">${state.availableStudents.length} students remaining</span>
            </div>
            <div id="dashTableWrap">
              <table class="dash-table">
                <thead><tr>
                  <th onclick="sortDash('q')">Question ⇅</th>
                  <th onclick="sortDash('roll')">Roll No. ⇅</th>
                  <th onclick="sortDash('result')">Result ⇅</th>
                </tr></thead>
                <tbody id="dashTbody">${rowsHtml}</tbody>
              </table>
            </div>
          </div>

          <div class="glass dash-section">
            <h3>🎭 Punishments — One per Question</h3>
            <div class="toggle-pill" style="background:rgba(34,211,238,.08);border-color:rgba(34,211,238,.3);margin-bottom:14px;">
              <span><b>Enable Punishments (Global)</b></span>
              <label class="switch">
                <input type="checkbox" class="lock-input" ${state.punishmentsEnabled ? "checked" : ""} onchange="togglePunishmentsGlobal(this.checked)">
                <span class="slider-switch"></span>
              </label>
            </div>
            <p style="color:var(--text-dim);font-size:12.5px;margin-bottom:10px;">Each question has its own unique challenge. When a student answers incorrectly, they receive the challenge assigned to that specific question.</p>
            <div style="opacity:${state.punishmentsEnabled ? 1 : 0.5}; pointer-events:${state.punishmentsEnabled ? "auto" : "none"};">
              <div class="punishment-grid">${punishmentList}</div>
            </div>
          </div>
          `;
}

function renderDashTableOnly() {
  render();
  setTimeout(() => {
    const sb = document.getElementById("searchBox");
    if (sb) {
      sb.value = dashSearch;
      sb.focus();
    }
  }, 0);
}

function sortDash(key) {
  if (dashSort.key === key) dashSort.dir *= -1;
  else {
    dashSort.key = key;
    dashSort.dir = 1;
  }
  render();
}

function togglePunishmentsGlobal(val) {
  state.punishmentsEnabled = val;
  render();
}

function exportCSV() {
  let csv = "Question,RollNumber,Result\n";
  Object.keys(state.answers).forEach((qi) => {
    const a = state.answers[qi];
    csv += `Q${parseInt(qi) + 1},${a.roll},${a.correct ? "Correct" : "Wrong"}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "quiz_results.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ===================== INIT ===================== */
render();