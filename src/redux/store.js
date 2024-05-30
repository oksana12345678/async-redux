import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer, filtersReducer } from "./reducers";
import { tasksReducer } from "./taskSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
