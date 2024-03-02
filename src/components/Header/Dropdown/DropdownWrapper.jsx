import React from 'react';
import PropTypes from "prop-types";

const DropdownWrapper = ({click, children}) => {
    return (
        <div className='dropdown__wrapper' onClick={click}>{children}
        </div>
    );
};
DropdownWrapper.propTypes = {
    click: PropTypes.func,
    children:PropTypes.any
}
export default DropdownWrapper;