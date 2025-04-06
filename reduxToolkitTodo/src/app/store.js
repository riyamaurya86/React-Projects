//1.Configure Store
//2.creating Slices(reducers)-> in todoSlice.js
//3.Two parts me export hota h reducer 1)individual 2)all
//3.2).Export all reducers for store to update values
//4.store me reducer import karte h
//5.useDispatch using a reducer adds value in the store
//useSelector
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice'; //4.
 
export const store = configureStore({
    reducer: todoReducer               //4.
 })