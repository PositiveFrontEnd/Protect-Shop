import React, { useContext, useEffect, useState } from "react";
import "../Registration/RegistrationF.scss";
import { Formik, Form } from "formik";
import Input from "../Inputs/Input";
import InputCity from "../Inputs/UkrCity"
import SelectInput from "../Inputs/Select";
import Button from "../../Button/Button";
import validationChoiceDelivery from "./ValidationChoiceDelivF";
import Check from "../../Button/ButtonSvg/check.svg?react";
import "../ContactInfo/ContactInfoStyles.scss";
import "./ChoiceOfDel.scss";
import BasketPage from "../../../pages/BasketPage/BasketPage";
import { useDispatch, useSelector } from "react-redux";
import {
  actionCreateNewOrderLoggerCustomer,
  actionCreateNewOrderNotLoggerCustomer,
  actionUpDateForm,
  actionUpDateFormGuest,
} from "../../../store/orderSlice";
import {
  selectorBaskets,
  selectorGuestBasket,
  selectorOrderFormData,
  selectorOrderFormDataGuest,
  selectorToken,
} from "../../../store/selectors";
import { actionGetOneProduct } from "../../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { ContextFunctions } from "./../../../context/context";
import {
  actionDeleteBasket,
  actionDeleteGuestBasket,
} from "../../../store/basketSlice";
import ModalThanksOrder from "../../Modal/ModalThanksOrder";
import { actionNovaPostAdress } from "../../../store/ukrAndNovaPostSlice";
import LiveSearchInput from "../Inputs/InputSearch";

