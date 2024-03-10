import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice.js";
import basketReducer from "./basketSlice.js";
import homeReducer from "./homeSlice.js";
import productsReducer from "./productsSlice.js";
import userReducer from "./userSlice.js";
import catalogReducer from "./catalog.js";
import orderReducer from "./orderSlice.js";
import messageReducer from "./messageSlice.js";
import commentsReducer from "./commentsSlice";
import shopCommentsReducer from "./shopCommentsSlice.js";
import novaPostReducer from "./ukrAndNovaPostSlice.js";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    basket: basketReducer,
    home: homeReducer,
    products: productsReducer,
    user: userReducer,
    catalog: catalogReducer,
    order: orderReducer,
    message: messageReducer,
    comments: commentsReducer,
    shopComments: shopCommentsReducer,
    novaPost: novaPostReducer,
  },
});
