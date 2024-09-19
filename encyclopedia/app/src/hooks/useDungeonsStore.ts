import { useDispatch, useSelector } from "react-redux";
import { ZeldaState } from "../store";
import {
  setDefDungeon,
  setDungeons,
  startClearDungeons,
  startClearDungeon,
  startLoadingInfoDun,
} from "../store/dungeons/dungeonsSlice";
import { ZeldaApi } from "../api";
import { functionsJq, getAttributes } from "../helpers";
import { BossInfo } from "../zelda";
import { DungeonInfo } from "../zelda/types/DungeonInfo";

export const useDungeonsStore = () => {
  const dispatch = useDispatch();
  const { dungeons, defDungeon } = useSelector(
    (state: ZeldaState) => state.dungeons
  );
  const { generateArr, assignNewInfo, getByGame } = getAttributes();
  const { errorSearch } = functionsJq();

  const startSearchDungeons = async () => {
    dispatch(startLoadingInfoDun());
    try {
      const games_res = await generateArr("games");
      const dungeons_res = await generateArr("dungeons");

      assignNewInfo(dungeons_res, games_res, "games");
      dispatch(setDungeons(dungeons_res));
    } catch (error) {
      console.log(error);
    }
  };

  const getDungeonsByGame = async (id: string) => {
    dispatch(startLoadingInfoDun());
    if (dungeons)
      if (dungeons.length < 1) {
        try {
          const dungeons_res = await generateArr("dungeons");
          let response: DungeonInfo[] = [];
          dungeons_res.filter((dungeon: DungeonInfo) => {
            const appearances = dungeon.appearances;
            for (const i in appearances) {
              dungeon.appearances[i].includes(id) && response.push(dungeon);
            }
          });

          dispatch(setDungeons(dungeons_res));
          dispatch(setDefDungeon(response));
        } catch (error) {
          errorSearch("dungeon");
          console.log(error);
        }
      } else {
        dispatch(setDefDungeon(getByGame(dungeons, id)));
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

      dispatch(setDefDungeon(response));
    } catch (error) {
      errorSearch("dungeon");
      console.log(error);
    }
  };

  const clearDungeons = () => dispatch(startClearDungeons());
  const clearDefDungeon = () => dispatch(startClearDungeon());
  return {
    defDungeon,
    clearDefDungeon,

    dungeons,
    clearDungeons,
    getDungeonsByGame,
    getDungeonsById,
    startSearchDungeons,
  };
};
