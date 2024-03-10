import * as Yup from "yup";

const validationChoiceDelivery = Yup.object().shape({
  country: Yup.string().test(
    "isRequired",
    "Country is required",
    function (value) {
      const delivery = this.resolve(Yup.ref("delivery"));
      if (delivery === "delivery2" || delivery === "delivery4") {
        return !!value;
      }
      return true;
    }
  ),
  city: Yup.string().test("isRequired", "City is required", function (value) {
    const delivery = this.resolve(Yup.ref("delivery"));
    if (delivery === "delivery2" || delivery === "delivery4") {
      return !!value;
    }
    return true;
  }),

  address: Yup.string().test(
    "isRequired",
    "Address is required",
    function (value) {
      const delivery = this.resolve(Yup.ref("delivery"));
      if (delivery === "delivery2" || delivery === "delivery4") {
        return !!value;
      }
      return true;
    }
  ),

  postal: Yup.string().test(
    "isRequired",
    "Postal code is required",
    function (value) {
      const delivery = this.resolve(Yup.ref("delivery"));
      if (delivery === "delivery2" || delivery === "delivery4") {
        return !!value;
      }
      return true;
    }
  ),

  shipping: Yup.string().test(
    "isRequired",
    "Shipping method is required",
    function (value) {
      const delivery = this.resolve(Yup.ref("delivery"));
      if (delivery === "delivery2" || delivery === "delivery4") {
        return !!value;
      }
      return true;
    }
  ),
  // city: Yup.string().required('City is required'),
  // address: Yup.string().required('Address is required'),
  // postal: Yup.string().required('Postal code is required'),
  // shipping: Yup.string().required('Shipping method is required'),
  delivery: Yup.string().required("Delivery method is required"),
  payMethod: Yup.string().required("Payment method is required"),
  comment: Yup.string(),
  text: Yup.string()
    .min(5, "Comment should be at least 5 characters long")
    .max(500, "Comment is too long, maximum 500 characters"),
});

export default validationChoiceDelivery;
