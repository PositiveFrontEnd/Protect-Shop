import React from "react";
import * as Yup from "yup";

const validationComment = Yup.object({
  text: Yup.string()
    .min(5, "Comment should be at least 5 characters long")
    .max(500, "Comment is too long, maximum 500 characters")
    .required("Required field"),
});

export default validationComment;
