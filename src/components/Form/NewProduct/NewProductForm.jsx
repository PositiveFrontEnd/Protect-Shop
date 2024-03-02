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
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        brand: "NN",
        name: "children's textile backpack nn ru-nn10454",
        categories: "children",
        color: "blue",
        country: "Ukraine",
        currentPrice: "347",
        previousPrice: "385",
        delivery: "free",
        imageUrls: ["https://www.blackpack.com.ua/wp-content/uploads/2023/08/bravery-kids.jpg"


        ],
        material: "material",
        productUrl: "/children",
        quantity: "15",
        size: "small",
        status: "popular",
        type: "backpack",
        myCustomParam: "A children's backpack is a backpack that your child will be delighted with. You can take it for a walk or to kindergarten - the backpack will be appropriate everywhere. Comfortable soft straps will not chafe your shoulders. The children's backpack has a loop at the top for hanging, and adjustable straps will make wearing the backpack as comfortable as possible. "
        ,
      }}
      onSubmit={(values) => {
        setFormData(values)
        console.log(values);
        dispatch(actionPreviewProductData(values))
        navigate('/account/preview')
      }}
    // validationSchema={validationSchema}

    >
      {({ errors, touched }) => (
        <div className="form__box-registr">
          <Form>
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
            <Button
              type="submit"
              black
            >
              preview
            </Button>
          </Form>
        </div>
      )}
    </Formik>

  )
}
export default NewProductForm