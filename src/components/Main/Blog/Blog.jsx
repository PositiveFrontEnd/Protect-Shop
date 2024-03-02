import React from "react";
import "./Blog.scss"
import SectionBlogImgOne from "/Images/sectionBlogOne.jpg"
import SectionBlogTwo from "/Images/sectionBlogTwo.jpg"
import SectionBlogThree from "/Images/sectionBlogThree.jpg"
import Button from "../../Button/Button"
import { useNavigate } from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate()
    const navigateBlogPage = () => {
        navigate('/blog')
    }
    return (
        <>
            <section className="blog__wrapper">
                <div className="container">
                    <h2 className="blog__title">blog</h2>
                    <ul className="blog__info">
                        <li className="mobile__description">
                            <img className="blog__img" src={SectionBlogImgOne} alt="sectionBlogOne" />
                            <h4 className="blog__info__title">Mini bags forever </h4>
                            <p className="blog__info__description">Small bags have become very popular this season.
                                They are perfect for parties and weekends when you don't have to wear many things.
                                Such bags can be worn both on the shoulder and at the fingertips.</p>
                        </li>
                        <li className="develop__description">
                            <img className="blog__img" src={SectionBlogTwo} alt="" />
                            <h4 className="blog__info__title">Mini bags forever </h4>
                            <p className="blog__info__description">Small bags have become very popular this season.
                                They are perfect for parties and weekends when you don't have to wear many things.
                                Such bags can be worn both on the shoulder and at the fingertips.</p>
                        </li>
                        <li className="develop__description">
                            <img className="blog__img" src={SectionBlogThree} alt="" />
                            <h4 className="blog__info__title">Sackbags</h4>
                            <p className="blog__info__description">Sackbags with large fasteners and chains have become popular this season.</p>
                            <p className="blog__info__description">These bags are suitable for many styles, from classics to modern minimalism.</p>
                        </li>
                    </ul>
                    <div className="blog__button" >
                        <Button click={navigateBlogPage} white>See more</Button>
                    </div>
                </div>
            </section>
        </>
    )


}

export default Blog