import { createSlice } from "@reduxjs/toolkit";
import { profiles } from "../../data";

const initialState = {
  selectedPersona: profiles[0],
  selectedPage: 0,
  additionalBiggestChallenge: "",
  additionalTools: "",
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
    setAdditionalBiggestChallenge: (state, action) => {
      state.additionalBiggestChallenge = action.payload;
    },
    setAdditionalTools: (state, action) => {
      state.additionalTools = action.payload;
    }
  }
});

export const { setSelectedPersona, setSelectedPage, setAdditionalBiggestChallenge, setAdditionalTools } = buildMyPersonaSlice.actions;

export default buildMyPersonaSlice.reducer;