function ChoiceOfDelivF() {
  const dispatch = useDispatch();
  const token = useSelector(selectorToken);
  const navigate = useNavigate();
  const order = useSelector(selectorOrderFormData);
  const orderGuestData = useSelector(selectorOrderFormDataGuest);
  const { isModalAll, modalChangeAll } = useContext(ContextFunctions);
  const basketUser = useSelector(selectorBaskets);
  const guestBasket = useSelector(selectorGuestBasket);
  const [productsOrderForGuest, setProductsOrderForGuest] = useState([]);

  useEffect(() => {
    if (!token) {
      const fetchData = async () => {
        try {
          const orderG = [];
          for (const key of Object.keys(guestBasket)) {
            const item = guestBasket[key];
            if (item.payload) {
              const data = await dispatch(actionGetOneProduct(item.payload));
              orderG.push({
                cartQuantity: item.counter,
                product: data,
              });
            }
          }
          setProductsOrderForGuest(orderG);
        } catch {
          console.log("error");
        }
      };
      fetchData();
    }
  }, [dispatch, guestBasket, token]);

  const [initialValue, setInputValue] = useState("");

  const handleCityValue = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const test = { city: value, data: "" };
    dispatch(actionNovaPostAdress(test));
  };

  const handleInputChange = (inputValue) => {
    const test = { city: initialValue, data: inputValue };
    if (inputValue.trim() !== "") {
      dispatch(actionNovaPostAdress(test));
    }
  };

  let novaPointAdress;
  const handleInputClick = (selectedOption) => {
    const test = { city: initialValue, data: selectedOption.value };
    novaPointAdress = selectedOption;
    if (selectedOption) {
      dispatch(actionNovaPostAdress(test));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          country: "",
          city: "",
          ukrCity: "",
          address: "",
          postal: "",
          delivery: "",
          payMethod: "",
          comment: "",
          deliveryPoint: "",
        }}
        onSubmit={(values) => {
          const updatedFormData = {
            deliveryAddress: {
              country: values.country,
              city:
                values.delivery === "novaPost" ? values.ukrCity : values.city,
              address:
                values.delivery === "novaPost"
                  ? novaPointAdress.label
                  : values.address,
              postal: values.postal,
            },
            paymentInfo: values.payMethod,
            delivery: values.delivery,
            comment: values.comment,
          };
          const novaPost = {
            cityName: values.deliveryPoint,
          };
          dispatch(actionNovaPostAdress(novaPost));

          const currentDate = new Date();
          const deliveryDate = new Date(currentDate);
          deliveryDate.setDate(currentDate.getDate() + 4);
          const formattedDeliveryDate = deliveryDate.toLocaleDateString();

          const letterGuest = {
            letterHtml: `
    <div>
      <h1>Your order is placed.</h1>
      <h3>Hello ${orderGuestData.firstName} ${orderGuestData.lastName}</h3>
      <p>We wanted to inform you that your order has been successfully completed. Thank you for shopping with PROTECT.</p>
      ${productsOrderForGuest &&
              productsOrderForGuest.map(
                (item) =>
                  `<div style="display: flex; gap: 20px;">
          <div style="max-width: 150px;">
            <img style="width: 150px;" src="${item.product.imageUrls[0]}" />
          </div>
          <div> 
            <div style="display: flex;"> 
              <p>Name:</p>
              <p>${item.product.name}</p>
            </div>
            <div style="display: flex;"> 
              <p>Product No:</p>
              <p>${item.product.itemNo}</p>
            </div>
            <div style="display: flex;"> 
              <p>Color:</p>
              <p>${item.product.color}</p>
            </div>
            <div style="display: flex;"> 
              <p>Quantity:</p>
              <p>${item.cartQuantity}</p>
            </div>
            <div style="display: flex;"> 
              <p>Price:</p>
              <p>$${item.product.currentPrice}</p>
            </div>
          </div>
        </div>`
              )
              }
      <p>The following items will be delivered to ${updatedFormData.deliveryAddress.address} ${updatedFormData.deliveryAddress.postal} ${updatedFormData.deliveryAddress.city}.</p>
      You will receive this product on ${formattedDeliveryDate}
      <p>Delivery is paid according to the carrier's tariff.</p>
      <p>If you didn't receive your order in time, which is unlikely, or the information provided is incorrect, please contact us by phone or with "call me out" on our <a href="https://protect-shop-pmdi.vercel.app/">page</a>.</p>
    </div>
  `,
          };
          const letterUser = {
            letterHtml: `
    <div>
      <h1>Your order is placed.</h1>
      <h3>Hello ${order.firstName} ${order.lastName}</h3>
      <p>We wanted to inform you that your order has been successfully completed. Thank you for shopping with PROTECT.</p>
      ${basketUser.products &&
              basketUser.products.map(
                (item) =>
                  `<div style="display: flex; gap: 20px;">
          <div style="max-width: 150px;">
            <img style="width: 150px;" src="${item.product.imageUrls[0]}" />
          </div>
          <div> 
            <div style="display: flex;"> 
              <p>Name:</p>
              <p>${item.product.name}</p>
            </div>
            <div style="display: flex;"> 
              <p>Product No:</p>
              <p>${item.product.itemNo}</p>
            </div>
            <div style="display: flex;"> 
              <p>Color:</p>
<p>${item.product.color}</p>
            </div>
            <div style="display: flex;"> 
              <p>Quantity:</p>
              <p>${item.cartQuantity}</p>
            </div>
            <div style="display: flex;"> 
              <p>Price:</p>
              <p>$${item.product.currentPrice}</p>
            </div>
          </div>
        </div>`
              )
              }
      <p>The following items will be delivered to ${updatedFormData.deliveryAddress.address} ${updatedFormData.deliveryAddress.postal} ${updatedFormData.deliveryAddress.city}.</p>
      You will receive this product on ${formattedDeliveryDate}
      <p>Delivery is paid according to the carrier's tariff.</p>
      <p>If you didn't receive your order in time, which is unlikely, or the information provided is incorrect, please contact us by phone or with "call me out" on our <a href="https://protect-shop-pmdi.vercel.app/">page</a>.</p>
    </div>
  `,
          };
          if (token) {
            modalChangeAll();
            dispatch(
              actionCreateNewOrderLoggerCustomer({
                token: token,
                order: { ...order, ...updatedFormData, ...letterUser },
              })
            );
            dispatch(actionDeleteBasket(token));
            dispatch(actionUpDateForm({}));
          } else if (token === "") {
            modalChangeAll();
            dispatch(
              actionCreateNewOrderNotLoggerCustomer({
                products: productsOrderForGuest,
                ...updatedFormData,
                ...orderGuestData,
                ...letterGuest,
              })
            );
            dispatch(actionDeleteGuestBasket());
            dispatch(
              actionUpDateFormGuest({
                country: "",
                deliveryAddress: {
                  city: "",
                  address: "",
                  postal: "",
                },
                firstName: "",
                lastName: "",
                shipping: "",
                paymentInfo: "",
                status: "",
                email: "",
                mobile: "",
              })
            );
          }
        }}
      // validationSchema={validationChoiceDelivery}
      >
        {({ errors, touched, values }) => (

          <div className="form__box-registr form__contact__info">
            <Form className="form__contact__info__container">
              <div className="form__box__choice">
                <div className="form__littl-box__choice">
                  <Input
                    className="mb-3"
                    label="Country"
                    name="country"
                    placeholder="Country"
                    error={errors.country}
                    touched={touched.country}
                  />
                  <SelectInput
                    label="Delivery"
                    name="delivery"
                    className="mb-3"
                    options={[
                      { value: "", label: "Delivery" },
                      { value: "novaPost", label: "Nova Post" },
                      { value: "delivery2", label: "Courier Delivery" },
                      { value: "delivery3", label: "In-Store Pickup" },
                      { value: "delivery4", label: "International Delivery" },
                    ]}
                    error={errors.delivery}
                    touched={touched.delivery}
                  />
                  {(values.delivery === "delivery2" ||
                    values.delivery === "delivery4") &&
                    values.delivery && (
                      <div>
                        <Input
                          className="mb-3"
                          label="City"
                          name="city"
                          placeholder="City"
                          error={errors.city}
                          touched={touched.city}
                        />
                        <Input
                          className="mb-3"
                          label="Address"
                          name="address"
                          placeholder="Address"
                          error={errors.address}
                          touched={touched.address}
                        />
                        <Input
                          className="mb-3"
                          label="Postal"
                          name="postal"
                          placeholder="Postal"
                          error={errors.postal}
                          touched={touched.postal}
                        />
                      </div>
                    )}
                  {values.delivery === "novaPost" && (
                    <div>
                      <InputCity
                        className="mb-3"
                        label="Місто"
                        name="ukrCity"
                        placeholder="Вкажіть місто"
                        error={errors.ukrCity}
                        touched={touched.ukrCity}
                        onChange={handleCityValue}
                        value={initialValue}
                      />
                      <LiveSearchInput
                        className="mb-3"
                        label="Delivery point"
                        name="deliveryPoint"
                        placeholder="Оберіть відділення/поштомат"
                        handleInputChange={handleInputChange}
                        handleInputClick={handleInputClick}
                        meta={{
                          touched: touched.deliveryPoint,
                          error: errors.deliveryPoint,
                        }}
                      />
                    </div>
                  )}
                  <SelectInput
                    label="Pay method"
                    name="payMethod"
                    className="mb-3"
                    options={[
                      { value: "", label: "Pay method" },
                      { value: "payMethod", label: "Credit/Debit Cards" },
                      {
                        value: "payMethod1",
                        label: "Digital Wallets(PayPal, Google Pay, Apple Pay)",
                      },
                      { value: "payMethod2", label: "Cash on Delivery (COD)" },
                      { value: "payMethod3", label: "Checks or Money Orders" },
                    ]}
                    error={errors.payMethod}
                    touched={touched.payMethod}
                  />
                  <Input
                    className="mb-3 input__text__choice"
                    label="Comment"
                    name="comment"
                    placeholder="TEXT"
                    error={errors.comment}
                    touched={touched.comment}
                  />
                </div>
                <BasketPage />
              </div>
              <Button
                black
                type="submit"
                className="button__Check"
                svgLeft={<Check />}
                children="TO ORDER"
              />
            </Form>
          </div>
        )}
      </Formik>
      {isModalAll && (
        <ModalThanksOrder
          isOpen={() => modalChangeAll()}
          onclick={() => {
            modalChangeAll();
            navigate("/cart");
          }}
          firstClick={() => {
            modalChangeAll();
            navigate("/catalogue");
          }}
          secondaryClick={() => {
            modalChangeAll();
            navigate("/account/history");
          }}
        />
      )}
    </>
  );
}

export default ChoiceOfDelivF;