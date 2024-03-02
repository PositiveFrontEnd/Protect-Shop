import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ']+$/u, "Cannot have numeric values ")
    .min(1, "Name too short")
    .required("Required field"),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ']+$/u, "Cannot have numeric values ")
    .min(2, "Last Name too short")
    .required("Required field"),
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Enter a valid email address")
    .min(5, "Address too short")
    .max(30, "Address too long ")
    .required("Required field"),
  telephone: Yup.string()
    .matches(/^\+?[0-9]+(?:[\s\-]?[0-9]+)*$/, "Must only be numbers")
    .min(7, "phone too short")
    .max(14, "phone too long ")
    .required("Required field"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password must contain only letters and numbers"
    )
    .min(5, "Password must be at least 5 characters long")
    .required("Password is a required field"),
  gender: Yup.string()
    .required("Please select a gender")
    .oneOf(["male", "female"], "Invalid gender"),
  checkbox: Yup.boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

export default validationSchema;
