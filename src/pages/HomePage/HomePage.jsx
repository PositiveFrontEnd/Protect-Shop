import React from "react";
import Hero from "../../components/Main/Hero/Hero";
import Instagram from "../../components/Main/Instagram/Instagram";
import Popular from "../../components/Main/Popular/Popular";
import Blog from "../../components/Main/Blog/Blog";
import Feedbacks from "../../components/Main/Feedbacks/Feedbacks";
import OurProducts from "../../components/Main/OurProducts/OurProducts";
import Propositions from "../../components/Main/Propositions/Propositions";
import NewestProducts from "../../components/Main/NewestProducts/NewestProducts";
import { useSelector } from "react-redux";
import { selectorFavoriteForCustomer } from "../../store/selectors";

const HomePage = () => {

  const favoriteForCustomer = useSelector(selectorFavoriteForCustomer)

  return (
    <>
      <Hero />
      <OurProducts />
      <Propositions />
      <NewestProducts />
      {favoriteForCustomer && <Popular />}
      <Feedbacks />
      <Blog />
      <Instagram />
    </>
  );
};

export default HomePage;
