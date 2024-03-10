import React from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";
import "./InputStyles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectorAdressUkrPost } from "../../../store/selectors";
import { actionUkrPostAdress } from "../../../store/ukrAndNovaPostSlice";
import Select from "react-select";

const SearchInputUkrPost = (props) => {
  const dispatch = useDispatch();
  const { className, label, name, placeholder, error, meta, ...restProps } = props;
  const searchResults = useSelector(selectorAdressUkrPost);

  const handleInputChange = (inputValue) => {
    if (inputValue.trim() !== "") {
      dispatch(actionUkrPostAdress(inputValue));
    }
  };

  const handleInputClick = (selectedOption) => {
    if (selectedOption) {
      dispatch(actionUkrPostAdress(selectedOption.value));
    }
  };

  const options = searchResults
    ? searchResults.map((result) => ({
        value: result.Number,
        label: `${result.CityDescription}, ${result.Number}: ${result.ShortAddress}`,
      }))
    : [];

  return (
    <label
      className="form__field form__field-modal form__field-registr"
      htmlFor={name}
    >
      <div className="form__little__box">
        <p className="form__title">{label}</p>
        <Select
          options={options}
          onChange={handleInputClick}
          onInputChange={handleInputChange}
          isSearchable
          placeholder={placeholder}
          classNamePrefix="input__delivery__choice"
        />
        {meta.touched && meta.error && (
          <ErrorMessage name={name} component="div" className="error" />
        )}
      </div>
    </label>
  );
};

SearchInputUkrPost.defaultProps = {
  type: "text",
};

SearchInputUkrPost.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

export default SearchInputUkrPost;
