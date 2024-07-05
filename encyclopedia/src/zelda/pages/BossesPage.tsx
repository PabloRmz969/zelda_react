import { useEffect } from "react";
import { useBossesStore } from "../../hooks";
import { ShowInfo } from "../components";

export const BossesPage = () => {
  const { bosses, startSearchBosses } = useBossesStore();
  useEffect(() => {
    bosses.length < 1 && startSearchBosses();
  }, []);

  return <ShowInfo elements={bosses} title="Bosses"/>;
};
