import { createSlice } from "@reduxjs/toolkit";
import { CharacterInfo } from "../../zelda";


interface ChState {
  characters: CharacterInfo[];
  isLoadingCh: boolean;
}

const initialState: ChState = {
  characters: [],
  isLoadingCh: false,
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    startLoadingInfoCh: (state) => {
      state.isLoadingCh = true;
    },
    setCharacters: (state, { payload }) => {
      state.characters = payload;
    },
  },
});

export const { setCharacters,startLoadingInfoCh } = characterSlice.actions;
