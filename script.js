const message =
  "Thank you for submitting your message. The Royal Family will do his best to respond you shortly.";
document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
