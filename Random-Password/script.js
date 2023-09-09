const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-=[]{}/<>";
const passwordLength = 12;
const allChar = upperCase + lowerCase + number + symbol;

const btn = document.querySelector(".btn");
btn.addEventListener("click", createPassoword);

function createPassoword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  passwordBox.value = password;
}

const img = document.getElementById("img");
img.addEventListener("click", copyPassword);

function copyPassword() {
  const copy = passwordBox.value;
  navigator.clipboard.writeText(copy);
}
