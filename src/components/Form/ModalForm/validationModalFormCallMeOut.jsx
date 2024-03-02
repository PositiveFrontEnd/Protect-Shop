import React from "react";
import * as Yup from "yup";

const validationModal = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ' ]+$/u, "Cannot have numeric values ")
    .min(2, "Last Name too short")
    .required("Required field"),
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Enter a valid email address")
    .min(5, "Address too short")
    .max(30, "Address too long ")
    .required("Required field"),
  phone: Yup.string()
    .matches(/^\+?[0-9]+(?:[\s\-]?[0-9]+)*$/, "Must only be numbers")
    .min(7, "phone too short")
    .max(14, "phone too long ")
    .required("Required field"),
  text: Yup.string()
    .min(5, 'Comment should be at least 5 characters long')
    .max(500, 'Comment is too long, maximum 500 characters')
});

export default validationModal;
