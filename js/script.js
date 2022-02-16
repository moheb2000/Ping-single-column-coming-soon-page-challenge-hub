const vr = /\S+@+\S/;

document.getElementById("btn").addEventListener("click", () => {
  const email = document.getElementById("email");
  const validate = document.getElementById("validate");
  if (vr.test(email.value)) {
    validate.style.display = "none";
    email.style.outlineColor = "var(--cl-pale-blue)";
  } else {
    validate.style.display = "block";
    email.style.outlineColor = "var(--cl-light-red)";
  }
});