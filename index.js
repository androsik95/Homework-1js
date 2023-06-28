let lastName = prompt("Фамилия");
let firstName = prompt("Имя");
let patronymic = prompt("Отчество");

let fullName = lastName + "" + firstName + ""  + patronymic;
let age = prompt("возраст");

let isMale = confirm("Ваш пол - мужской?");

let ageInDays = 28 * 365;
let futureAge = 28 + 5;

let gender = isMale ? "мужской" : "женский";

let retirementAge = isMale ? 65 : 55;
let isRetired = age >= retirementAge ? "да" : "нет";


alert(
    "Ваше ФИО: " +
      fullName +
      "\nВаш возраст в годах: " +
      age +
      "\nВаш возраст в днях: " +
      ageInDays +
      "\nЧерез 5 лет вам будет: " +
      futureAge +
      "\nВаш пол: " +
      gender +
      "\nВы на пенсии: " +
      isRetired
  );