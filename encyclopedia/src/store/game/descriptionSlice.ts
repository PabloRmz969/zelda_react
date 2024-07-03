import { createSlice } from "@reduxjs/toolkit";
import { GameInfo } from "../../zelda/types";


interface Istate {
  games: GameInfo[];
  isLoading: boolean;
}

const initialState : Istate = {
    games: [],
    isLoading: false
}
export const descriptionSlice = createSlice({
  name: "description",
  initialState,
  reducers: {
    startLoadingInfo: (state) => {
      state.isLoading = true;
    },
    setGames: (state, { payload }) => {
      state.isLoading = false;
      state.games = payload;
    },
    clearGames: (state)=> {
      state.games = []
    }
  },
});

export const { startLoadingInfo, setGames, clearGames } = descriptionSlice.actions;
