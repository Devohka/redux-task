// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';


import { reduser } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reduser);

export const store = configureStore({
    reducer: persistedReducer,
  });

  export const persistorStore = persistStore(store);
