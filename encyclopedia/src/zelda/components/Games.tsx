import { useEffect } from "react";
import { useZeldaStore } from "../../hooks";
import { GameInfo } from "../types";

const colors_top_hex = ["#c3f3bc", "#fae906", "#fdffe0", "#f5941b", "#c4acb4"];
const colors_left_hex = ["#30646f", "#6b5e31", "#0f68b8", "#727272", "#82a0a4"];
const colors_right_hex = [
  "#e24c70",
  "#613c4e",
  "#a5a202",
  "#721229",
  "#c2d849",
];

export const Games = () => {
  const { startSearchGames, games } = useZeldaStore();

  useEffect(() => {
    startSearchGames();
    document.body.classList.add("games-scroll");
  }, []);
  useEffect(() => {
    console.log(games);
  }, [games]);

  return (
    <>
      {games.map((game: GameInfo, index: number) => (
        <div key={index}>
          <div className={`d-flex fronts-imgs _${index}`}>
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
                <img src={game.image} alt={game.name} />
              </div>
            </div>
          </div>
          <div className={`content-titles _${index}`}>
            <div
              className="titles-content"
              style={{
                willChange: "transform",
                transform:
                  index === 0
                    ? "translate3d(0px, 50vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                    : "translate3d(0px, 100vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <p>{game.name}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
