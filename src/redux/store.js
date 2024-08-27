import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartslice";

export const store = configureStore({
    reducer: {
        cart: cartSliceReducer,
    },
    devTools: true
});