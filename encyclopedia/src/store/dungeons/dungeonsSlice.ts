import { createSlice } from "@reduxjs/toolkit";
import { DungeonInfo } from "../../zelda/types/DungeonInfo";

interface DunState {
  dungeons: DungeonInfo[];
  defDungeon?: DungeonInfo[];
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
    setDefDungeon: (state, { payload }) => {
      state.defDungeon = payload;
    },
    startClearDungeons: (state) => {
      state.dungeons = [];
    },
    startClearDungeon: (state) => {
      state.dungeons = [];
    },
  },
});

export const {
  setDefDungeon,
  startClearDungeon,

  setDungeons,
  startClearDungeons,
  startLoadingInfoDun,
} = dungeonSlice.actions;
