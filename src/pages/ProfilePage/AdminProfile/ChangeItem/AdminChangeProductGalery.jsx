import React from "react";
import "./CardList.scss";
import { useEffect } from "react";
import Card from "../../../../components/Main/Cards/PrimaryCard/PrimaryCard/PrimaryCard";
import { useDispatch, useSelector } from "react-redux";
import {
actionGetOneProduct,
actionGetProducts,
actionGetThreeProducts,
actionLoadingTwelveProducts,
} from "../../../../store/productsSlice";
import {
selectorFiltersProducts,
selectorIsAdmin,
selectorLoadFilter,
selectorThreeProducts,
selectorToken,
selectorTwelveProducts,
} from "../../../../store/selectors";
import { useNavigate } from "react-router";
import { actionFavoriteForAll } from "../../../../store/favoriteSlice";
import AdminSearch from "./AdminSearch";
import CardsButtons from "../../../CataloguePage/CatalogueContent/Cards/CardsButtons/CardsButtons";

const AdminChangeProductGalery = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const filterLoad = useSelector(selectorLoadFilter);
    const products = useSelector(selectorTwelveProducts);
    const token = useSelector(selectorToken);
    const isAdmin = useSelector(selectorIsAdmin)
    useEffect(() => {
      dispatch(actionLoadingTwelveProducts(1));
      dispatch(actionGetProducts());
    }, []);
  
    const handleProduct = (item) => {
      dispatch(actionGetOneProduct(item._id));
      dispatch(actionGetThreeProducts(item.name));
      setTimeout(() => { navigate('/account/changeproductform/') }, 700)
    };
    const handleFavorite = (productId, event) => {
      event.stopPropagation();
      dispatch(actionFavoriteForAll({ productId, token }));
    };
  return (
    <div className="container">
      <div>
        <AdminSearch/>
      </div>
        <div className="content">
          <div className="admin__cards__list">

            <div className="cards__list">
                {products.map((item) => (
                  <Card
                  key={item._id}
                  id={item._id}
                  handleFavorite={handleFavorite}
                  card={item}
                  handleProduct={handleProduct}
                  />
                )
              )}
            </div>
              <CardsButtons/>
          </div>
        </div>
    </div>
  );
};
export default AdminChangeProductGalery