import { useDispatch, useSelector } from "react-redux";
import { ZeldaState } from "../store";
import {
  setDungeons,
  startClearDungeons,
  startLoadingInfoDun,
} from "../store/dungeons/dungeonsSlice";
import { ZeldaApi } from "../api";
import { functionsJq, getAttributes } from "../helpers";
import { BossInfo } from "../zelda";
import { DungeonInfo } from "../zelda/types/DungeonInfo";

export const useDungeonsStore = () => {
  const dispatch = useDispatch();
  const { dungeons } = useSelector((state: ZeldaState) => state.dungeons);
  const { generateArr, assignNewInfo } = getAttributes();
  const { errorSearch } = functionsJq();

  const getDungeonsByGame = async (id: string) => {
    dispatch(startLoadingInfoDun());
    try {
      const dungeons_res = await generateArr("dungeons");
      let response: DungeonInfo[] = [];
      dungeons_res.filter((dungeon: DungeonInfo) => {
        const appearances = dungeon.appearances;
        for (const i in appearances) {
          dungeon.appearances[i].includes(id) && response.push(dungeon);
        }
      });

      console.log(response);
      dispatch(setDungeons(response));
    } catch (error) {
      errorSearch("dungeon");
      console.log(error);
    }
  };

  const getDungeonsById = async (id: string) => {
    dispatch(startLoadingInfoDun());
    try {
      const games_res = await generateArr("games");
      const { data } = await ZeldaApi.get(`/dungeons/${id}`);
      let { data: dungeons_data } = data;
      let response: BossInfo[] = [];
      response.push(dungeons_data);
      assignNewInfo(response, games_res, "games");

      console.log(response);
      dispatch(setDungeons(response));
    } catch (error) {
      errorSearch("dungeon");
      console.log(error);
    }
  };

  const startSearchDungeons = async () => {
    dispatch(startLoadingInfoDun());
    try {
      const games_res = await generateArr("games");
      const { data } = await ZeldaApi.get("/dungeons");
      let { data: dungeons_data } = data;

      assignNewInfo(dungeons_data, games_res, "games");
      console.log(dungeons_data);
      dispatch(setDungeons(dungeons_data));
    } catch (error) {
      console.log(error);
    }
  };
  const clearDungeons = () => dispatch(startClearDungeons());
  return {
    dungeons,
    clearDungeons,
    getDungeonsByGame,
    getDungeonsById,
    startSearchDungeons,
  };
};
