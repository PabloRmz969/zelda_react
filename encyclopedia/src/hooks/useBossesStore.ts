import { useDispatch, useSelector } from "react-redux";
import {
  ZeldaState,
  setBosses,
  setDefBoss,
  startClearBosses,
  startClearDefBoss,
  startLoadingInfoBos,
} from "../store";
import { ZeldaApi } from "../api";
import { BossInfo } from "../zelda";

import { functionsJq, getAttributes } from "../helpers";

export const useBossesStore = () => {
  const dispatch = useDispatch();
  const { bosses, defBoss } = useSelector((state: ZeldaState) => state.bosses);
  const { generateArr, assignNewInfo, getByGame } = getAttributes();
  const { errorSearch } = functionsJq();

  const startSearchBosses = async () => {
    dispatch(startLoadingInfoBos());
    const games_res = await generateArr("games");
    const dungeons_res = await generateArr("dungeons");
    try {
      const bosses_res = await generateArr("bosses");

      assignNewInfo(bosses_res, games_res, "games");
      assignNewInfo(bosses_res, dungeons_res, "dungeons");

      dispatch(setBosses(bosses_res));
    } catch (error) {
      console.error(error);
    }
  };

  const clearBosses = () => {
    dispatch(startClearBosses());
  };

  const clearDefBoss = () => {
    dispatch(startClearDefBoss());
  };

  const startSearchBoss = async (id: string) => {
    dispatch(startLoadingInfoBos());
    try {
      const games_res = await generateArr("games");
      const { data } = await ZeldaApi.get(`/bosses/${id}`);
      let { data: bosses_data } = data;
      let response: BossInfo[] = [];
      response.push(bosses_data);
      assignNewInfo(response, games_res, "games");

      console.log(response);
      dispatch(setBosses(response));
    } catch (error) {
      errorSearch("boss");
      console.log(error);
    }
  };

  const getBossesByGame = async (id: string) => {
    dispatch(startLoadingInfoBos());
    if(bosses)
      if(bosses.length < 1){
        try {
          const bosses_res = await generateArr("bosses");
          let response: BossInfo[] = [];
          bosses_res.filter((boss: BossInfo) => {
            const appearances = boss.appearances;
            for (const i in appearances) {
              boss.appearances[i].includes(id) && response.push(boss);
            }
          });
          dispatch(setDefBoss(response));
          dispatch(setBosses(bosses_res));
        } catch (error) {
          console.error(error);
        }
      } else {
        dispatch(setDefBoss(getByGame(bosses,id)));  
      }
   
  };
  return {
    defBoss,
    clearDefBoss,

    bosses,
    clearBosses,
    startSearchBoss,
    getBossesByGame,
    startSearchBosses,
  };
};
