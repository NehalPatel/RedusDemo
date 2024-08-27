import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

export const getItemSelector = createSelector(
    (state) => state.cart,
    (state) => state
);