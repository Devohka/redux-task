// import { createStore } from "redux";
// import { composeWithDevTools } from '@redux-devtools/extension';


//

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        task: task,
    },
  });
