import * as Yup from "yup";

const validationAuthorization = Yup.object({
  loginOrEmail: Yup.string()
    .matches(/\S+@\S+\.\S+/, "Enter a valid email address")
    .min(5, "Address too short")
    .max(30, "Address too long ")
    .required("Required field"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password must contain only letters and numbers"
    )
    .min(5, "Password must be at least 5 characters long")
    .required("Password is a required field"),
});

export default validationAuthorization;
