import { useDispatch, useSelector } from "react-redux";
import { ZeldaState, setBosses, startLoadingInfoBos } from "../store";
import { ZeldaApi } from "../api";
import { BossInfo } from "../zelda";

import { getAttributes } from "../helpers";

export const useBossesStore = () => {
  const dispatch = useDispatch();
  const { bosses } = useSelector((state: ZeldaState) => state.bosses);
  const { generateArr, assignNewInfo } = getAttributes();

  const startSearchBosses = async () => {
    dispatch(startLoadingInfoBos());
    const games_res = await generateArr("games");
    const dungeons_res = await generateArr("dungeons");
    try {
      const { data } = await ZeldaApi.get("/bosses");
      let { data: bosses_data } = data;
      assignNewInfo(bosses_data, games_res, "games");
      assignNewInfo(bosses_data, dungeons_res, "dungeons");

      dispatch(setBosses(bosses_data));
    } catch (error) {
      console.error(error);
    }
  };

  const getBossesById = async (id: string) => {
    dispatch(startLoadingInfoBos());
    try {
      const { data } = await ZeldaApi.get("/bosses");
      let { data: bosses_data } = data;
      let response: BossInfo[] = [];
      bosses_data.filter((boss: BossInfo) => {
        const appearances = boss.appearances;
        for (const i in appearances) {
          boss.appearances[i].includes(id) && response.push(boss);
        }
      });
      dispatch(setBosses(response));
    } catch (error) {
      console.error(error);
    }
  };
  return {
    bosses,
    getBossesById,
    startSearchBosses,
  };
};
