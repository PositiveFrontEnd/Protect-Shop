import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionIsAdmin, actionToken, actionUserRegistrationData } from "../../../store/userSlice";
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
            }, 180000);
        };

        const handleBeforeUnload = (event) => {
            if (token && isAdmin) {
                dispatch(actionToken(''));
                dispatch(actionUserRegistrationData(''))
            }
            setShowModal(false);
            navigate('/account/authorization');
        //     event.preventDefault();
        //    return event.returnValue = '';
            // return event.returnValue = 'Are you sure you want to leave?';
        };    

        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
        window.addEventListener("beforeunload", handleBeforeUnload);

        resetTimer();

        return () => {
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keydown", resetTimer);
            window.removeEventListener("beforeunload", handleBeforeUnload);
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
                    <ModalLogOut firstClick={handleStayLoggedIn} secondaryClick={handleLogout} onclick={handleCloseModal}/>
                </div>
            )}
        </div>
    );
}
export default UserActivity