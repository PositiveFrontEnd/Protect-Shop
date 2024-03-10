import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionIsAdmin, actionToken } from "../../../store/userSlice";
import ModalLogOut from './../../Modal/ModalLogOut';
import { useNavigate } from 'react-router-dom';
import { selectorRegistrationData, selectorToken } from "../../../store/selectors";

const UserActivity = () => {
    const [showModal, setShowModal] = useState(false);
    let logoutTimerRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(selectorToken)
    const userData = useSelector(selectorRegistrationData)
    const isAdmin = userData.isAdmin

    useEffect(() => {

        const resetTimer = () => {
            clearTimeout(logoutTimerRef.current);
            logoutTimerRef.current = setTimeout(() => {
                if (token && isAdmin) {
                    setShowModal(true);
                    logoutTimerRef.current = setTimeout(() => {
                        dispatch(actionToken(''));
                        dispatch(actionIsAdmin(false))
                        setShowModal(false);
                        navigate('/account/authorization');
                    }, 30000);

                }
            }, 1800000);
        };
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        resetTimer();
        return () => {
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            clearTimeout(logoutTimerRef.current);
        };
    }, [dispatch, navigate]);

    const handleStayLoggedIn = () => {
        setShowModal(false);
        clearTimeout(logoutTimerRef.current)
        logoutTimerRef.current = null;
    };
    const handleLogout = () => {
        dispatch(actionToken(''));
        setShowModal(false);
        logoutTimerRef.current = null;
        navigate('/account/authorization')
    };
    const handleCloseModal = () => {
        handleStayLoggedIn();
        setShowModal(false);
    }
    return (
        <div>
            {showModal && (
                <div>
                    <ModalLogOut firstClick={handleStayLoggedIn} secondaryClick={handleLogout} onclick={handleCloseModal} />
                </div>
            )}
        </div>
    );
}
export default UserActivity