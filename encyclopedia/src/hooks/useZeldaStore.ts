import { ComplementApi, ZeldaApi } from "../api";
import { useDispatch, useSelector } from "react-redux";
import {
  setGames,
  startLoadingInfo,
  clearGames,
} from "../store/game/descriptionSlice";
import { ZeldaState } from "../store";
import { CharacterInfo, GameInfo, MonsterInfo } from "../zelda/types";
import {
  setCharacters,
  startLoadingInfoCh,
} from "../store/characters/characterSlice";
import { setMonsters, startLoadingInfoMn } from "../store/monster/monsterSlice";

export const useZeldaStore = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((state: ZeldaState) => state.description);
  const { characters } = useSelector((state: ZeldaState) => state.characters);
  const { monsters } = useSelector((state: ZeldaState) => state.monsters);

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
        let { ok, image, video } = data_c;
        games_data[i].image = ok
          ? `/public/images/games/front/${image}`
          : image;
        games_data[i].video = ok && video
      }

      games_data = games_data.filter(
        (game: GameInfo) => game.image != "Id no encontrado"
      );
      dispatch(setGames(games_data));
    } catch (error) {
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
      games_data.video = ok && video

      const games_res = [games_data];
      // games_data = games_data.filter(
      //   (game: GameInfo) => game.image != "Id no encontrado"
      // );
      dispatch(setGames(games_res));
    } catch (error) {
      console.error(error);
    }
  };

  const getCharactersById = async (id: string) => {
    dispatch(startLoadingInfoCh());
    try {
      const { data } = await ZeldaApi.get("/characters");
      let { data: characters_data } = data;
      let response: CharacterInfo[] = [];
      characters_data.filter((character: CharacterInfo) => {
        const appearances = character.appearances;
        for (const i in appearances) {
          character.appearances[i].includes(id) && response.push(character);
        }
      });
      dispatch(setCharacters(response));
    } catch (error) {
      console.error(error);
    }
  };

  const getMonstersById = async (id: string) => {
    dispatch(startLoadingInfoMn());
    try {
      const { data } = await ZeldaApi.get("/monsters");
      let { data: monsters_data } = data;
      let response: MonsterInfo[] = [];
      monsters_data.filter((monster: MonsterInfo) => {
        const appearances = monster.appearances;
        for (const i in appearances) {
          monster.appearances[i].includes(id) && response.push(monster);
        }
      });
      dispatch(setMonsters(response));
    } catch (error) {
      console.error(error);
    }
  };

  

  return {
    characters,
    games,
    monsters,

    clearGamesA,
    getGame,
    getMonstersById,
    getCharactersById,
    startSearchGames,
  };
};
