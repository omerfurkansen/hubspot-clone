import { createSlice } from "@reduxjs/toolkit";
import LeftImage from '../../assets/landing/lp-education.svg';
import RightImage from '../../assets/landing/lp-tool.svg';

const initialState = {
  left: {
    image: LeftImage,
    imageAlt: "Buyer persona for man in yellow shirt made with Make My Persona tool from HubSpot",
    heading: "What Is a Buyer Persona?",
    info: "Learn what a buyer persona is and how to conduct research, surveys, and interviews to build your own.",
    buttonText: "Learn More",
  },
  right: {
    image: RightImage,
    imageAlt: "Avatars for three buyer personas you can make with HubSpot's Make My Persona tool",
    heading: "Make My Persona Tool",
    info: "Create a buyer persona that your entire company can use to market, sell, and serve better.",
    buttonText: "Build My Persona",
  }
}

const landingSelectSlice = createSlice({
  name: "landingSelect",
  initialState,
  reducers: {}
});

export default landingSelectSlice.reducer;
