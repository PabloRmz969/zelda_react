import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useZeldaStore } from "../../hooks";
import { GameInfo } from "../types";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

export const Bullets = () => {
  const { games } = useZeldaStore();
  return (
    <>
      <div className="bullets-games">
        {games.map((game: GameInfo, index: number) => (
          <div
            key={index}
            id={`bull_${index + 1}`}
            data-id={index + 1}
            data-tooltip-id={`my-tooltip-${index}`}
            data-tooltip-content={`${game.name}`}
            data-tooltip-variant="success"
            className={
              index === 0 ? "container-bullet active" : "container-bullet"
            }
            onClick={() => changeBullet(index + 1)}
          >
            <FontAwesomeIcon
              icon={faSquare}
              className={index === 0 ? "bullet active" : "bullet"}
            />
            <Tooltip id={`my-tooltip-${index}`} className="tooltip-names" />
          </div>
        ))}
      </div>
    </>
  );
};
