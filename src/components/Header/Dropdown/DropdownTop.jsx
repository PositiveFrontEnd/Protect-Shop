import React from 'react';
import Close from '../HeaderSvg/close.svg?react'
import PropTypes from "prop-types";

const DropdownTop = ({ click }) => {

    return (
        <div className='dropdown__top'>
            <div></div>
            <h4 className='dropdown__title' onClick={click}>close</h4>
            <Close onClick={click} />
        </div>
    );
};

DropdownTop.propTypes = {
    click: PropTypes.func,
}

export default DropdownTop;