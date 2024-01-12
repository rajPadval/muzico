import { configureStore } from "@reduxjs/toolkit";
import AudioSlice from "./slices/AudioSlice";

const store = configureStore({
  reducer: {
    audio: AudioSlice,
  },
});

export default store;
