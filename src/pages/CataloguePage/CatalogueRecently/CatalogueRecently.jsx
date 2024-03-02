import React from "react";
import "./CatalogueRecently.scss"
import { selectorCard, selectorToken, selectorYouSee } from "../../../store/selectors"
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../pages/ProductCard/ProductCard.scss";
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { actionFavoriteForAll } from "../../../store/favoriteSlice";
import { actionGetOneProduct, actionGetThreeProducts } from "../../../store/productsSlice";

const CatalogueRecently = () => {
    const token = useSelector(selectorToken);

    const seeProducts = useSelector(selectorYouSee)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProduct = (item) => {
        dispatch(actionGetOneProduct(item._id));
        dispatch(actionGetThreeProducts(item.name));
        navigate(
            `/catalogue/${item.categories}/${item.type}/${item._id}/${item.color}`
        );
    };
    const handleFavorite = (productId, event) => {
        event.stopPropagation();
        dispatch(actionFavoriteForAll({ productId, token }));
    };

    return (

        seeProducts.length !== 0 && <div className="swiper__also">
            <div className="container">
                <h4 className="swiper__also__title">You see it recently</h4>
            </div>

            <Swiper
                slidesPerView={2}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loop={true}
                spaceBetween={5}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    430: {
                        slidesPerView: 2,
                    },
                }}
            >
                {seeProducts.length !== 0 && seeProducts.map((item) => (
                    <SwiperSlide key={item.itemNo} className="one_slide">
                        <Card
                            card={item}
                            handleProduct={handleProduct}
                            handleFavorite={handleFavorite}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default CatalogueRecently



