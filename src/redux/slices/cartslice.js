import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;