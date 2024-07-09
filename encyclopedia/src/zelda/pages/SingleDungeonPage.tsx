import { Link, useParams } from "react-router-dom";
import { functionsJq } from "../../helpers";
import { useEffect } from "react";
import { useDungeonsStore } from "../../hooks/useDungeonsStore";
import { DungeonInfo } from "../types/DungeonInfo";
import { Scrollbar } from "react-scrollbars-custom";
import { GenericInfo } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

export const SingleDungeonPage = () => {
  const { onPageLoad } = functionsJq();
  const { id } = useParams();
  const { dungeons, clearDungeons, getDungeonsById } = useDungeonsStore();
  useEffect(() => {
    clearDungeons();
    if (id) {
      getDungeonsById(id);
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
      {dungeons.map((dungeon: DungeonInfo, index: number) => (
        <div className="info-game" key={index}>
          <div className="left-side cream">
            <div className="title-game">
              <h1 className="">{dungeon.name}</h1>
            </div>
          </div>
          <div className="right-side">
            <div className="contet-synops">
              <div className="fix sinopsis">
                <h2>Conent</h2>
                <hr className="hr-synops" />
              </div>
              <Scrollbar className="content-right-game">
                <div className="d-flex divide">
                  <div className="sub-title">About</div>
                  <div className="content-info">{dungeon.description}</div>
                </div>
                <div className="d-flex divide">
                  <div className="sub-title">Appearances</div>
                  <div className="content-info">
                    {"appearancesInfo" in dungeon &&
                      dungeon.appearancesInfo.length > 0 && (
                        <div>
                          <ul className="custom-list">
                            {dungeon.appearancesInfo.map(
                              (game: GenericInfo, index: number) => (
                                <li key={`link_app${index}`}>
                                  <FontAwesomeIcon
                                    className="icon-list"
                                    icon={faGamepad}
                                  />
                                  <Link
                                    to={`/game/${game.id}`}
                                    className="alink hover"
                                  >
                                    {game.name}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>
              </Scrollbar>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
