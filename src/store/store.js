import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../store/shopingcart/cartSlice";
import cartUiSlice from "./shopingcart/CartUiSllice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
  },
});

export default store;