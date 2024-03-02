import * as Yup from "yup";

const validationChangePassword = Yup.object({
    password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password must contain only letters and numbers"
    )
    .min(5, "Password must be at least 5 characters long")
    .required("Password is a required field"),
    newPassword: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password must contain only letters and numbers"
    )
    .min(5, "Password must be at least 5 characters long")
    .required("Password is a required field"),
});

export default validationChangePassword;