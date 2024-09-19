import { useDispatch, useSelector } from "react-redux";
import {
  ZeldaState,
  setMonsters,
  setDefMonsers,
  startClearMonsters,
  startClearDefMonser,
  startLoadingInfoMn,
} from "../store";
import { ZeldaApi } from "../api";
import { BossInfo } from "../zelda";

import { functionsJq, getAttributes } from "../helpers";

export const useMonstersStore = () => {
  const dispatch = useDispatch();
  const { monsters, defMonsters } = useSelector((state: ZeldaState) => state.monsters);
  const { generateArr, assignNewInfo, getByGame } = getAttributes();
  const { errorSearch } = functionsJq();

  const startSearchMonsters = async () => {
    dispatch(startLoadingInfoMn());
    const games_res = await generateArr("games");
    try {
      const monsters_res = await generateArr("monsters");

      assignNewInfo(monsters_res, games_res, "games");

      dispatch(setMonsters(monsters_res));
    } catch (error) {
      console.error(error);
    }
  };

  const clearMonsters = () => {
    dispatch(startClearMonsters());
  };

  const clearDefMonster = () => {
    dispatch(startClearDefMonser());
  };

  const startSearchMonster = async (id: string) => {
    dispatch(startLoadingInfoMn());
    try {
      const games_res = await generateArr("games");
      const { data } = await ZeldaApi.get(`/monsters/${id}`);
      let { data: monsters_data } = data;
      let response: BossInfo[] = [];
      response.push(monsters_data);
      assignNewInfo(response, games_res, "games");

      dispatch(setDefMonsers(response));
    } catch (error) {
      errorSearch("monster");
      console.log(error);
    }
  };

  const getMonstersByGame = async (id: string) => {
    dispatch(startLoadingInfoMn());
    if(monsters)
      if(monsters.length < 1){
        try {
          const bosses_res = await generateArr("bosses");
          let response: BossInfo[] = [];
          bosses_res.filter((boss: BossInfo) => {
            const appearances = boss.appearances;
            for (const i in appearances) {
              boss.appearances[i].includes(id) && response.push(boss);
            }
          });
          dispatch(setDefMonsers(response));
          dispatch(setMonsters(bosses_res));
        } catch (error) {
          console.error(error);
        }
      } else {
        dispatch(setDefMonsers(getByGame(monsters,id)));  
      }
   
  };
  
  return {
    defMonsters,
    clearDefMonster,

    monsters,
    clearMonsters,
    startSearchMonster,
    getMonstersByGame,
    startSearchMonsters,
  };
};
