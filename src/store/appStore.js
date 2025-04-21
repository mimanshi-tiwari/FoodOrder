import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../slice/cartSlice';

//* Build our store
const appStore  = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default appStore;