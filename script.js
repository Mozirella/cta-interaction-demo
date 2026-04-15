const button = document.getElementById("ctaBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "CTA Clicked!";
});
