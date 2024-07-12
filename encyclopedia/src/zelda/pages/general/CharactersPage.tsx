import { useEffect } from "react";
import { ShowInfo } from "../../components";
import { useCharactersStore } from "../../../hooks/useCharactersStore";

export const CharactersPage = () => {
  const { characters, startSearchCharacters } =
    useCharactersStore();

  useEffect(() => {
    if (characters) {
      if (characters.length < 1) startSearchCharacters();
    }
  }, []);

  return <ShowInfo elements={characters} title="Characters" />;
};
