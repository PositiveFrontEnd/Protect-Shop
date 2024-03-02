import React, { useEffect } from "react";
import "./Reset.css";
import "./components/Helpers/Base/Base.scss"
import "./components/Helpers/Variables/Variables.scss"
import "./App.css";
import Animation from "./components/Helpers/Animation/Animation"
import AppRouters from "./AppRouters";
import { useDispatch, useSelector } from "react-redux";
import { selectorAnimation } from "./store/selectors";
import { selectorToken } from "./store/selectors";
import { actionFavorite, actionGetFavorite } from "./store/favoriteSlice";

const App = () => {
  const animation = useSelector(selectorAnimation)
  const dispatch = useDispatch()
  const token = useSelector(selectorToken)

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const data = await dispatch(actionGetFavorite(token));
          const ids = data.products.map(product => product._id);
          dispatch(actionFavorite(ids))
        } catch (error) {
          console.log('favorite list is empty');
        }

      }
    };

    fetchData();
  }, [dispatch, token]);

  return <>
    {animation && <Animation />}
    <AppRouters />
  </>
};

export default App;
