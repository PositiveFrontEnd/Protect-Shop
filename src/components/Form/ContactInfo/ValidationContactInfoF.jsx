import * as Yup from "yup";

const validationContactInfo = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ']+$/u, "Не може містити цифри або спеціальні символи")
    .min(1, "Ім'я занадто коротке")
    .required("Обов'язкове поле"),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ']+$/u, "Не може містити цифри або спеціальні символи")
    .min(2, "Прізвище занадто коротке")
    .required("Обов'язкове поле"),
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Введіть правильну електронну адресу")
    .min(5, "Адреса занадто коротка")
    .max(30, "Адреса занадто довга")
    .required("Обов'язкове поле"),
  telephone: Yup.string()
    .matches(/^\+?[0-9]+(?:[\s\-]?[0-9]+)*$/, "Має містити лише цифри")
    .min(7, "Телефон занадто короткий")
    .max(14, "Телефон занадто довгий")
    .required("Обов'язкове поле"),
});

export default validationContactInfo;

