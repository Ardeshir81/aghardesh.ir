const lyricsTimes = [
  { time: 0 },
  { time: 21.5, text: "باس بدونی توبه کنی پاک نمیشی" },
  { time: 23.6, text: "حتی اگه چالش کنی روش یه من خاک بریزی" },
  { time: 26.3, text: "ساعتا منتظرت موندن" },
  { time: 27.9, text: "تو پای هیچی انقد کاشتیشون که پیچیدن تا بپیچی" },
  { time: 31.8, text: "خیلی وقته اینو میدونی یه تغییر نیازه" },
  { time: 34.3, text: "گاهی حس میکنم بسه دیگه اردی" },
  { time: 36.4, text: "پیاده برو نمون منتظر حس و وقت و موقعیت" },
  { time: 39.7, text: "ببر همه‌مونو دور از جو نحس و گه این شهر" },
  { time: 42.6, text: "برو جایی که جنسش ا رویاهای ته شبته" },
  { time: 45.1, text: "واقعیت رویاتو دید مردم شهر بده" },
  { time: 47.8, text: "بذا بفهمن مثلشونی" },
  { time: 49.5, text: "از جنسشونی" },
  { time: 50.6, text: "هم حسشونی" },
  { time: 51.4, text: "دوسشون داری و واست مثلشون نی" },
  { time: 53.2, text: "نترس و جار بزن که کلیدش دستته" },
  { time: 55.8, text: "حتی با این که دست خالیه و هستی سطح صفر" },
  { time: 58.6, text: "کلید این فقر چرت" },
  { time: 60.0, text: "بی عدالتیا" },
  { time: 61.1, text: "به این روتین غیر رویایی دیگه باج ندیم هااااااااااا" },
  { time: 64.0, text: "کلید این جنگا" },
  { time: 65.2, text: "این بحثا" },
  { time: 65.9, text: "این اعصاب" },
  { time: 66.6, text: "این تضاد" },
  { time: 67.3, text: "این  فضا" },
  { time: 68.0, text: "این مرزا" },
  { time: 68.6, text: "اه مرزا" },
  { time: 69.4, text: "کلید این خود لشت" },
  { time: 70.9, text: "اینی که مغزش پره ولی قفله کلیدش تو خودش حبسه" },
  { time: 74.7, text: "کلید این درون گرایی تصاعدی" },
  { time: 77.0, text: "روزا بیرون ولی شبا توی خودت هوا خوری" },
  { time: 79.5, text: "بذا بفهمنت بدونن که چی اصلی توعه" },
  { time: 82.4, text: "میتونی نمیکنی پس همه چی تقصیر توعه" },
  { time: 85.5 },
];

const cssTransition = "all 0.4s ease-out";
const cssTop = "20px";
const cssFontSize = "22px";

const lyricsDom = document.getElementById("lyrics");
const lyricsBackupDom = document.getElementById("lyrics-backup");

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
});

let lyricsText = "";
let lyricsBackupText = "";

function setLyricsText(text = "") {
  if (lyricsText !== text) {
    lyricsText = text || "";

    lyricsDom.style.transition = "";
    lyricsDom.style.top = "70px";
    lyricsDom.style.fontSize = "10px";

    lyricsDom.innerHTML = lyricsText;

    requestAnimationFrame(() => {
      lyricsDom.style.transition = cssTransition;
      setTimeout(() => {
        lyricsDom.style.top = cssTop;
        lyricsDom.style.fontSize = cssFontSize;
      });
    });
  }
}

function setLyricsBackupText(text = "") {
  if (lyricsBackupText !== text) {
    lyricsBackupText = text || "";

    lyricsBackupDom.style.transition = "";
    lyricsBackupDom.style.top = "60px";
    lyricsBackupDom.style.fontSize = cssFontSize;

    lyricsBackupDom.innerHTML = lyricsBackupText;

    requestAnimationFrame(() => {
      lyricsBackupDom.style.transition = cssTransition;
      setTimeout(() => {
        lyricsBackupDom.style.top = cssTop;
        lyricsBackupDom.style.fontSize = "16px";
      });
    });
  }
}

wavesurfer.load(
  "https://github.com/Ardeshir81/aghardesh.ir/raw/main/aghArdeshir%20-%20After%20Bad.mp3"
);
wavesurfer.on("audioprocess", function (currentTime) {
  const index =
    lyricsTimes.findIndex((member) => member.time >= currentTime) - 1;

  if (index < 0) {
    lyricsDom.innerHTML = "";
    return;
  }

  if (index === 0 && lyricsTimes[index].time > currentTime) {
    lyricsDom.innerHTML = "";
    return;
  }

  setLyricsText(lyricsTimes[index].text);
  if (lyricsTimes[index - 1]) {
    setLyricsBackupText(lyricsTimes[index - 1].text);
  }
});

setTimeout(() => {
  wavesurfer.play();
}, 1000);
