import { ComplementApi, ZeldaApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  GameInfo,
  setGames,
  startLoadingInfo,
} from "../store/zelda/zeldaSlice";
import { ZeldaState } from "../store";

export const useZeldaStore = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state: ZeldaState) => state.zelda);

  const startSearchGames = async () => {
    dispatch(startLoadingInfo());
    try {
      const { data } = await ZeldaApi.get("/games?limit=6");
      let { data: games_data } = data;
    
      for (let i = 0; i < games_data.length; i++) {
        const  id  = games_data[i].id;
        const { data: data_c } = await ComplementApi.get(
          `/encyclopedia/info?id=${id}`
        );
        const { ok, image } = data_c;
        console.log(image)
        games_data[i].image = ok && `/public/images/games/front/${image}`;
      }
      dispatch(setGames(games_data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    games,

    startSearchGames,
  };
};
