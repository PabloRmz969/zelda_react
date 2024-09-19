import { useEffect } from "react";
import { useDungeonsStore } from "../../../hooks/useDungeonsStore";
import { ShowInfo } from "../../components";

export const DungeonsPage = () => {
  const { dungeons, startSearchDungeons } = useDungeonsStore();

  useEffect(() => {
    if (dungeons)
      if (dungeons.length < 1) startSearchDungeons();
  }, []);

  return <ShowInfo elements={dungeons} title="Dungeons" />;
};
