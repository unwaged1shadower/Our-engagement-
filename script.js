
const enterBtn = document.getElementById("enterBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {
  intro.style.display = "none";
  content.classList.remove("hidden");
  music.play();
});

/* SLIDESHOW */
let current = 1;
const total = 44;
const slide = document.getElementById("slide");

setInterval(() => {
  current++;
  if (current > total) current = 1;
  slide.src = `photos/${current}.jpg`;
}, 6000);

/* LETTER REVEAL */
const letter = document.getElementById("letter");

window.addEventListener("scroll", () => {
  const pos = letter.getBoundingClientRect().top;
  if (pos < window.innerHeight - 100) {
    letter.classList.add("show");
  }
});

/* HEARTS */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 400);
