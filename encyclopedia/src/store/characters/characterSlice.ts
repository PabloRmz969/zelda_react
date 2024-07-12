import { createSlice } from "@reduxjs/toolkit";
import { CharacterInfo } from "../../zelda";

interface ChState {
  characters: CharacterInfo[];
  defCharacter?: CharacterInfo[];
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
    setDefCharacter: (state, { payload }) => {
      state.defCharacter = payload;
    },
    startClearCharacters: (state) => {
      state.characters = [];
    },
    startClearCharacter: (state) => {
      state.defCharacter = [];
    },
  },
});

export const {
  startLoadingInfoCh,

  setDefCharacter,
  startClearCharacter,

  setCharacters,
  startClearCharacters,
} = characterSlice.actions;
