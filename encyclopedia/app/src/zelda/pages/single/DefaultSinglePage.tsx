import { DungeonInfo } from "../../types/DungeonInfo";
import { BossInfo, CharacterInfo, GameInfo, GenericInfo, MonsterInfo } from "../../types";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

type Props = {
  elements: undefined | DungeonInfo[] | GameInfo[] | BossInfo[]  | CharacterInfo[] | MonsterInfo[];
};

export const DefaultSinglePage = ({ elements }: Props) => {
  useEffect(() => {
    console.log(elements);
  }, [elements])
  
  return (
    <>
      {elements &&
        elements.map(
          (element: DungeonInfo | GameInfo | BossInfo | CharacterInfo | MonsterInfo, index: number) => (
            <div className="info-game" key={index}>
              <div className="left-side cream">
                <div className="title-game">
                  <h1 className="">{element.name}</h1>
                </div>
              </div>
              <div className="right-side">
                <div className="content-synops">
                  <div className="fix sinopsis">
                    <h2>Content</h2>
                    <hr className="hr-synops" />
                  </div>
                  <Scrollbars className="content-right-game">
                    <div className="d-flex divide">
                      <div className="sub-title">About</div>
                      <div className="content-info">{element.description}</div>
                    </div>
                    <div className="d-flex divide">
                      {"appearancesInfo" in element && (
                        <div className="sub-title">Appearances</div>
                      )}
                      {"appearancesInfo" in element && (
                        <div className="content-info">
                          {element.appearancesInfo.length > 0 && (
                            <div>
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
                        </div>
                      )}
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
          )
        )}
    </>
  );
};
