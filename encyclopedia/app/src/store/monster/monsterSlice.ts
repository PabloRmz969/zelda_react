import { createSlice } from "@reduxjs/toolkit";
import { MonsterInfo } from "../../zelda/types";

interface MonState {
  monsters: MonsterInfo[];
  defMonsters?: MonsterInfo[];
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
    startClearMonsters: (state) => {
      state.monsters = [];
    },
    setDefMonsers: (state, { payload }) => {
      state.defMonsters = payload;
    },
    startClearDefMonser: (state) => {
      state.defMonsters = [];
    },
  },
});

export const {
  setDefMonsers,
  startClearDefMonser,
  setMonsters,
  startLoadingInfoMn,
  startClearMonsters,
} = monsterSlice.actions;
