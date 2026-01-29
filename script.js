const typingText = document.getElementById("typing-text");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const response = document.getElementById("response");
const music = document.getElementById("music");
const container = document.querySelector(".container");

const lines = [
  "Ma 🫶🏼, neenu nanna jeevana ❤️",
  "We may fight, we may get angry 😌",
  "But I choose you. Always 💋",
  "Ee Valentine mattu ellaa dina… with you 💖"
  always loving u ma 💗 🫂 🫶🏼 😘 
];

let i = 0, j = 0;

// Typing effect
function type() {
  if (j < lines[i].length) {
    typingText.innerHTML += lines[i][j++];
    setTimeout(type, 50);
  } else {
    setTimeout(() => {
      typingText.innerHTML = "";
      j = 0;
      i = (i + 1) % lines.length;
      type();
    }, 1500);
  }
}
type();

// Play music on first click
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

// Heart animation
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = (10 + Math.random() * 20) + "px";
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}

setInterval(createHeart, 500);

// Yes button click
yesBtn.addEventListener("click", () => {
  response.classList.remove("hidden");
  noBtn.style.display = "none";
});

// No button running away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
