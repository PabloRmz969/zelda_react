import { useDispatch, useSelector } from "react-redux";
import {
  ZeldaState,
  setDefCharacter,
  setCharacters,
  startClearCharacter,
  startClearCharacters,
  startLoadingInfoCh,
} from "../store";
import { ZeldaApi } from "../api";
import { BossInfo, CharacterInfo } from "../zelda";

import { functionsJq, getAttributes } from "../helpers";

export const useCharactersStore = () => {
  const dispatch = useDispatch();
  const { characters, defCharacter } = useSelector(
    (state: ZeldaState) => state.characters
  );
  const { generateArr, assignNewInfo, getByGame } = getAttributes();
  const { errorSearch } = functionsJq();

  const startSearchCharacters = async () => {
    dispatch(startLoadingInfoCh());
    try {
      const games_res = await generateArr("games");
      const characters_res  = await generateArr("characters");

      assignNewInfo(characters_res, games_res, "games");
      dispatch(setCharacters(characters_res));
    } catch (error) {
      console.error(error);
    }
  };

  const clearCharacters = () => {
    dispatch(startClearCharacters());
  };

  const clearCharacter = () => {
    dispatch(startClearCharacter());
  };

  const startSearchCharacter = async (id: string) => {
    dispatch(startLoadingInfoCh());
    try {
      const games_res = await generateArr("games");
      const { data } = await ZeldaApi.get(`/characters/${id}`);
      let { data: characters_data } = data;
      let response: BossInfo[] = [];
      response.push(characters_data);
      assignNewInfo(response, games_res, "games");

      dispatch(setDefCharacter(response));
    } catch (error) {
      errorSearch("character");
      console.log(error);
    }
  };

  const getCharactersByGame = async (id: string) => {
    dispatch(startLoadingInfoCh());
    if (characters)
      if (characters?.length < 1) {
        try {
          const characters_res = await generateArr("characters");
          //let { data: characters_data } = data;
          let response: CharacterInfo[] = [];
          characters_res.filter((character: CharacterInfo) => {
            const appearances = character.appearances;
            for (const i in appearances) {
              character.appearances[i].includes(id) && response.push(character);
            }
          });
          dispatch(setCharacters(characters_res));
          dispatch(setDefCharacter(response));
          return characters;
        } catch (error) {
          errorSearch("character");
          console.error(error);
        }
      } else {
       dispatch(setDefCharacter(getByGame(characters,id)));  
      }
  };
  return {
    defCharacter,

    clearCharacter,
    startSearchCharacter,

    characters,

    clearCharacters,
    getCharactersByGame,
    startSearchCharacters,
  };
};
