const totalImages = 30; // 👈 set your image count here
let index = 1;

const slide = document.getElementById("slide");
const music = document.getElementById("bgMusic");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

const letterTextElement = document.getElementById("letterText");
const fullLetter = letterTextElement.innerHTML;
letterTextElement.innerHTML = "";

/* ✅ REAL click event (mobile-safe) */
startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  document.getElementById("slideshow").classList.remove("hidden");

  music.volume = 0.9;
  music.play().catch(() => {
    console.log("Music will start after interaction");
  });

  showImage();
});

function showImage() {
  slide.classList.remove("zoom");
  slide.style.opacity = 0;

  setTimeout(() => {
    slide.src = `images/${index}.jpg`;
    slide.style.opacity = 1;

    setTimeout(() => slide.classList.add("zoom"), 100);

    index++;

    if (index <= totalImages) {
      setTimeout(showImage, 6000);
    } else {
      setTimeout(showLetter, 7000);
    }
  }, 2000);
}

function showLetter() {
  document.getElementById("slideshow").style.display = "none";
  document.getElementById("letter").classList.remove("hidden");
  typeLetter();
}

/* Typing Effect */
let charIndex = 0;
function typeLetter() {
  if (charIndex < fullLetter.length) {
    letterTextElement.innerHTML += fullLetter.charAt(charIndex);
    charIndex++;
    setTimeout(typeLetter, 40);
  }
}
