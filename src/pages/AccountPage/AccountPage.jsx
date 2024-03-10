import React from 'react'
import { Link } from 'react-router-dom';
import './Account.scss'
import AuthorizationSvg from './AccountSvg/Vector.svg?react'
import RegistrSvg from './AccountSvg/Union.svg?react'
import HeroSlider from '../../components/Main/Hero/HeroSlider/HeroSlider';
import { selectorToken } from '../../store/selectors';
import { useSelector } from 'react-redux';
import ProfilePage from '../ProfilePage/ProfilePage';

const AccountPage = () => {
  const token = useSelector(selectorToken)

  return (
    <>
      {token ? (
        <>
          <ProfilePage />
        </>
      ) : (

        <>
          <div className='link__box__account__page'>
            <div className='account__box'>
              <RegistrSvg className='account__page__svg' />
              <Link className='registration__link' to="/account/registration">REGISTRATION</Link>
            </div>
            <div className='account__box'>
              <AuthorizationSvg className='account__page__svg' />
              <Link className='authorization__link' to="/account/authorization">AUTHORIZATION</Link>
            </div>
          </div>
          <div>
            <HeroSlider />
          </div>
        </>
      )}
    </>
  )
}

export default AccountPage