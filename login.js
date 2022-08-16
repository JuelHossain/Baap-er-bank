const $ = (id) => {
  return document.getElementById(id);
};

// form and submit button
const form = $("form");
const submitButton = $("loginButton");

// inputs
const email = form.email;
const password = form.password;

// errors
const emailError = $("emailError");
const passWordError = $("passwordError");

// toast element
const toast = document.createElement("div");
toast.classList =
  "absolute top-5 right-5 bg-rose-500 text-white p-2 rounded-xl text-sm ";

// events handlers

const submitHandler = (e) => {
  if (email.value === "") {
    emailError.classList.remove("hidden");
    emailError.innerText = "Email is Required";
  } else if (password.value === "") {
    emailError.classList.add("hidden");
    passwordError.classList.remove("hidden");
    passwordError.innerText = "Password is Required";
  } else if (email.value === "user" && password.value === "user") {
    emailError.classList.add("hidden");
    passWordError.classList.add("hidden");
    location.href = "./bank.html";
  } else {
    emailError.classList.add("hidden");
    passWordError.classList.add("hidden");
    toast.innerHTML = `<p>Password Doesn't Match</p>`;
    form.appendChild(toast);
    setTimeout(() => {
      form.removeChild(toast);
    }, 3000);
  }
};
submitButton.addEventListener("click", submitHandler);
