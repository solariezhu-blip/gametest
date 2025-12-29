// =====================
// 题库（50 题）
// =====================
const questionBank = [
  { question: "手机屏幕越大，一定越好用吗？", options: ["是的", "不一定", "完全没关系"], correctIndex: 1 },
  { question: "网页小游戏可以在手机浏览器直接玩吗？", options: ["不可以", "可以", "只能在电脑"], correctIndex: 1 },
  { question: "HTML 的主要作用是什么？", options: ["控制样式", "写逻辑", "搭建页面结构"], correctIndex: 2 },
  { question: "CSS 主要用于什么？", options: ["页面结构", "页面样式", "数据处理"], correctIndex: 1 },
  { question: "JavaScript 可以实现什么功能？", options: ["页面交互", "页面样式", "图片压缩"], correctIndex: 0 },
  { question: "手机网页是否需要下载安装？", options: ["需要", "不需要"], correctIndex: 1 },
  { question: "刷新网页后，题目会？", options: ["不变", "重新随机"], correctIndex: 1 },
  { question: "倒计时答题的作用是？", options: ["增加紧张感", "降低难度"], correctIndex: 0 },
  { question: "手机优先设计更适合？", options: ["活动互动", "办公软件"], correctIndex: 0 },
  { question: "网页是否可以扫码访问？", options: ["可以", "不可以"], correctIndex: 0 },

  { question: "按钮点击属于哪类功能？", options: ["交互", "装饰"], correctIndex: 0 },
  { question: "HTML 文件能否直接用浏览器打开？", options: ["可以", "不可以"], correctIndex: 0 },
  { question: "CSS 能控制动画吗？", options: ["能", "不能"], correctIndex: 0 },
  { question: "JS 是否能控制图片切换？", options: ["能", "不能"], correctIndex: 0 },
  { question: "答题小游戏是否适合门店活动？", options: ["适合", "不适合"], correctIndex: 0 },
  { question: "题目随机的好处是？", options: ["防止重复", "增加加载"], correctIndex: 0 },
  { question: "手机竖屏更符合？", options: ["单手操作", "横向阅读"], correctIndex: 0 },
  { question: "答题后即时反馈的好处？", options: ["更有参与感", "更复杂"], correctIndex: 0 },
  { question: "网页小游戏需要服务器吗？", options: ["不一定", "必须"], correctIndex: 0 },
  { question: "结果页的作用是？", options: ["总结表现", "继续答题"], correctIndex: 0 },

  { question: "选项按钮应不应该大？", options: ["应该", "不应该"], correctIndex: 0 },
  { question: "答错时给反馈是否重要？", options: ["重要", "不重要"], correctIndex: 0 },
  { question: "小游戏是否应该有角色？", options: ["应该", "不需要"], correctIndex: 0 },
  { question: "角色表情能增强？", options: ["情绪代入", "加载速度"], correctIndex: 0 },
  { question: "视觉反馈是否影响体验？", options: ["影响很大", "几乎不"], correctIndex: 0 },
  { question: "倒计时结束未答算？", options: ["答错", "答对"], correctIndex: 0 },
  { question: "活动页面推荐时长？", options: ["1-3 分钟", "30 分钟"], correctIndex: 0 },
  { question: "小游戏更适合？", options: ["碎片时间", "长时间"], correctIndex: 0 },
  { question: "按钮反馈能提升？", options: ["爽感", "复杂度"], correctIndex: 0 },
  { question: "动画是否需要很复杂？", options: ["不需要", "必须"], correctIndex: 0 },

  { question: "用户更喜欢？", options: ["有反馈", "无反馈"], correctIndex: 0 },
  { question: "题目越多越好吗？", options: ["不一定", "一定"], correctIndex: 0 },
  { question: "小游戏是否适合扫码？", options: ["适合", "不适合"], correctIndex: 0 },
  { question: "角色可以代表？", options: ["引导者", "干扰"], correctIndex: 0 },
  { question: "视觉统一是否重要？", options: ["重要", "不重要"], correctIndex: 0 },
  { question: "动画应不应该打断流程？", options: ["不应该", "应该"], correctIndex: 0 },
  { question: "失败反馈是否要明显？", options: ["要", "不要"], correctIndex: 0 },
  { question: "正确反馈是否要爽？", options: ["要", "不要"], correctIndex: 0 },
  { question: "小游戏的核心是？", options: ["体验", "技术"], correctIndex: 0 },
  { question: "角色状态切换是否有用？", options: ["非常有用", "没用"], correctIndex: 0 }
];

