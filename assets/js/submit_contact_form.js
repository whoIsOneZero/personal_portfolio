const scriptURL =
  "https://script.google.com/macros/s/AKfycbwLwqueGGfAC9kWXZbleQPS59_T7ByeP0HvkOST6BeNq1BBUhj7UcavrFBgZVtrAipN/exec";
const form = document.forms["submit-to-google-sheet"];

/*Message*/
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
