import { useEffect, useState } from "react";
import { GameInfo } from "../types";
import { Link } from "react-router-dom";

const colors_top_hex = ["#c3f3bc", "#fae906", "#fdffe0", "#f5941b", "#c4acb4"];
const colors_left_hex = ["#30646f", "#6b5e31", "#0f68b8", "#727272", "#82a0a4"];
const colors_right_hex = [
  "#e24c70",
  "#613c4e",
  "#a5a202",
  "#721229",
  "#c2d849",
];

type Props = {
  gamePerPage: GameInfo[];
  noPage: number;
};

export const Fronts = ({ gamePerPage, noPage }: Props) => {
  const [plus, setPlus] = useState(0);

  useEffect(() => {
    setPlus((noPage - 1) * 8);
  }, [noPage]);
  return (
    <>
      {gamePerPage.map((game: GameInfo, index: number) => (
        <div key={index}>
          <div className={`d-flex fronts-imgs _${index}`} >
            <div className="colors">
              <div
                className={index === 0 ? "colors-top active" : "colors-top"}
                style={{
                  backgroundColor:
                    colors_top_hex[
                      Math.floor(Math.random() * colors_top_hex.length)
                    ],
                  willChange: "transform",
                  transform:
                    index === 0
                      ? "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                      : "translate3d(50vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              ></div>
              <div className="d-flex">
                <div
                  className="colors-left"
                  style={{
                    backgroundColor:
                      colors_left_hex[
                        Math.floor(Math.random() * colors_left_hex.length)
                      ],
                    willChange: "transform",
                    transform:
                      index === 0
                        ? "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                        : "translate3d(0px, -50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                ></div>
                <div
                  className="colors-right"
                  style={{
                    backgroundColor:
                      colors_right_hex[
                        Math.floor(Math.random() * colors_right_hex.length)
                      ],
                    willChange: "transform",
                    transform:
                      index === 0
                        ? "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                        : "translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                  }}
                ></div>
              </div>
            </div>
            <div
              id={`img-${index + 1}`}
              data-id={plus + index}
              className={
                index == 0 ? "front-page-img active" : "front-page-img"
              }
              data-pos={index + 1}
              style={{
                willChange: "transform",
                transform:
                  index === 0
                    ? "translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                    : "translate3d(0px, 100vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="image-item">
                <Link to={`/game/${game.id}`} className="alink">
                  <img src={game.image} alt={game.name} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
