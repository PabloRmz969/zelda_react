import { useDispatch, useSelector } from "react-redux";
import { ZeldaState, setBosses, startLoadingInfoBos } from "../store";
import { ZeldaApi } from "../api";
import { BossInfo } from "../zelda";

export const useBossesStore = () => {
  const dispatch = useDispatch();
  const { bosses } = useSelector((state: ZeldaState) => state.bosses);

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
  };
};
