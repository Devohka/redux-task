// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';


import { reduser } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: reduser,
  });
