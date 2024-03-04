import React from "react";
import PrimaryCard from "../../../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { useDispatch, useSelector } from "react-redux";
import { actionFavoriteForAll } from "../../../../store/favoriteSlice";
import { selectorSearchProducts, selectorThreeProducts, selectorToken } from "../../../../store/selectors";
import { actionGetOneProduct, actionGetThreeProducts } from "../../../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import CardsButtons from "../../../CataloguePage/CatalogueContent/Cards/CardsButtons/CardsButtons";

const AdminSearchResultPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(selectorToken)
    const products = useSelector(selectorSearchProducts);
    const threeProducts = useSelector(selectorThreeProducts);


     const handleFavorite = (productId, event) => {
        event.stopPropagation();
        dispatch(actionFavoriteForAll({productId, token}));
    };

    const handleProduct = (item) => {
      dispatch(actionGetOneProduct(item._id));
      dispatch(actionGetThreeProducts(item.name));
      setTimeout(() => { navigate('/account/changeproductform/') }, 700)
    };
    return(
         <div className='search__result'>
            {products.map((item) => (
                <PrimaryCard key={item._id} card={item} arr={threeProducts}
                    handleProduct={handleProduct}
                    handleFavorite={handleFavorite}

                    
                />
            ))}
            {/* <CardsButtons/> */}
        </div>
)
}
export default AdminSearchResultPage