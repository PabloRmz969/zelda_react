import { useEffect, useState } from "react";
import { useZeldaStore } from "../../hooks";
import { Game } from "../components/Game";

export const GamesPage = () => {
  const { startSearchGames, games } = useZeldaStore();
  const [indx, setIndx]: [number, Function] = useState(0);

  useEffect(() => {
    startSearchGames();
  }, []);

  useEffect(() => {
    console.log(indx);
  }, [indx]);

  return (
    <>
      <div className="shape-in animate__animated animate__slideOutLeft"></div>
      <div className="container">
        {games.length > 0 && (
          <div className="d-flex row-games">
            {games.map((game) => (
              <Game key={game.id} {...game} />
            ))}
            
          </div>
        )}
      </div>
    </>
  );
};
