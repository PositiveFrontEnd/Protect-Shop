import * as Yup from "yup";


const validationContactInfo = Yup.object({
  brand: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
    .required("Required field"),
    name: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    categories: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    color: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    country: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    currentPrice: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    previousPrice: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    delivery: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    imageUrls1: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    imageUrls2: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    imageUrls3: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    material: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    productUrl: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    quantity: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    size: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    status: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
    type: Yup.string()
    .matches(/^[a-zA-Z0-9(){}[\]<>!@#$%^&*_\-+=|\\;:'",.?/]+$/, "Can contain letters, numbers, parentheses, and special characters")
    .min(1, "Name too short")
        .required("Required field"),
 
});

export default validationContactInfo;