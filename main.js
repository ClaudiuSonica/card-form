// Get elements from the user input 

const form = document.querySelector("#form");
const inputName = document.querySelector("#cardholder__name");
const inputNumber = document.querySelector("#card__number");
const inputCvv = document.querySelector("#cvv");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

// Get elements to output the result

const outputName = document.querySelector("#name");
const outputNumber = document.querySelector("#number");
const outputCvv = document.querySelector("#cvv__card");
const outputMonth = document.querySelector("#month__card");
const outputYear = document.querySelector("#year__card");

const errorMessage = {
  required: "Can't be blank",
  invalid: "Wrong format, numbers only",
  range: "Wrong format, respect length",
};

// Real time change from user input

const validateForm = (e) => {
  e.preventDefault();

  const cardholderName = inputName.value;
  const cardNumber = inputNumber.value;
  const cvv = inputCvv.value;
  const month = inputMonth.value;
  const year = inputYear.value;

  // Validate the name

  






}