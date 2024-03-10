import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectorInputText } from "src/store/selectors";
import { actionSearchProducts } from "src/store/productsSlice";
import Button from "src/components/Button/Button";
import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const AdminSearch = () => {
    const dispatch = useDispatch();
    const inputText = useSelector(selectorInputText);
    const navigate = useNavigate();

    const handleSearch = (values) => {
        if (values) {
            dispatch(actionSearchProducts({ query: values.search }));
            navigate(`/account/changeproductgalery?request=${values.search}`);
        }
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
        <div className='change__product__container'>
            <div className='admin__search__input-group '>
                <Formik
                    initialValues={{ search: inputText }}
                    onSubmit={handleSubmit}
                >
                    <Form className='admin__search__form'>
                        <Field type="text" name="search" className='admin__search__input' onKeyDown={handleEnterPress} />
                        <Button black type="submit" className='admin__search__btn'>SEARCH</Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default AdminSearch;