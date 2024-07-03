import { useDispatch, useSelector } from "react-redux";
import { ZeldaState } from "../store";
import { setDungeons, startLoadingInfoDun } from "../store/dungeons/dungeonsSlice";
import { ZeldaApi } from "../api";
import { DungeonInfo } from "../zelda/types/DungeonInfo";

export const useDungeonsStore = () => {
  const dispatch = useDispatch();
  const { dungeons } = useSelector((state: ZeldaState) => state.dungeons);
  const getDungeonsById = async (id: string) => {
    dispatch(startLoadingInfoDun());
    try {
      const { data } = await ZeldaApi.get("/dungeons");
      let { data: dungeons_data } = data;
      let response: DungeonInfo[] = [];
      dungeons_data.filter((dungeons: DungeonInfo) => {
        const appearances = dungeons.appearances;
        for (const i in appearances) {
          dungeons.appearances[i].includes(id) && response.push(dungeons);
        }
      });
      console.log(response);
      dispatch(setDungeons(response));
    } catch (error) {
      console.log(error);
    }
  };
  return {
    dungeons,
    getDungeonsById
  };
};
