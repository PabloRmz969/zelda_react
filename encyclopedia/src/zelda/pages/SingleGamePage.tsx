import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useZeldaStore } from "../../hooks";
import { GameInfo } from "../types";

export const SingleGamePage = () => {
  const { clearGamesA, getGame, games } = useZeldaStore();
  const { id } = useParams();
  useEffect(() => {
    clearGamesA();
    id && getGame(id);
    console.log(games);
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
      {games.map((game: GameInfo, index: number) => (
        <div className="info-game">
          <div className="left-side cream">
            <div className="title-game" key={index}>
              <h1 className="">{game.name}</h1>
            </div>
          </div>
          <div className="right-side">
            <div className="contet-synops">
              <div className="fix sinopsis">
                <h2>Conent</h2>
                <hr className="hr-synops" />
              </div>
              <div className="d-flex divide">
                <div className="sub-title">About</div>
                <div className="content-info">{game.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
