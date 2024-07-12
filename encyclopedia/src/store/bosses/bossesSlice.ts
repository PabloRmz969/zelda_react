import { createSlice } from "@reduxjs/toolkit";
import { BossInfo } from "../../zelda";

interface BosState {
  bosses: BossInfo[];
  defBoss?: BossInfo[];
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
    setDefBoss: (state, { payload }) => {
      state.defBoss = payload;
    },
    startClearBosses: (state) => {
      state.bosses = [];
    },
    startClearDefBoss: (state) => {
      state.defBoss = [];
    },
  },
});

export const {
  setDefBoss,
  startClearDefBoss,
  setBosses,
  startClearBosses,
  startLoadingInfoBos,
} = bossesSlice.actions;
