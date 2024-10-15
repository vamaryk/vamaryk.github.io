const languages = {
  "ru": {
    "FORM_REGISTRATION": "ФОРМА РЕГИСТРАЦИИ",
    "USERNAME": "Имя пользователя",
    "EMAIL": "Адрес электронной почты",
    "PASSWORD": "Пароль",
    "RETYPE_PASSWORD": "Введите пароль еще раз",
    "SUBMIT_BTN": "Отправить",
    "SUBMITTED_MSG": (name) => `Спасибо, ${name}, за регистрацию.`,
    "PREVIEW_BTN": "Форма предварительного просмотра",
    "ERROR_USERNAME_EMPTY": "Имя пользователя не может быть пустым",
    "ERROR_USERNAME_SHORT": "Введите минимум 3 символа",
    "ERROR_EMAIL_EMPTY": "Email не может быть пустым",
    "ERROR_EMAIL_INVALID": "Некорректный email",
    "ERROR_PASSWORD_EMPTY": "Пароль не может быть пустым",
    "ERROR_PASSWORD_SHORT": "Введите минимум 8 символов",
    "ERROR_PASSWORD_DIGITS_ONLY": "Пароль должен содержать другие символы (помимо цифр)",
    "ERROR_PASSWORD_COMMON": "Придумайте другой пароль",
    "ERROR_CPASSWORD_MISMATCH": "Пароль не совпал",
    "PLACEHOLDER_USERNAME": "Введите имя пользователя",
    "PLACEHOLDER_EMAIL": "Введите адрес электронной почты",
    "PLACEHOLDER_PASSWORD": "Введите пароль",
    "PLACEHOLDER_RETYPE_PASSWORD": "Введите пароль еще раз"
  },
  "en": {
    "FORM_REGISTRATION": "REGISTRATION FORM",
    "USERNAME": "Username",
    "EMAIL": "Email address",
    "PASSWORD": "Password",
    "RETYPE_PASSWORD": "Retype password",
    "SUBMIT_BTN": "Submit",
    "SUBMITTED_MSG": "Thank you for registering.",
    "PREVIEW_BTN": "Preview form",
    "ERROR_USERNAME_EMPTY": "Username cannot be empty",
    "ERROR_USERNAME_SHORT": "Enter at least 3 characters",
    "ERROR_EMAIL_EMPTY": "Email cannot be empty",
    "ERROR_EMAIL_INVALID": "Not a valid email",
    "ERROR_PASSWORD_EMPTY": "Password cannot be empty",
    "ERROR_PASSWORD_SHORT": "Enter at least 8 characters",
    "ERROR_PASSWORD_DIGITS_ONLY": "Password must contain other characters (besides digits)",
    "ERROR_PASSWORD_COMMON": "Choose another password",
    "ERROR_CPASSWORD_MISMATCH": "Passwords do not match",
    "PLACEHOLDER_USERNAME": "Enter username",
    "PLACEHOLDER_EMAIL": "Enter email address",
    "PLACEHOLDER_PASSWORD": "Enter password",
    "PLACEHOLDER_RETYPE_PASSWORD": "Retype password"
  }
};

let currentLang = "ru";

function updateLanguage(lang) {
  currentLang = lang;
  const langObj = languages[lang];
  document.querySelector("#main-page h2").textContent = langObj.FORM_REGISTRATION;
  document.querySelectorAll(".form-group label").forEach((label) => {
    label.textContent = langObj[label.getAttribute("for")];
  });
  document.querySelector("#submit-btn").value = langObj.SUBMIT_BTN;
  document.querySelector("#submitted-msg h1").textContent = langObj.SUBMITTED_MSG;
  document.querySelector(".preview-btn").textContent = langObj.PREVIEW_BTN;
  document.querySelector("#USERNAME").textContent = langObj.USERNAME;
  document.querySelector("#EMAIL").textContent = langObj.EMAIL;
  document.querySelector("#PASSWORD").textContent = langObj.PASSWORD;
  document.querySelector("#RETYPE_PASSWORD").textContent = langObj.RETYPE_PASSWORD;
  document.querySelector("#username").placeholder = langObj.PLACEHOLDER_USERNAME;
  document.querySelector("#email").placeholder = langObj.PLACEHOLDER_EMAIL;
  document.querySelector("#password").placeholder = langObj.PLACEHOLDER_PASSWORD;
  document.querySelector("#retypepass").placeholder = langObj.PLACEHOLDER_RETYPE_PASSWORD;
}

document.querySelector("#language-switcher").addEventListener("change", (e) => {
  updateLanguage(e.target.value);
});

const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
// const phone = document.getElementById('phone');
const password = document.getElementById("password");
const cpassword = document.getElementById("retypepass");

//add event
form.addEventListener("submit", (event) => {
  console.log("form submit");
  event.preventDefault();

  validate();
});

//is email(check the email)
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;

  if (dot === emailVal.length - 1) return false;

  return true;
};

