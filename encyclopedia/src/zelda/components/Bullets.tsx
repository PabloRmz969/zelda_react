import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useZeldaStore } from "../../hooks";
import { GameInfo } from "../types";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
import { functionsJq } from "../../helpers";
import { useEffect, useState } from "react";

type Props = {
  gamePerPage: GameInfo[];
  noPage: number;
};

export const Bullets = ({ gamePerPage, noPage }: Props) => {
  const { games } = useZeldaStore();
  const { changeBullet } = functionsJq();
  const [plus, setPlus] = useState(0);
  

  useEffect(() => {
    setPlus((noPage - 1) * 8);
  }, [noPage]);

  return (
    <>
      <div className="bullets-games">
        {gamePerPage.map((game: GameInfo, index: number) => (
          <div
            key={`bull_${plus + index}`}
            id={`bull_${plus + index + 1}`}
            data-id={plus + index + 1}
            data-tooltip-id={`my-tooltip-${index}`}
            data-tooltip-content={`${game.name}`}
            data-tooltip-variant="success"
            className={
              index === 0 ? "container-bullet active" : "container-bullet"
            }
            onClickCapture={()=>changeBullet(plus + index + 1)}
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
