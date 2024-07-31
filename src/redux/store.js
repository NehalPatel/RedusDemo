import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartslice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    devTools: true
})