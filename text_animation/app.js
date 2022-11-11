const text = document.querySelector(".second-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Freelancer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Web Developer";
  }, 3000);
  setTimeout(() => {
    text.textContent = "Programmer";
  }, 6000);
};

textLoad();

setInterval(() => {
  textLoad();
}, 9000);
