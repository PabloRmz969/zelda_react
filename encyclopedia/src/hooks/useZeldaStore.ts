import { ComplementApi, ZeldaApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  setGames,
  startLoadingInfo,
  clearGames,
} from "../store/game/descriptionSlice";
import { ZeldaState } from "../store";
import {  GameInfo } from "../zelda/types";

import { functionsJq } from "../helpers";

export const useZeldaStore = () => {
  const dispatch = useDispatch();
  const {errorSearch} = functionsJq();
  const { games } = useSelector((state: ZeldaState) => state.description);
  const { characters } = useSelector((state: ZeldaState) => state.characters);
  const { monsters } = useSelector((state: ZeldaState) => state.monsters);
  

  const startSearchGames = async () => {
    dispatch(startLoadingInfo());
    try {
      const { data } = await ZeldaApi.get("/games?limit=50");
      let { data: games_data } = data;

      for (let i = 0; i < games_data.length; i++) {
        const id = games_data[i].id;
        const { data: data_c } = await ComplementApi.get(
          `/encyclopedia/info?id=${id}`
        );
        let { ok, image, video } = data_c;
        games_data[i].image = ok
          ? `/public/images/games/front/${image}`
          : image;
        games_data[i].video = ok && video;
      }

      games_data = games_data.filter(
        (game: GameInfo) => game.image != "Id no encontrado"
      );
      dispatch(setGames(games_data));
    } catch (error) {
      errorSearch('game');
      console.error(error);
    }
  };

  const clearGamesA = () => {
    dispatch(clearGames());
  };
  const getGame = async (id: string) => {
    dispatch(startLoadingInfo());
    try {
      const { data } = await ZeldaApi.get(`/games/${id}`);
      let { data: games_data } = data;
      const { data: data_c } = await ComplementApi.get(
        `/encyclopedia/info?id=${id}`
      );
      let { ok, image, video } = data_c;
      games_data.image = ok ? `/public/images/games/front/${image}` : image;
      games_data.video = ok && video;

      const games_res = [games_data];

      dispatch(setGames(games_res));
    } catch (error) {
      errorSearch('game');
      console.error(error);
    }
  };

  

  return {
    characters,
    games,
    monsters,

    clearGamesA,
    getGame,

    startSearchGames,
  };
};
