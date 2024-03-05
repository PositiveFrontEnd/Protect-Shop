import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ShopsPage from "src/pages/ShopsPage/ShopsPage";
import ShopsKharkiv from "src/pages/ShopsPage/ShopsKharkiv";
import ShopsKyiv from "src/pages/ShopsPage/ShopsKyiv";
import ShopsOdesa from "src/pages/ShopsPage/ShopsOdesa";
import ShopsLviv from "src/pages/ShopsPage/ShopsLviv";
import ShopsDnipro from "src/pages/ShopsPage/ShopsDnipro";
import Breadcrumbs from "src/components/Header/Breadcrumbs";
import HomePage from "./pages/HomePage/HomePage";
import AccountPage from "./pages/AccountPage/AccountPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import BasketPage from "./pages/BasketPage/BasketPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import SearchPage from "src/pages/SearchPage/SearchPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import SearchResultPage from "src/pages/SearchPage/SearchResultPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ChangeContactInfo from "./pages/ProfilePage/ChangeContactInfo";
import OrderHistory from "./pages/ProfilePage/History";
import Password from "./pages/ProfilePage/Password";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import { useDispatch, useSelector } from "react-redux";
import { selectorOrderFormData, selectorPreviewProductInfo, selectorRegistrationData, selectorToken } from "./store/selectors";
import ProductCard from "./pages/ProductCard/ProductCard";
import NotPage from "./pages/NotPage/NotPage";
import PlacingAnOrderPage from "./pages/PlacingAnOrderPage/PlacingAnOrderPage";
import ContactInformationBuyer from "./pages/PlacingAnOrderPage/ContactInformationBuyer";
import ChoiceOfDelivery from "./pages/PlacingAnOrderPage/ChoiceOfDelivery";
import UserActivity from "./components/Form/Authorization/UserActivity";
import OrderInfo from "./pages/ProfilePage/OrderInfo";
import { actionIsAdmin, actionUserRegistrationData } from "./store/userSlice";
import AdminProfile from "./pages/ProfilePage/AdminProfile/AdminProfile";
import AdminLettersPage from './pages/ProfilePage/AdminProfile/AdminLettersPage';
import AdminOrdersPage from './pages/ProfilePage/AdminProfile/AdminOrdersPage';
import OrderChangePage from "./pages/ProfilePage/AdminProfile/OrderChangePage";
import AdminNewProductPage from "./pages/ProfilePage/AdminProfile/AdminNewProductPage";
import PreviewProduct from './pages/ProfilePage/AdminProfile/PreviewProduct';
import LatterChangeStatusPage from "./pages/ProfilePage/AdminProfile/LetterChangeStatusPage";
import { actionAddToImportant, actionAllLetters } from "./store/messageSlice";
import AdminChangeProductGalery from "./pages/ProfilePage/AdminProfile/ChangeItem/ChangeProductPage";
import ChangeProductForm from './components/Form/ChangeProduct/ChangeProducrForm';
import AdminSearchResultPage from "./pages/ProfilePage/AdminProfile/ChangeItem/AdminSearchResultPage";
// import { actionAllLetters, actionLetters } from "./store/messageSlice";

const AppRouters = () => {
  const token = useSelector(selectorToken);
  const dispatch = useDispatch()
  const orderData = useSelector(selectorOrderFormData)
  const productToChangeOld = useSelector(selectorPreviewProductInfo)
  const [lettersFirstLoad, setLettersFirstLoad] = useState([])
  const [importants, setImportants] = useState([])
  const userData = useSelector(selectorRegistrationData)
  const isAdmin = userData.isAdmin
  // const importants = useSelector(selectorImportantLetters)

  useEffect(() => {
    token === "" && dispatch(actionUserRegistrationData({}))
    token === "" && dispatch(actionIsAdmin(false))
  }, [token, dispatch])

  useEffect(() => {
    if (isAdmin) {
      const fetchData = async () => {
          try {
            const response = await dispatch(actionAllLetters())
            setLettersFirstLoad(response)
          }
          catch {
            console.log("error")
          }
        }
        fetchData()
      }
    }, [dispatch, isAdmin])
 useEffect(() => {
    const importantIds = lettersFirstLoad
      .filter((item) => item.important === true)
      .map((item) => item._id);

   setImportants(importantIds);
   dispatch(actionAddToImportant(importantIds))
 }, [dispatch, lettersFirstLoad]);
  
  
  return (
    <>
      <Header />
      <Breadcrumbs />
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotPage />} />
        <Route path="/account/registration" element={<RegistrationPage />} />
        <Route path="/account/authorization" element={<AuthorizationPage />} />
        <Route path="/account/authorization/forgot_password" element={<ForgotPasswordPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/cart/*" element={<BasketPage />} />
        <Route path="/cart/placing_an_order" element={<PlacingAnOrderPage />}>
          <Route index end element={<ContactInformationBuyer />} />
          <Route path="contact_information" element={<ContactInformationBuyer />} />
          <Route path="choice_of_delivery" element={<ChoiceOfDelivery />} />
        </Route>
        <Route path="/about-us/" element={<AboutUsPage />} />
        <Route path="/search-" element={<SearchPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/catalogue/:categories/:type/:id" element={<ProductCard />} />
        <Route path="//account/orderstatus/:orderNo" element={<OrderChangePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/account/:orderNum" element={<OrderInfo />} />
        {token ? (
          isAdmin ? (
            <>
              <Route path="/account" element={<AdminProfile />}>
                {lettersFirstLoad && importants && <Route index end element={<AdminLettersPage />} />}
                {lettersFirstLoad && importants && <Route path="letters" element={<AdminLettersPage />} />}
                {lettersFirstLoad && importants && <Route path="/account/letters/:id" element={<LatterChangeStatusPage />} />}
                <Route path="orderstatus" element={<AdminOrdersPage />} />
                {productToChangeOld && <Route path="changeproductgalery" element={<AdminChangeProductGalery />} />}
                {<Route path="/account/changeproductgalery/:inputText" element={<AdminSearchResultPage />} />}
                <Route path="newproduct" element={<AdminNewProductPage />} />
                <Route path="changeproductform" element={<ChangeProductForm />} />

              </Route>
              <Route path="/account/preview" element={<PreviewProduct />} />

            </>
          )
            :
            (
              <Route path="/account" element={<ProfilePage />}>
                <Route index end element={<ChangeContactInfo />} />
                <Route path="information" element={<ChangeContactInfo />} />
                <Route path="password" element={<Password />} />
                <Route path="history" element={<OrderHistory />} />
              </Route>
            )
        ) : (
          <Route path="/account" element={<AccountPage />} />
        )}
        <Route path="/shops" element={<ShopsPage />}>
          <Route index element={<ShopsKharkiv />} />
          <Route path="kharkiv" element={<ShopsKharkiv />} />
          <Route path="kyiv" element={<ShopsKyiv />} />
          <Route path="odesa" element={<ShopsOdesa />} />
          <Route path="lviv" element={<ShopsLviv />} />
          <Route path="dnipro" element={<ShopsDnipro />} />
        </Route>
      </Routes>
      <Footer />
      {token && <UserActivity />}
    </>
  );
};

export default AppRouters;