// =====================
// 随机抽 10 题
// =====================
function getRandomQuestions(bank, count) {
  return [...bank].sort(() => Math.random() - 0.5).slice(0, count);
}
const questions = getRandomQuestions(questionBank, 10);

// =====================
// 状态变量
// =====================
let currentIndex = 0;
let score = 0;
let answered = false;
let timeLeft = 10;
let timerInterval = null;

// =====================
// 页面元素
// =====================
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const characterEl = document.getElementById("character");

// =====================
// 角色状态控制
// =====================
function setCharacterNormal() {
  characterEl.src = "images/hero_normal.png";
  characterEl.className = "";
}

function setCharacterHappy() {
  characterEl.src = "images/hero_happy.png";
  characterEl.className = "character-happy";
}

function setCharacterSad() {
  characterEl.src = "images/hero_sad.png";
  characterEl.className = "character-sad";
}

// =====================
// 倒计时
// =====================
function startTimer() {
  timeLeft = 10;
  timerEl.textContent = `剩余时间：${timeLeft} 秒`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `剩余时间：${timeLeft} 秒`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

function timeUp() {
  if (answered) return;
  answered = true;
  setCharacterSad();

  const correctIndex = questions[currentIndex].correctIndex;
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    if (i === correctIndex) btn.classList.add("correct");
    btn.disabled = true;
  });

  setTimeout(nextQuestion, 1500);
}

// =====================
// 加载题目
// =====================
function loadQuestion() {
  answered = false;
  setCharacterNormal();
  nextBtn.style.display = "none";
  optionsEl.innerHTML = "";

  clearInterval(timerInterval);
  startTimer();

  const q = questions[currentIndex];
  questionEl.textContent = q.question;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => selectAnswer(i);
    optionsEl.appendChild(btn);
  });
}

// =====================
// 选择答案
// =====================
function selectAnswer(index) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

  const correctIndex = questions[currentIndex].correctIndex;
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correctIndex) {
      btn.classList.add("correct");
      if (index === correctIndex) {
        btn.classList.add("cut-effect");
      }
    } else if (i === index) {
      btn.classList.add("wrong", "wrong-impact");
    }
  });

  if (index === correctIndex) {
    score++;
    scoreEl.textContent = `得分：${score}`;
    setCharacterHappy();
  } else {
    setCharacterSad();
  }

  nextBtn.style.display = "block";
}

// =====================
// 下一题 / 结果页
// =====================
function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// =====================
// 结果页
// =====================
function showResult() {
  clearInterval(timerInterval);
  timerEl.style.display = "none";
  nextBtn.style.display = "none";

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  let message = "💪 没关系，再试一次会更好！";
  if (percent >= 80) {
    message = "🎉 太棒了！你是答题高手！";
    setCharacterHappy();
  } else if (percent >= 50) {
    message = "👍 表现不错，再接再厉！";
    setCharacterNormal();
  } else {
    setCharacterSad();
  }

  questionEl.textContent = "答题完成 🎉";
  optionsEl.innerHTML = `
    <div style="text-align:center; margin-top:20px;">
      <p>答对题数：<strong>${score} / ${total}</strong></p>
      <p>正确率：<strong>${percent}%</strong></p>
      <p style="margin-top:12px;">${message}</p>
      <button onclick="location.reload()" style="
        margin-top:18px;
        padding:12px 20px;
        font-size:16px;
        border:none;
        border-radius:8px;
        background:#2196f3;
        color:#fff;
      ">重新开始</button>
    </div>
  `;
}

// 初始化
loadQuestion();

