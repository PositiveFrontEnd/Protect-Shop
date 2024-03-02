import React from "react";
import "./BlogPage.scss"
import blogImgOne from "/Images/blogImg1.jpg"
import blogImgTwo from "/Images/blogImg2.jpg"
import blogImgThree from "/Images/blogImg3.jpg"
import blogImgFour from "/Images/blogImg4.jpg"

const BlogPage = () => {
    return (
        <div className="blog">
            <div className="container">
                <h3 className="blog__title">Blog</h3>
                <ul className="blog__info">
                    <li>
                        <img className="blog__img" src={blogImgOne} alt="blogOne" />
                        <h4 className="info__title">Mini bags forever </h4>
                        <p className="info__description">Small bags have become very popular this season.
                            They are perfect for parties and weekends when you don't have to wear many things.
                            Such bags can be worn both on the shoulder</p>
                        <p className="info__description">and at the fingertips.</p>
                    </li>
                    <li>
                        <img className="blog__img" src={blogImgTwo} alt="blogtwo" />
                        <h4 className="info__title">Sackbags</h4>
                        <p className="info__description">Sackbags with large fasteners and chains have become popular this season.</p>
                        <p className="info__description">These bags are suitable for many styles, from classics to modern minimalism.</p>
                    </li>
                    <li>
                        <img className="blog__img" src={blogImgThree} alt="blogThree" />
                        <h4 className="info__title">Sackbags</h4>
                        <p className="info__description">Sackbags with large fasteners and chains have become popular this season.</p>
                        <p className="info__description">These bags are suitable for many styles, from classics to modern minimalism.</p>
                    </li>
                    <li>
                        <img className="blog__img" src={blogImgFour} alt="blogFour" />
                        <h4 className="info__title">Mini bags forever </h4>
                        <p className="info__description">Small bags have become very popular this season.
                            They are perfect for parties and weekends when you don't have to wear many things.
                            Such bags can be worn both on the shoulder
                            and at the fingertips.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default BlogPage