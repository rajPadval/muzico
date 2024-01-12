import { createSlice } from "@reduxjs/toolkit";

const audioSlice = createSlice({
  name: "audio",
  initialState: {
    audioFiles: [],
  },
  reducers: {
    setAudioFiles: (state, action) => {
      state.audioFiles = action.payload;
    },
  },
});

export const { setAudioFiles } = audioSlice.actions;

export default audioSlice.reducer;
