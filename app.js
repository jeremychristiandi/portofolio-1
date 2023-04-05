const pb1 = document.querySelector("#pb-1");

pb1.addEventListener("click", () => {
  window.open("https://newyelpcamp.cyclic.app/");
});

const pb2 = document.querySelector("#pb-2");

pb2.addEventListener("click", () => {
  window.open("https://github.com/jeremychristiandi/kenshin-impact.git");
});

const pb3 = document.querySelector("#pb-3");

pb3.addEventListener("click", () => {
  window.open("https://github.com/jeremychristiandi/chatbot-messenger.git");
});

const pb4 = document.querySelector("#pb-4");

pb4.addEventListener("click", () => {
  window.open(
    "https://github.com/jeremychristiandi/karen-virtualassistant.git"
  );
});

const pb5 = document.querySelector("#pb-5");

pb5.addEventListener("click", () => {
  window.open("https://github.com/jeremychristiandi/flight-visualization.git");
});

const navMenu = document.getElementsByClassName("nav-menu")[0];
const navbar2 = document.getElementsByClassName("navbar")[0];

navMenu.addEventListener("click", () => {
  navbar2.classList.toggle("active");
});
