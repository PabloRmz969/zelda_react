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
export const zeldaSlice = createSlice({
  name: "zelda",
  initialState,
  reducers: {
    startLoadingInfo: (state) => {
      state.isLoading = true;
    },
    setGames: (state, { payload }) => {
      state.isLoading = false;
      state.games = payload;
    },
  },
});

export const { startLoadingInfo, setGames } = zeldaSlice.actions;
