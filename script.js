const button = document.getElementById("ctaBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "CTA Clicked!";
});

button.addEventListener("mouseover", () => {
  button.textContent = "Ready?";
});

button.addEventListener("mouseout", () => {
  button.textContent = "Click Me";
});
