import { useEffect } from "react";

import { ShowInfo } from "../../components";
import { useMonstersStore } from "../../../hooks/useMonstersStore";

export const MonstersPage = () => {
  const { monsters, startSearchMonsters } = useMonstersStore();

  useEffect(() => {
    console.log(monsters);
    if (monsters)
      if (monsters.length < 1) startSearchMonsters();
  }, []);

  return <ShowInfo elements={monsters} title="Monsters" />;
};
