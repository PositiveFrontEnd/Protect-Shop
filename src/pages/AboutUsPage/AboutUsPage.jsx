import React from "react";
import "./AboutUs.scss";
import aboutUsMan from "/Images/aboutUsMan.jpg";
import aboutUsWoman from "/Images/aboutUsWoman.jpg";

const AboutUsPage = () => {
  return (
    <div className="aboutus">
      <h2 className="aboutus__h2">About us</h2>
      <div className="aboutus__block">
        <img src={aboutUsMan} alt="man" className="aboutus__photo first" />
        <p className="aboutus__mainText second">
          Protect was founded in Kharkiv to meet
          the needs of customers in reliable and high-quality bags and
          backpacks. The founders of the store were students who were constantly
          searching for convenient and practical bags and backpacks for their
          educational needs. <br /><br />{" "}
          <span>
            In 2002, they decided to create their
            own style for bag and backpack store to give customers the maximum
            choice and quality. The main value of the store is satisfaction of
            customers' needs and satisfaction after each purchase. Protect tries
            to always keep up to date with the latest trends and consumer needs
            to provide them with modern and high-quality products.
          </span>
        </p>
        <img src={aboutUsWoman} alt="woman" className="aboutus__photo third" />
        <p className="aboutus__mainText fourth">
          Protect offers a wide range of bags and
          rucksacks, including a variety of models and sizes, all of which can
          be expected for maximum performance and quality. All products offered
          by the seller are tested and tested to ensure compliance with safety
          and quality standards. <br /><br /> Protect
          always strives for improvement and development to provide the best
          possible services and products for its customers. Their team consists
          of sales and customer service experts who are always ready to help you
          with any questions about the products or services provided by the
          store.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

