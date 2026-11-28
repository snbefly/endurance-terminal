const EMOJIS = ["🎉", "🎂", "🎁", "🎈", "🥳", "🎊", "🍰", "✨", "🍕", "🚀", "🎆", "💜"];

const EMOJI_SPEED = 600;

const emojiElement = document.getElementById("emoji");
let emojiIndex = 0;

setInterval(function () {
  emojiIndex = (emojiIndex + 1) % EMOJIS.length;
  emojiElement.textContent = EMOJIS[emojiIndex];
}, EMOJI_SPEED);
