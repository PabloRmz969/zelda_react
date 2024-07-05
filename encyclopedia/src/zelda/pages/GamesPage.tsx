import { useEffect } from "react";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import { useZeldaStore } from "../../hooks";
import { Bullets, Fronts, Titles } from "../components";
import { functionsJq } from "../../helpers";



export const GamesPage = () => {
  const { clearGamesA, startSearchGames, games } = useZeldaStore();
  const {next, prev, onPageLoad} = functionsJq();

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
