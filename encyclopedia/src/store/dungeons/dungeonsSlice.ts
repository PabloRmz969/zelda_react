import { createSlice } from "@reduxjs/toolkit";
import { DungeonInfo } from "../../zelda/types/DungeonInfo";


interface DunState {
  dungeons: DungeonInfo[];
  isLoadingCh: boolean;
}

const initialState: DunState = {
  dungeons: [],
  isLoadingCh: false,
};

export const dungeonSlice = createSlice({
  name: "dungeon",
  initialState,
  reducers: {
    startLoadingInfoDun: (state) => {
      state.isLoadingCh = true;
    },
    setDungeons: (state, { payload }) => {
      state.dungeons = payload;
    },
  },
});

export const { setDungeons, startLoadingInfoDun } = dungeonSlice.actions;
