import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import "./ContainerRegistrButtStyle.scss";
import Google from "../../Button/ButtonSvg/google.svg?react";
import Apple from "../../Button/ButtonSvg/apple.svg?react";
import "../../../pages/AuthorizationPage/AuthorizationPage.scss";
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useDispatch } from "react-redux";
// import {
//   actionRegistration,
//   actionModalAfterRegistration,
//   actionRegistrationStatus,
//   actionCorrectLogin
// } from "../../../store/userSlice";
// import { API_URL } from "../../Helpers/Api/Api";

// import {actionIsAnimation} from "../../../store/homeSlice";
// import sendRequest from './../../Helpers/SendRequest/sendRequest';

// function transliterate(str) {
//   const translitMap = {
//     'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd',
//     'е': 'e', 'є': 'ie', 'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i',
//     'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
//     'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
//     'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
//     'ь': '', 'ю': 'iu', 'я': 'ia'
//   };

//   return str.split('').map(char => translitMap[char.toLowerCase()] || char).join('');
// }



function ContainerRegistrButt({ handleUserLogin, title }) {
  //   const dispatch = useDispatch()
  //   const login = useGoogleLogin({
  //     onSuccess: async (response) => {
  //     try {
  //       const res = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${response.access_token}`
  //           }
  //         }
  //         )
  //       if (res) {
  //         const userData = {

  //         login: transliterate(res.data.given_name),
  //         password: "esfegraethrstjtdjkryfkryfi",
  //         telephone: "+380982884618",
  //         gender: "female",
  //         avatarUrl: "",
  //         isAdmin: false,
  //         checkbox: true,
  //         firstName: transliterate(res.data.family_name),
  //         lastName: transliterate(res.data.given_name),
  //         email: res.data.email,
  //         }
  //         console.log(res)
  //           try {
  //             dispatch(actionIsAnimation(true));
  //             const newCustomer = {
  //               headers: {
  //                 "Content-Type": "application/json",
  //               },
  //               body: JSON.stringify(userData),
  //             };
  //             const response = await sendRequest(
  //               `${API_URL}/customers`,
  //               "POST",
  //               newCustomer
  //             );
  //             if (response) {
  //               console.log("Успішна відповідь:", response);
  //               dispatch(actionCorrectLogin({
  //                 loginOrEmail: userData.email,
  //                 password: 'esfegraethrstjtdjkryfkryfi',
  //               }))
  //             }
  //           } catch (error) {
  //             console.error("Сталася помилка під час виконання функції:", error);
  //           } finally {
  //             dispatch(actionIsAnimation(false));
  //           }

  //         }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //       }
  // });
  return (
    <>
      <div className="form__butt__container">
        <span className="form__title">{title}</span>
        <div className="form__butt__box">
          {/* <Button
            white
            // click={login}
            className="button__google"
            svgLeft={<Google />}
            children="Login with Google"
          />
          <Button
            white
            // click={handleUserLogin}
            className="button__apple"
            svgLeft={<Apple />}
            children="Login with Apple"
          /> */}

        </div>
        <span className="form__butt__element">OR</span>
      </div>
    </>
  );
}

ContainerRegistrButt.propTypes = {
  handleUserLogin: PropTypes.any,
  title: PropTypes.string.isRequired,
};

export default ContainerRegistrButt