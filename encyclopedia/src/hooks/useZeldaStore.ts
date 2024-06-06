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
      const { data } = await ZeldaApi.get("/games");
      let { data: games_data } = data;
      //games_data = games_data.filter((game: GameInfo) => game.id != '5f6ce9d805615a85623ec2ce');
      
      for (let i = 0; i < games_data.length; i++) {
        const id = games_data[i].id;
        const { data: data_c } = await ComplementApi.get(
          `/encyclopedia/info?id=${id}`
        );
        let { ok, image } = data_c;
        games_data[i].image = ok ? `/public/images/games/front/${image}` : image;
      }
      
      games_data = games_data.filter((game : GameInfo) => game.image != 'Id no encontrado');
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
