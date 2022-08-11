import { configureStore } from "@reduxjs/toolkit";
import { nasaAPI } from "../Services/nasaAPI";
import { spaceXAPI } from "../Services/spaceXAPI";

export default configureStore({
  reducer: {
    [spaceXAPI.reducerPath]: spaceXAPI.reducer,
    [nasaAPI.reducerPath]: nasaAPI.reducer,
  },
});
