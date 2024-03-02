import React from "react";
import "./CatalogueHeader.scss"
import newImg from "/Images/new.jpg";
import backpacksImg from "/Images/backpacks.jpg";
import bestsellerImg from "/Images/bestseller.jpg";
import handbagsImg from "/Images/handbags.jpg";
import { Link } from "react-router-dom";

const CatalogueHeader = () => {

    return (
        <div className="catalogue__header">
            <p className="catalogue__title">Catalogue</p>
            <div className="catalogue__wrapper" >
                <div className="catalogue__box">
                    {<Link className=" button-black button__catalogue " to='/catalogue?size=small&type=bag'>Small bags</Link>}
                    <img className=" catalogue__img" src={newImg} alt="Photo" /></div>
                <div className="catalogue__box">
                    <Link className="  button-black button__catalogue " to='/catalogue?type=backpack'>backpack</Link>
                    <img className="catalogue__img" src={backpacksImg} alt="Photo" /></div>
                <div className="catalogue__box">
                    <Link className="  button-black button__catalogue " to='/catalogue?type=bag&status=bestseller'>bestseller</Link>
                    <img className="catalogue__img" src={bestsellerImg} alt="Photo" /></div>
                <div className="catalogue__box">
                    <Link className="  button-black button__catalogue " to='/catalogue?type=bag&size=large'>Large bag</Link>
                    <img className="catalogue__img" src={handbagsImg} alt="Photo" /></div>
            </div>
        </div>
    )
}

export default CatalogueHeader;
