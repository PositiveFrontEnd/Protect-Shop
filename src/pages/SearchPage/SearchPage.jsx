import React from 'react';
import './SearchPage.scss'
import Hero from "src/components/Main/Hero/Hero";
import Instagram from "src/components/Main/Instagram/Instagram";
import HeaderSearch from "src/components/Header/HeaderSearch";
import Blog from "src/components/Main/Blog/Blog";
import Feedbacks from "src/components/Main/Feedbacks/Feedbacks";
import OurProducts from "src/components/Main/OurProducts/OurProducts";
import Popular from "src/components/Main/Popular/Popular";

const SearchPage = () => {
    return (
        <div>
            <HeaderSearch />
            <Hero />
            <OurProducts />
            <Popular />
            <Feedbacks />
            <Blog />
            <Instagram />
        </div>
    );
};

export default SearchPage;