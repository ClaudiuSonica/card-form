const form = document.querySelector("#form");

const cardName = document.querySelector("#card__name");
const inputName = document.querySelector("#name");

const cardNumber = document.querySelector("#card__number");
const inputNumber = document.querySelector("#number");

const cardMonth = document.querySelector("#card__month");
const inputMonth = document.querySelector("#month");

const cardYear = document.querySelector("#card__year");
const inputYear = document.querySelector("#year");

const cardCvv = document.querySelector("#card__cvv");
const inputCvv = document.querySelector("#cvv");

const completed = document.querySelector("#completed")

const submitBtn = document.querySelector("#btn");
const continueBtn = document.querySelector("#continue");


function setCardName(e) {
  cardName.innerText = e.target.value;
}

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}

function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}

function setCardYear(e) {
  cardYear.innerText = e.target.value;
}

function setCardCvv(e) {
  cardCvv.innerText = e.target.value;
}

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function handleSubmit(e) {
  e.preventDefault();
  
  if (!inputName.value) {
    inputName.classList.add("error__input");
    inputName.parentElement.classList.add("error__message");
  } else {
    inputName.classList.remove("error__input");
    inputName.parentElement.classList.remove("error__message");
  }

  if (!inputNumber.value) {
    inputName.classList.add("error__input");
    inputName.parentElement.classList.add("error__message");
  } else if (inputNumber.value.length < 16) {
    inputNumber.classList.add("error__input");
  } else {
    inputNumber.classList.remove("error__input");
    inputNumber.parentElement.classList.remove("error__message");
  }

  if (!inputMonth.value) {
    inputMonth.classList.add("error__input");
    inputMonth.parentElement.classList.add("error__message");
  } else {
    inputMonth.classList.remove("error__input");
    inputMonth.parentElement.classList.remove("error__message");
  }

  if (!inputYear.value) {
    inputYear.classList.add("error__input");
    inputYear.parentElement.classList.add("error__message");
  } else {
    inputYear.classList.remove("error__input");
    inputYear.parentElement.classList.remove("error__message");
  }

  if (!inputCvv.value) {
    inputCvv.classList.add("error__input");
    inputCvv.parentElement.classList.add("error__message");
  } else {
    inputCvv.classList.remove("error__input");
    inputCvv.parentElement.classList.remove("error__message");
  }

  if (
    inputName.value &&
    inputNumber.value &&
    inputNumber.value.length == 16 &&
    inputMonth.value &&
    inputYear.value &&
    inputCvv.value
  ) {
    completed.classList.remove("invisible");
    form.classList.add("invisible");
  }
}

function resetForm(e) {
  e.preventDefault();
  form.classList.remove("invisible");
  completed.classList.add("invisible");
  inputName.value = "";
  inputNumber.value = "";
  inputMonth.value = "";
  inputYear.value = "";
  inputCvv.value = "";
  cardName.textContent = "Jane Appleseed";
  cardNumber.textContent = "1234 5678 9123 0000";
  cardMonth.textContent = "00";
  cardYear.textContent = "00";
  cardCvv.textContent = "000";
}


inputName.addEventListener("keyup", setCardName);
inputNumber.addEventListener("keyup", setCardNumber);
inputMonth.addEventListener("keyup", setCardMonth);
inputYear.addEventListener("keyup", setCardYear);
inputCvv.addEventListener("keyup", setCardCvv);
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", resetForm);