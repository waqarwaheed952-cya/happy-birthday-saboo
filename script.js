let timeLeft = 300; // 5 minutes

const timer = document.getElementById("timer");
const loading = document.getElementById("loading");
const birthday = document.getElementById("birthday");
const music = new Audio("music.mp3");

const countdown = setInterval(() => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timer.innerHTML =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdown);

    loading.style.display = "none";
    birthday.classList.remove("hidden");

    music.play();

    typeMessage();
  }
}, 1000);

const message =
`Happy Birthday My Saboooo ❤️

You are the most beautiful part of my life.

May every birthday bring more happiness,
more success and endless smiles.

I pray Allah always keeps you safe.

Thank you for being YOU.

🥰🎂🎉`;

function typeMessage() {
  let i = 0;
  const typing = document.getElementById("typing");

  const interval = setInterval(() => {
    typing.innerHTML += message.charAt(i);
    i++;

    if (i >= message.length) {
      clearInterval(interval);
    }
