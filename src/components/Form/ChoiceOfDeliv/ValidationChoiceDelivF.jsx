import * as Yup from "yup";

const validationChoiceDelivery = Yup.object({
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    address: Yup.string().required('Address is required'),
    postal: Yup.string().required('Postal code is required'),
    shipping: Yup.string().required('Shipping method is required'),
    delivery: Yup.string().required('Delivery method is required'),
    payMethod: Yup.string().required('Payment method is required'),
    comment: Yup.string(),
    text: Yup.string()
    .min(5, 'Comment should be at least 5 characters long')
    .max(500, 'Comment is too long, maximum 500 characters')
});

export default validationChoiceDelivery;