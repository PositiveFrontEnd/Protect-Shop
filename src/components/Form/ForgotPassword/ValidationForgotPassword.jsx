import * as Yup from "yup";

const validationForgotPassword = Yup.object({
  email: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Enter a valid email address")
    .min(5, "Address too short")
    .max(30, "Address too long ")
    .required("Required field"),
});

export default validationForgotPassword;