const validate = () => {
  const userNameVal = username.value.trim();
  const emailVal = email.value.trim();
  // const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate userName
  if (userNameVal === "") {
    setErrorMsg(username, languages[currentLang].ERROR_USERNAME_EMPTY);
  } else if (userNameVal.length <= 2) {
    setErrorMsg(username, languages[currentLang].ERROR_USERNAME_SHORT);
  } else {
    setSuccessmsg(username);
  }

  // validate email
  if (emailVal === "") {
    setErrorMsg(email, languages[currentLang].ERROR_EMAIL_EMPTY);
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, languages[currentLang].ERROR_EMAIL_INVALID);
  } else {
    setSuccessmsg(email);
  }

  //validate phone
  /*if(phoneVal === ""){
		setErrorMsg(phone, 'phone num cannot be blank');
	} else if (phoneVal.length != 11 ) {
		setErrorMsg(phone, 'not valid phone num');
	} else{
		setSuccessmsg(phone);
	}*/

  const hasD = /^\d+$/;
  const D_ = /12345678/;
  const l_ = /abc|1111|2222|3333|4444|5555|6666|7777|8888|9999|0000|qwerty|password|1q2w3e4r/;
  
  //validate password
  if (passwordVal === "") {
    setErrorMsg(password, languages[currentLang].ERROR_PASSWORD_EMPTY);
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, languages[currentLang].ERROR_PASSWORD_SHORT);
  } 
    else if (hasD.test(passwordVal) == true) {
    setErrorMsg(password, languages[currentLang].ERROR_PASSWORD_DIGITS_ONLY);
  }
    else if (D_.test(passwordVal) == true || l_.test(passwordVal) == true) {
    setErrorMsg(password, languages[currentLang].ERROR_PASSWORD_COMMON);
  } else {
    setSuccessmsg(password);
  }

  //validate confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, languages[currentLang].ERROR_PASSWORD_EMPTY);
  } else if (cpasswordVal.length < 8) {
    setErrorMsg(cpassword, languages[currentLang].ERROR_PASSWORD_SHORT);
  } else if (cpasswordVal != passwordVal) {
    setErrorMsg(cpassword, languages[currentLang].ERROR_CPASSWORD_MISMATCH);
  } 
    else if (hasD.test(cpasswordVal) == true) {
    setErrorMsg(cpassword, languages[currentLang].ERROR_PASSWORD_DIGITS_ONLY);
  }
    else if (D_.test(cpasswordVal) == true || l_.test(cpasswordVal) == true) {
    setErrorMsg(cpassword, languages[currentLang].ERROR_PASSWORD_COMMON);
  }
    else {
    setSuccessmsg(cpassword);
  }

  setTimeout(() => {
    let successCls = document.querySelectorAll(".success");
    if (successCls.length == 4) {
      showSubmittedMsg();
    }
  }, 1000);
};

function showSubmittedMsg() {
  let mainPage = document.getElementById("main-page");
  mainPage.style.display = "none";
  let successMsgPage = document.getElementById("submitted-msg");
  successMsgPage.style.display = "block";

  document.getElementById("msg-name").innerText = languages[currentLang].SUBMITTED_MSG(userName.value).replace("${name}", userName.value);
}

function setErrorMsg(input, errormsg) {
  const formGroup = input.parentNode;
  const small = formGroup.querySelector("small");
  formGroup.className = "form-group error";
  small.innerText = errormsg;
}

function setSuccessmsg(input) {
  const fromGroup = input.parentNode;
  fromGroup.className = "form-group success";
}

function previewForm() {
  document.getElementById("main-page").style.display = "block";
  document.getElementById("submitted-msg").style.display = "none";

  let submitBtn = document.getElementById("submit-btn");
  submitBtn.classList.remove("btn");
  submitBtn.classList.add("disabled-btn");
  submitBtn.disabled = true;
}

// Получаем элементы кнопок и полей ввода пароля
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("retypepass");
const togglePasswordButton = document.getElementById("toggle-password");
const toggleConfirmPasswordButton = document.getElementById("toggle-retypepass");

// Добавляем обработчики событий для кнопок
togglePasswordButton.addEventListener("click", () => {
  // Toggle тип поля ввода пароля
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.classList.add("fa-eye-slash"); // показать иконку глаза с полосой
    togglePasswordButton.classList.remove("fa-eye"); // убрать иконку глаза
  } else {
    passwordInput.type = "password";
    togglePasswordButton.classList.add("fa-eye"); // показать иконку глаза
    togglePasswordButton.classList.remove("fa-eye-slash"); // убрать иконку глаза с полосой
  }
});

toggleConfirmPasswordButton.addEventListener("click", () => {
  // Toggle тип поля ввода подтверждения пароля
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    toggleConfirmPasswordButton.classList.add("fa-eye-slash"); // показать иконку глаза с полосой
    toggleConfirmPasswordButton.classList.remove("fa-eye"); // убрать иконку глаза
  } else {
    confirmPasswordInput.type = "password";
    toggleConfirmPasswordButton.classList.add("fa-eye"); // показать иконку глаза
    toggleConfirmPasswordButton.classList.remove("fa-eye-slash"); // убрать иконку глаза с полосой
  }
});
