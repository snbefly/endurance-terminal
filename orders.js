const ORDERS_TEXT = [
  "КОРПУС ПРАВОПОРЯДКА ОБЪЕДИНЁННОЙ ЗЕМЛИ",
  "ШТАБ ДИСПЕТЧЕРСКОЙ - КАНЦЕЛЯРИЯ КОМИССАРА",
  "",
  "ПРИКАЗ О ПОВЫШЕНИИ И ПЕРЕДАЧЕ КОМАНДОВАНИЯ",
  "==========================================",
  "",
  "КОМУ:        Лейтенанту Хануке",
  "ЗВАНИЕ:      Капитан (с момента вступления в должность)",
  "СУДНО:       UELE Endurance",
  "ЗАДАЧИ:      Патрулирование и научное обеспечение, сектор Нептуна",
  "ЯВИТЬСЯ:     Последний шлюз, причальный терминал космодока",
  "ДАТА:        28.11.2226",
  "",
  "1. Должность командира UELE Endurance вакантна. Диспетчерская",
  "   назначает на неё вас.",
  "",
  "2. Старший помощник встретит вас у шлюза для завершения",
  "   передачи командования.",
  "",
  "3. По вступлении в командование ознакомьтесь с полным",
  "   послужным списком судна (приложен к пакету).",
  "",
  "Приказ вступает в силу 28.11.2226.",
  "",
  "Комиссар Вэнь",
  "Штаб Диспетчерской, Корпус правопорядка Объединённой Земли",
  "",
  "---------------------------------------------------------------",
  "Личная приписка, не для официального протокола:",
  "С ДНЕМ РОЖДЕНИЯ МОЙ ЧУВАК! Желаю тебе хорошо провести этот день в компании приятных тебе людей занимаясь крутой шнягой :3 зачилься, познай дзен, и не давай миру битч слапать тебя по пустякам! И обязательно закажи себе пиццу!",
  "- С уважением. Буфлу.",
];

const TYPING_SPEED = 15;

const ordersElement = document.getElementById("orders");
const filesSection = document.getElementById("files");

const fullText = ORDERS_TEXT.join("\n");
let letterIndex = 0;

const typeSounds = [
  new Audio("sfx/type4_1.wav"),
  new Audio("sfx/type4_2.wav"),
  new Audio("sfx/type4_3.wav"),
  new Audio("sfx/type4_4.wav"),
];

for (const sound of typeSounds) {
  sound.preservesPitch = false;
}

let soundIndex = 0;

const endLineSound = new Audio("sfx/endline.wav");
const endOfTypeSound = new Audio("sfx/endoftype.wav");

function typeNextLetter() {
  if (letterIndex < fullText.length) {
    const letter = fullText[letterIndex];
    ordersElement.textContent += letter;
    if (letter === "\n") {
      if (fullText[letterIndex - 1] !== "\n") {
        endLineSound.currentTime = 0;
        endLineSound.play();
      }
    } else {
      const letterSound = typeSounds[soundIndex];
      letterSound.currentTime = 0;
      letterSound.playbackRate = 0.97 + Math.random() * 0.06;
      letterSound.play();
      soundIndex = (soundIndex + 1) % typeSounds.length;
    }
    letterIndex++;
    setTimeout(typeNextLetter, TYPING_SPEED);
  } else {
    endOfTypeSound.play();
    filesSection.hidden = false;
  }
}

const openManifestSound = new Audio("sfx/openmanifest.wav");
openManifestSound.play();

const backgroundNoise = new Audio("sfx/backgroundnoise.wav");
backgroundNoise.loop = true;
backgroundNoise.play();

const openBookSound = new Audio("sfx/openbook.wav");
document.getElementById("book-link").addEventListener("click", function () {
  openBookSound.currentTime = 0;
  openBookSound.play();
});

openBookSound.addEventListener("ended", function () {
  window.location.href = "celebrate.html";
});

typeNextLetter();
