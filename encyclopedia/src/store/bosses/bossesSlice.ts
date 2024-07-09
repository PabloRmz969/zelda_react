import { createSlice } from "@reduxjs/toolkit";
import { BossInfo } from "../../zelda";

interface BosState {
  bosses: BossInfo[];
  isLoadingBos: boolean;
}

const initialState: BosState = {
  bosses: [],
  isLoadingBos: false,
};

export const bossesSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    startLoadingInfoBos: (state) => {
      state.isLoadingBos = true;
    },
    setBosses: (state, { payload }) => {
      state.bosses = payload;
    },
    startClearBosses: (state) => {
      state.bosses =  [];
    }
  },
});

export const { setBosses,startClearBosses, startLoadingInfoBos } = bossesSlice.actions;
