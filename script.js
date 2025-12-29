// =====================
// 题库（50 题）
// =====================
const
 questionBank = [
  { 
question: "OPPO 是来自哪个国家的品牌？", options: ["中国", "韩国", "日本"], correctIndex: 0
 },
  { 
question: "OPPO 手机主打的核心优势之一是？", options: ["拍照", "打印", "游戏主机"], correctIndex: 0
 },
  { 
question: "OPPO Find 系列定位是？", options: ["旗舰系列", "入门系列", "老人机"], correctIndex: 0
 },
  { 
question: "OPPO Reno 系列主要面向哪类用户？", options: ["追求影像与设计的用户", "仅打电话用户", "工业用户"], correctIndex: 0
 },
  { 
question: "OPPO A 系列更适合？", options: ["日常实用与性价比用户", "专业摄影师", "电竞职业选手"], correctIndex: 0
 },

  { 
question: "OPPO 手机常见的快充技术是？", options: ["VOOC 闪充", "MagSafe", "QC"], correctIndex: 0
 },
  { 
question: "VOOC 闪充的特点是？", options: ["充电速度快且稳定", "只能慢充", "只能无线充"], correctIndex: 0
 },
  { 
question: "OPPO 是否支持大功率快充？", options: ["支持", "不支持"], correctIndex: 0
 },
  { 
question: "OPPO 手机在充电时是否注重安全？", options: ["非常注重", "不太在意"], correctIndex: 0
 },
  { 
question: "OPPO 的快充技术适合哪种场景？", options: ["碎片化时间充电", "整夜慢充"], correctIndex: 0
 },

  { 
question: "OPPO 在影像方面的优势包括？", options: ["人像与夜景", "传真功能", "扫描文件"], correctIndex: 0
 },
  { 
question: "OPPO 人像拍照通常强调？", options: ["自然肤色与虚化", "过度美颜", "黑白照片"], correctIndex: 0
 },
  { 
question: "OPPO 是否重视视频拍摄体验？", options: ["是的", "不是"], correctIndex: 0
 },
  { 
question: "OPPO 手机常见的拍照场景是？", options: ["日常生活记录", "专业电影制作"], correctIndex: 0
 },
  { 
question: "OPPO 手机适合拍摄哪类内容？", options: ["人物与生活瞬间", "仅文档"], correctIndex: 0
 },

  { 
question: "OPPO 手机使用的系统是？", options: ["ColorOS", "iOS", "HarmonyOS"], correctIndex: 0
 },
  { 
question: "ColorOS 的特点是？", options: ["流畅、易用、人性化", "复杂难用", "只能英文"], correctIndex: 0
 },
  { 
question: "ColorOS 是否适合新用户？", options: ["非常适合", "不适合"], correctIndex: 0
 },
  { 
question: "OPPO 系统是否支持手势操作？", options: ["支持", "不支持"], correctIndex: 0
 },
  { 
question: "ColorOS 是否注重隐私保护？", options: ["注重", "不注重"], correctIndex: 0
 },

  { 
question: "OPPO 是否在全球多个国家销售？", options: ["是的", "只在一个国家"], correctIndex: 0
 },
  { 
question: "OPPO 在东南亚市场表现如何？", options: ["非常活跃", "几乎没有"], correctIndex: 0
 },
  { 
question: "OPPO 门店的主要作用是？", options: ["体验产品与服务", "只看广告"], correctIndex: 0
 },
  { 
question: "在 OPPO 门店可以做什么？", options: ["体验拍照与功能", "只能买配件"], correctIndex: 0
 },
  { 
question: "OPPO 是否提供线下售后支持？", options: ["提供", "不提供"], correctIndex: 0
 },

  { 
question: "OPPO 手机是否适合年轻用户？", options: ["适合", "不适合"], correctIndex: 0
 },
  { 
question: "OPPO 是否注重手机外观设计？", options: ["非常注重", "不注重"], correctIndex: 0
 },
  { 
question: "OPPO 手机的颜色设计通常？", options: ["时尚多样", "只有黑色"], correctIndex: 0
 },
  { 
question: "OPPO Reno 系列常见卖点是？", options: ["轻薄与影像", "厚重机身"], correctIndex: 0
 },
  { 
question: "OPPO Find 系列常见卖点是？", options: ["高端配置与创新", "低性能"], correctIndex: 0
 },

  { 
question: "OPPO 手机是否适合日常社交使用？", options: ["非常适合", "不适合"], correctIndex: 0
 },
  { 
question: "OPPO 是否持续推出新技术？", options: ["是的", "不是"], correctIndex: 0
 },
  { 
question: "OPPO 是否重视用户体验？", options: ["非常重视", "不在意"], correctIndex: 0
 },
  { 
question: "OPPO 的品牌形象更偏向？", options: ["年轻与科技感", "传统保守"], correctIndex: 0
 },
  { 
question: "OPPO 是否适合第一次换智能手机的用户？", options: ["适合", "不适合"], correctIndex: 0
 },

  { 
question: "OPPO 手机是否支持多种价位选择？", options: ["支持", "不支持"], correctIndex: 0
 },
  { 
question: "OPPO A 系列更注重？", options: ["实用与续航", "奢侈设计"], correctIndex: 0
 },
  { 
question: "OPPO 手机是否适合家庭用户？", options: ["适合", "不适合"], correctIndex: 0
 },
  { 
question: "OPPO 是否提供官方配件？", options: ["提供", "不提供"], correctIndex: 0
 },
  { 
question: "OPPO 品牌更希望用户感受到？", options: ["科技让生活更美好", "复杂难用"], correctIndex: 0
 }
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


