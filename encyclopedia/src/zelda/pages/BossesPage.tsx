import { useEffect } from "react";
import { useBossesStore } from "../../hooks";
import { ShowInfo } from "../components";

export const BossesPage = () => {
  const { bosses, clearBosses, startSearchBosses } = useBossesStore();
  useEffect(() => {
    if (bosses.length < 1) startSearchBosses();
    else {
      clearBosses();
      startSearchBosses();
    }
  }, []);

  return <ShowInfo elements={bosses} title="Bosses" />;
};
