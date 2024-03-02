import React, { useContext } from 'react';
import './Header.scss'
import '../Helpers/Base/Base.scss'
import { useState } from "react";
import HeaderTop from "./HeaderTop";
import DropdownWrapper from "./Dropdown/DropdownWrapper";
import { ContextFunctions } from "src/context/context";
import Dropdown from "src/components/Header/Dropdown/Dropdown";

const Header = () => {

    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const actionDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown)
    };
    const { modalChange, isModal } = useContext(ContextFunctions);

    return (
        <>
            <header>
                <HeaderTop actionDropdown={actionDropdown}
                    modalChange={modalChange}
                    isModal={isModal}
                />
            </header>

            {isOpenDropdown && (
                <DropdownWrapper
                    click={actionDropdown}
                    actionDropdown={actionDropdown}
                    modalChange={modalChange}
                    isModal={isModal}
                >
                    <Dropdown actionDropdown={actionDropdown}
                        modalChange={modalChange}
                        isModal={isModal}
                    ></Dropdown>
                </DropdownWrapper>
            )}
        </>
    );
};

export default Header;