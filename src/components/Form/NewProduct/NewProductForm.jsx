import { Formik, Form, Field } from "formik";
import React, { useState } from "react";
import './NewProductForm.scss'
import validationSchema from "./ValidationProductForm"
import Input from "../Inputs/Input";
import SelectInput from "../Inputs/Select";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionPreviewProductData } from "../../../store/productsSlice";


const NewProductForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [productToChange, setProductToChange] = useState({})

  const handleCleanForm = () => {
    dispatch(actionPreviewProductData({}))

  }
  return (

    <Formik
      onReset={() => setProductToChange({})}

      initialValues={
        {
          ...productToChange
        }
      }

      onSubmit={(values) => {
        setProductToChange(values)
        dispatch(actionPreviewProductData(values))
        setTimeout(() => {
          Object.keys(productToChange).length !== 0 && navigate('/account/preview')

        })
      }}
    // validationSchema={validationSchema}

    >
      {({ errors, touched }) => (
        <div className="create__product__container">

          <div className="form__box-admin">
            <Form>
              <div className="new__prouct__form">


                <div className="product__column">

                  <Input
                    className="mb-3"
                    label="Brand"
                    name="brand"
                    placeholder="Brand"
                    error={errors.brand}
                    touched={touched.brand}
                  />
                  <Input
                    className="mb-3"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    error={errors.name}
                    touched={touched.name}
                  />
                  <SelectInput
                    label="Categories"
                    name="categories"
                    className="mb-3"
                    options={[
                      { value: "", label: "Categories" },
                      { value: "woman", label: "Woman" },
                      { value: "children", label: "Children" },
                      { value: "men", label: "Men" },
                    ]}
                    error={errors.categories}
                  />
                  <Input
                    className="mb-3"
                    label="Color"
                    name="color"
                    placeholder="Color"
                    error={errors.color}
                    touched={touched.color}
                  />
                  <Input
                    className="mb-3"
                    label="Country"
                    name="country"
                    placeholder="Country"
                    error={errors.telephone}
                    touched={touched.telephone}
                  />
                  <Input
                    className="mb-3"
                    label="Сurrent Price"
                    name="currentPrice"
                    placeholder="Сurrent Price"
                    error={errors.telephone}
                    touched={touched.telephone}
                  />
                  <Input
                    className="mb-3"
                    label="Previous Price"
                    name="previousPrice"
                    placeholder="Previous Price"
                    error={errors.previousPrice}
                    touched={touched.previousPrice}
                  />

                  <SelectInput
                    label="Delivery"
                    name="delivery"
                    className="mb-3"
                    options={[
                      { value: "", label: "Delivery" },
                      { value: "free", label: "Free" },
                      { value: "paid", label: "Paid" },
                    ]}
                    error={errors.delivery}
                  />
                  <div className="mb-3">
                    <label className="label__bold">Item Img</label>
                    {[0, 1, 2].map(index => (
                      <Input
                        key={index}
                        className="mb-3"
                        name={`imageUrls[${index}]`}
                        placeholder={`Item Img ${index + 1}`}
                        error={touched.imageUrls && touched.imageUrls[index] && errors.imageUrls && errors.imageUrls[index]}
                        touched={touched.imageUrls && touched.imageUrls[index]}
                      />
                    ))}
                  </div>
                </div>
                <div className="product__column">

                  <Input
                    className="mb-3"
                    label="Material"
                    name="material"
                    placeholder="Material"
                    error={errors.material}
                    touched={touched.material}
                  />
                  <Input
                    className="mb-3"
                    label="Product Url"
                    name="productUrl"
                    placeholder="Product Url"
                    error={errors.productUrl}
                    touched={touched.productUrl}
                  />
                  <Input
                    className="mb-3"
                    label="Quantity"
                    name="quantity"
                    placeholder="Quantity"
                    error={errors.quantity}
                    touched={touched.quantity}
                  />
                  <Input
                    className="mb-3"
                    label="Size"
                    name="size"
                    placeholder="Size"
                    error={errors.size}
                    touched={touched.size}
                  />
                  <SelectInput
                    label="Status"
                    name="status"
                    className="mb-3"
                    options={[
                      { value: "", label: "Status" },
                      { value: "popular", label: "Popular" },
                      { value: "new", label: "New" },
                      { value: "bestseller", label: "Bestseller" },
                      { value: "sell", label: "Sell" },
                    ]}
                    error={errors.delivery}
                  />
                  <Input
                    className="mb-3"
                    label="Type"
                    name="type"
                    placeholder="Type"
                    error={errors.type}
                    touched={touched.type}
                  />
                  <Field
                    as="textarea"
                    className="mb-3 product__textarea"
                    label="Description"
                    name="myCustomParam"
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="changeproduct__buttons">
                <Button
                  type="submit"
                  black
                  className="preview__button"
                >
                  preview
                </Button>
                <Button
                  type="reset"
                  white
                  className="preview__button"
                  click={() => handleCleanForm()}
                >
                  clean form
                </Button>

              </div>
            </Form>
          </div>
        </div>

      )}
    </Formik>

  )
}
export default NewProductForm