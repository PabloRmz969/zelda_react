import {  useParams } from "react-router-dom";
import { functionsJq } from "../../../helpers";
import { useEffect } from "react";
import { useDungeonsStore } from "../../../hooks/useDungeonsStore";
import { DefaultSinglePage } from "./DefaultSinglePage";

export const SingleDungeonPage = () => {
  const { onPageLoad } = functionsJq();
  const { id } = useParams();
  const { defDungeon, clearDefDungeon, getDungeonsById } = useDungeonsStore();
  useEffect(() => {
    clearDefDungeon();
    if (id) {
      getDungeonsById(id);
    }
  }, []);
  useEffect(() => {
    if (id) {
      if (id.length > 0) {
        if (document.readyState === "complete") {
          onPageLoad();
        } else {
          window.addEventListener("load", onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener("load", onPageLoad);
        }
      }
    }
  }, [id]);
  return (
    <>
      <div className="shape-in animate__animated"></div>
      <DefaultSinglePage elements={defDungeon} />
    </>
  );
};
