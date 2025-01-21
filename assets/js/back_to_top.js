document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "Back";
  backToTopButton.id = "back-to-top";
  document.body.appendChild(backToTopButton);

  // Show button when scrolled down 100px
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
