import { useParams } from "react-router-dom";
import { functionsJq } from "../../../helpers";
import { useEffect } from "react";
import { DefaultSinglePage } from "./DefaultSinglePage";
import { useBossesStore } from "../../../hooks";

export const SingleBossPage = () => {
  const { onPageLoad } = functionsJq();
  const { id } = useParams();
  const { bosses, clearBosses, startSearchBoss } = useBossesStore();
  useEffect(() => {
    clearBosses();
    if (id) {
      startSearchBoss(id);
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
      <DefaultSinglePage elements={bosses} />
    </>
  );
};

