import { Scrollbar } from "react-scrollbars-custom";
import { BossInfo, CharacterInfo, GenericInfo, MonsterInfo } from "../types";
import { DungeonInfo } from "../types/DungeonInfo";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { functionsJq } from "../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDungeon, faGamepad } from "@fortawesome/free-solid-svg-icons";

type Props = {
  elements: undefined | BossInfo[] | DungeonInfo[] | CharacterInfo[] | MonsterInfo[];
  title: string;
};

export const ShowInfo = ({ elements, title }: Props) => {
  const { onPageLoad } = functionsJq();



  useEffect(() => {
    if (elements) {
      if (elements.length > 1) {
        if (document.readyState === "complete") {
          onPageLoad();
        } else {
          window.addEventListener("load", onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener("load", onPageLoad);
        }
      }
    }
    console.log(elements)
  }, [elements]);

  return (
    <>
      <div className="shape-in animate__animated"></div>

      <div className="info-game">
        <div className="left-side cream">
          <div className="title-game">
            <h1 className="">{title}</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="content-synops">
            <div className="fix sinopsis">
              <h2>Content</h2>
              <hr className="hr-synops" />
            </div>
            <Scrollbar className="content-right-game">
              {elements &&
                elements.map((element, index: number) => (
                  <div className="d-flex divide" key={`el-${index}`}>
                    <div className="sub-title">{element.name}</div>
                    <div className="content-info">
                      {element.description}
                      {("dungeonsInfo" in element ||
                        "appearancesInfo" in element) && (
                        <div className="d-flex dungeonsAppearances">
                          {"appearancesInfo" in element &&
                            element.appearancesInfo.length > 0 && (
                              <div
                                className={
                                  "dungeonsInfo" in element &&
                                  element.dungeonsInfo.length > 0
                                    ? "w-50"
                                    : "w-100"
                                }
                              >
                                <h4>Appearances</h4>
                                <ul className="custom-list">
                                  {element.appearancesInfo.map(
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
                          {"dungeonsInfo" in element &&
                            element.dungeonsInfo.length > 0 && (
                              <div
                                className={
                                  "appearancesInfo" in element &&
                                  element.appearancesInfo.length > 0
                                    ? "w-50"
                                    : "w-100"
                                }
                              >
                                <h4>Dungeons</h4>
                                <ul className="custom-list">
                                  {element.dungeonsInfo.map(
                                    (dungeon: GenericInfo) => (
                                      <li
                                        key={`link_dunge_${dungeon.name.replace(' ','')}_${index}`}
                                      >
                                        <FontAwesomeIcon
                                          className="icon-list"
                                          icon={faDungeon}
                                        />
                                        <Link
                                          to={`/dungeon/${dungeon.id}`}
                                          className="alink hover"
                                        >
                                          {dungeon.name}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </Scrollbar>
          </div>
        </div>
      </div>
    </>
  );
};
