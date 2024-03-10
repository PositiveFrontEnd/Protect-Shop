import React from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import "../Registration/RegistrationF.scss";
import "./InputStyles.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectorAdressNovaPost } from "../../../store/selectors";
import { actionNovaPostAdress } from "../../../store/ukrAndNovaPostSlice";
import Select from "react-select";

const LiveSearchInput = (props) => {
  const dispatch = useDispatch();
  const { className, label, name, placeholder, error, meta, handleInputChange, handleInputClick, ...restProps } = props;
  const searchResults = useSelector(selectorAdressNovaPost);

  // const handleInputChange = (inputValue) => {
  //   if (inputValue.trim() !== "") {
  //     dispatch(actionNovaPostAdress(inputValue));
  //   }
  // };

  // const handleInputClick = (selectedOption) => {
  //   if (selectedOption) {
  //     dispatch(actionNovaPostAdress(selectedOption.value));
  //   }
  // };

  const options = searchResults
    ? searchResults.map((result) => ({
        value: result.SiteKey,
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

LiveSearchInput.defaultProps = {
  type: "text",
};

LiveSearchInput.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  meta: PropTypes.object.isRequired,
};

export default LiveSearchInput;
