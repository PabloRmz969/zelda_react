import { useEffect } from "react";
import { useDungeonsStore } from "../../hooks/useDungeonsStore"
import { ShowInfo } from "../components";

export const DungeonsPage = () => {
  const {dungeons, clearDungeons, startSearchDungeons} = useDungeonsStore();

  useEffect(() => {
    if(dungeons.length < 1) startSearchDungeons();
    else {
      clearDungeons();
      startSearchDungeons();
    }
  }, [])
  
  return <ShowInfo elements={dungeons} title="Dungeons" />;
}
