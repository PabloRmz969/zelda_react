import { createSlice } from "@reduxjs/toolkit";
import { MonsterInfo } from "../../zelda/types";


interface MonState {
    monsters: MonsterInfo[];
    isLoadingCh: boolean;
  }
  
  const initialState: MonState = {
    monsters: [],
    isLoadingCh: false,
  };
export const monsterSlice = createSlice({
  name: "monster",
  initialState,
  reducers: {
    startLoadingInfoMn: (state) => {
      state.isLoadingCh = true;
    },
    setMonsters: (state, { payload }) => {
      state.monsters = payload;
    },
  },
});

export const { setMonsters,startLoadingInfoMn } = monsterSlice.actions;
