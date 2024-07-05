import { Link } from "react-router-dom";
import { GameInfo } from "../types";

type Props = {
  gamePerPage: GameInfo[];
};
export const Titles = ({ gamePerPage }: Props) => {
  return (
    <div className="content-titles">
      <div className="top hidden"></div>
      <div className="center-titles"></div>
      {gamePerPage.map((game: GameInfo, index: number) => (
        <div
          key={index}
          className={`titles-text  _${index}`}
          style={{
            willChange: "transform",
            transform:
              index === 0
                ? "translate3d(0px, 42vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                : "translate3d(0px, 110vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <Link to={`/game/${game.id}`} className="alink">
            <p className="text-botw animate__animated">{game.name}</p>
          </Link>
        </div>
      ))}
      <div className="bottom hidden"></div>
    </div>
  );
};
