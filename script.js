const typingText = document.getElementById("typing-text");

const lines = [
  "Ma 🫶🏼, neenu nanna jeevana ❤️",
  "We may fight, we may get angry 😌",
  "But I choose you. Always 💋",
  "Ee Valentine mattu ellaa dina… with you 💖"
];

let i = 0, j = 0;

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
