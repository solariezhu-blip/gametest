// =====================
// 总题库（50 题）
// =====================
const questionBank = [
  { question: "手机屏幕越大，一定越好用吗？", options: ["是的", "不一定", "完全没关系"], correctIndex: 1 },
  { question: "网页小游戏可以在手机浏览器直接玩吗？", options: ["不可以", "可以", "只能在电脑"], correctIndex: 1 },
  { question: "HTML 的主要作用是什么？", options: ["控制样式", "写逻辑", "搭建页面结构"], correctIndex: 2 },
  { question: "CSS 主要用于什么？", options: ["页面结构", "页面样式", "数据处理"], correctIndex: 1 },
  { question: "JavaScript 可以实现什么功能？", options: ["页面交互", "页面样式", "图片压缩"], correctIndex: 0 },
  { question: "手机网页是否需要下载安装到手机？", options: ["需要", "不需要"], correctIndex: 1 },
  { question: "刷新网页后，网页数据通常会？", options: ["保留", "重置"], correctIndex: 1 },
  { question: "按钮点击效果属于哪一类功能？", options: ["交互逻辑", "页面结构"], correctIndex: 0 },
  { question: "倒计时答题常用于什么场景？", options: ["活动互动", "文本阅读"], correctIndex: 0 },
  { question: "以下哪项更适合门店互动？", options: ["长文字说明", "小游戏答题"], correctIndex: 1 },

  { question: "网页是否可以通过二维码打开？", options: ["不可以", "可以"], correctIndex: 1 },
  { question: "手机优先设计通常是？", options: ["先做电脑", "先做手机"], correctIndex: 1 },
  { question: "以下哪种是前端文件？", options: ["index.html", "data.sql"], correctIndex: 0 },
  { question: "HTML 文件可以直接用浏览器打开吗？", options: ["可以", "不可以"], correctIndex: 0 },
  { question: "以下哪种不是编程语言？", options: ["JavaScript", "HTML", "Photoshop"], correctIndex: 2 },
  { question: "网页按钮一般使用什么标签？", options: ["button", "img"], correctIndex: 0 },
  { question: "手机浏览器是否支持 JavaScript？", options: ["支持", "不支持"], correctIndex: 0 },
  { question: "网页加载慢最影响什么？", options: ["用户体验", "手机电量"], correctIndex: 0 },
  { question: "小游戏互动的主要目的是什么？", options: ["增加参与感", "减少停留"], correctIndex: 0 },
  { question: "以下哪项不属于网页三要素？", options: ["HTML", "CSS", "Excel"], correctIndex: 2 },

  { question: "点击后颜色变化通常由什么控制？", options: ["CSS", "HTML"], correctIndex: 0 },
  { question: "网页可以适配不同尺寸手机吗？", options: ["不可以", "可以"], correctIndex: 1 },
  { question: "网页小游戏是否需要联网？", options: ["必须", "不一定"], correctIndex: 1 },
  { question: "手机竖屏设计更适合？", options: ["社交/互动", "Excel 编辑"], correctIndex: 0 },
  { question: "以下哪种行为是用户交互？", options: ["点击按钮", "加载图片"], correctIndex: 0 },
  { question: "网页文件通常存放在哪里？", options: ["文件夹", "相册"], correctIndex: 0 },
  { question: "答题后立即反馈对错的好处是？", options: ["更有参与感", "增加难度"], correctIndex: 0 },
  { question: "倒计时结束未答题通常判定为？", options: ["错误", "正确"], correctIndex: 0 },
  { question: "以下哪项适合活动抽奖前环节？", options: ["答题小游戏", "说明文"], correctIndex: 0 },
  { question: "网页是否可以长期使用？", options: ["可以", "不可以"], correctIndex: 0 },

  { question: "按钮禁用后还能点击吗？", options: ["能", "不能"], correctIndex: 1 },
  { question: "题目随机的好处是？", options: ["防止重复", "增加加载时间"], correctIndex: 0 },
  { question: "网页标题一般写在哪里？", options: ["title 标签", "body 标签"], correctIndex: 0 },
  { question: "一个网页可以只有一个 HTML 文件吗？", options: ["可以", "不可以"], correctIndex: 0 },
  { question: "手机端点击区域通常要？", options: ["大一些", "越小越好"], correctIndex: 0 },
  { question: "以下哪项不影响用户体验？", options: ["加载速度", "是否好玩", "文件名"], correctIndex: 2 },
  { question: "网页小游戏适合多长时间完成？", options: ["1-3 分钟", "30 分钟"], correctIndex: 0 },
  { question: "活动互动页面的核心是？", options: ["参与感", "技术复杂度"], correctIndex: 0 },
  { question: "手机网页是否支持震动反馈？", options: ["支持", "不支持"], correctIndex: 0 },
  { question: "题目数量过多会导致？", options: ["疲劳", "更有趣"], correctIndex: 0 }
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

      // ⭐ 答对时触发剑气斩断效果
      if (index === correctIndex) {
        btn.classList.add("cut-effect");
      }
    } else if
 (i === index) {
  btn.
classList.add("wrong"
);
  btn.
classList.add("wrong-impact"); // ⭐ 答错震开效果
}
  });

  if (index === correctIndex) {
    score++;
    scoreEl.textContent = `得分：${score}`;
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
  if (percent >= 80) message = "🎉 太棒了！你对内容非常了解！";
  else if (percent >= 50) message = "👍 不错！再努力一点就更完美！";

  questionEl.innerHTML = "答题完成 🎉";
  optionsEl.innerHTML = `
    <div style="text-align:center; margin-top:20px;">
      <p>答对题数：<strong>${score} / ${total}</strong></p>
      <p>正确率：<strong>${percent}%</strong></p>
      <p style="margin-top:15px;">${message}</p>
      <button onclick="location.reload()" style="
        margin-top:20px;
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

