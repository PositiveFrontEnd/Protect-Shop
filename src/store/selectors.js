export const selectorAnimation = (state) => state.home.isAnimation;
export const selectorFilters = (state) => state.products.filters;
export const selectorToken = (state) => state.user.token;
export const selectorProducts = (state) => state.products.products;
export const selectorCard = (state) => state.products.oneProduct;
export const selectorThreeProducts = (state) => state.products.ThreeProducts;
export const selectorThreeColors = (state) => state.products.ThreeColors;
export const selectorTwelveProducts = (state) => state.products.twelveProducts;
export const selectorFiltersProducts = (state) =>
  state.products.twelveFiltersProducts;
export const selectorFilterHomePage = (state) => state.home.filterHomePage;
export const selectorBaskets = (state) => state.basket.basket;
export const selectorRegistrationData = (state) => state.user.registrationData;
export const selectorRegistrationModal = (state) =>
  state.user.registrationModal;
export const selectorInput = (state) => state.home.inputText;
export const selectorAuthorizationStatus = (state) =>
  state.user.authorizationStatus;
export const selectorRegistrationStatus = (state) =>
  state.user.registrationStatus;
export const selectInputText = (state) => state.home.inputText;
export const selectorSearchProducts = (state) => state.products.searchProducts;
export const selectorFavoriteForCustomer = (state) =>
  state.favorite.favoriteForCustomer;
export const selectorSortCatalogue = (state) => state.catalog.sortCatalogue;
export const selectorCorrectData = (state) => state.user.correctData;
export const selectorGuestBasket = (state) => state.basket.guestBasket;
export const selectorPriseGuest = (state) => state.basket.priceGuest;
export const selectorLoadFilter = (state) => state.catalog.loadFilter;
export const selectorGuestFavorite = (state) => state.favorite.guestFavorite;
export const selectorProductsBycategory = (state) =>
  state.products.productsByCategory;
export const selectorProductsByType = (state) => state.products.productsByType;
export const selectorPromoCodePrice = (state) => state.order.promoCodePrice;
export const selectorGetAllOrders = (state) => state.order.orderState;
export const selectorProductsForOrderGuest = (state) =>
  state.order.productsForOrderGuest;
export const selectorInfoForOrderGuest = (state) =>
  state.order.infoForOrderGuest;
export const selectorDeliveryForOrderGuest = (state) =>
  state.order.deliveryForOrderGuest;
export const selectorOrderFormData = (state) => state.order.order;
export const selectorOrderFormDataGuest = (state) => state.order.orderGuest;
export const selectorIsAdmin = (state) => state.user.isAdmin;
export const selectorYouSee = (state) => state.products.youSee;
export const selectorAddLetter = (state) => state.message.letter;
export const selectorPreviewProductInfo = (state) =>
  state.products.previewProductInfo;
export const selectorProductComments = (state) =>
  state.comments.productComments;
export const selectorProductComment = (state) => state.comments.productComment;
export const selectorLetterAll = (state) => state.message.letterAll;
export const selectorLetterToUpdate = (state) => state.message.letterToUpdate
export const selectorImportantLetters = (state) => state.message.importantLetters

