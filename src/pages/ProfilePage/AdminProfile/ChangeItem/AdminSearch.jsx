import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectInputText, selectorSearchProducts, selectorThreeProducts, selectorToken } from "src/store/selectors";
import { actionInputText } from "src/store/homeSlice";
import { actionGetOneProduct, actionGetThreeProducts, actionSearchProducts } from "src/store/productsSlice";
import Button from "src/components/Button/Button";
import PrimaryCard from "src/components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const AdminSearch = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(selectInputText);
    const token = useSelector(selectorToken);
    const products = useSelector(selectorSearchProducts);
    const threeProducts = useSelector(selectorThreeProducts);
    const navigate = useNavigate();

    // const handleInputChange = (event) => {
    //     dispatch(actionInputText(event.target.value));
    // }

    const handleSearch = (values) => {
        dispatch(actionSearchProducts({ query: values.search }));
        navigate(`/account/changeproductgalery/${values.search}`);
    }

    const handleSubmit = (values, { resetForm }) => {
        handleSearch(values);
        resetForm();
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch({ search: inputText });
        }
    }

    return (
        <div className='container'>
            <div className='admin__search__input-group '>
                <Formik
                    initialValues={{ search: inputText }}
                    onSubmit={handleSubmit}
                >
                    <Form className='admin__search__form'>
                        <Field type="text" name="search" className='admin__search__input' onKeyDown={handleEnterPress}  />
                        <Button black type="submit" className='admin__search__btn'>SEARCH</Button>
                    </Form>
                </Formik>
            </div>
            {/* <div className='search__result'>
                {products.map((item) => (
                    <PrimaryCard key={item._id} card={item} arr={threeProducts} />
                ))}
            </div> */}
        </div>
    );
};

export default AdminSearch;