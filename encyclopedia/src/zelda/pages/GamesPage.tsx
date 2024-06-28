import { useEffect } from "react";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import { Fronts } from "../components";
import { Titles } from "../components/Titles";
import { Bullets } from "../components/Bullets";
import { useZeldaStore } from "../../hooks";



export const GamesPage = () => {
  const { clearGamesA, startSearchGames, games } = useZeldaStore();
  useEffect(() => {
    clearGamesA();
    startSearchGames();
    document.body.classList.add("games-scroll");
  }, []);

  useEffect(() => {
    if(games.length > 0){
      if (document.readyState === "complete") {
        onPageLoad();
      } else {
        window.addEventListener("load", onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener("load", onPageLoad);
      }
    }
  }, [games])
  

  return (
    <ReactScrollWheelHandler
      style={{ height: "100vh" }}
      upHandler={() => {
        prev();
      }}
      downHandler={() => {
        next();
      }}
    >
      <div className="shape-in animate__animated"></div>
      <div className="container">
        <div className="container-scroll">
          <Fronts />
          <Titles />
          <Bullets />
        </div>
      </div>
    </ReactScrollWheelHandler>
  );
};
