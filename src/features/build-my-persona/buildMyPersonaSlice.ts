import { createSlice } from "@reduxjs/toolkit";
import { profiles } from "../../data";

const initialState = {
  selectedPersona: profiles[0],
  selectedPage: 0,
};

const buildMyPersonaSlice = createSlice({
  name: "buildMyPersona",
  initialState,
  reducers: {
    setSelectedPersona: (state, action) => {
      state.selectedPersona = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage = action.payload;
    },
  }
});

export const { setSelectedPersona, setSelectedPage } = buildMyPersonaSlice.actions;

export default buildMyPersonaSlice.reducer;