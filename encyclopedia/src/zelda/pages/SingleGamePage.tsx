import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useZeldaStore } from "../../hooks";
import { BossInfo, CharacterInfo, GameInfo, MonsterInfo } from "../types";
import { useBossesStore } from "../../hooks/useBossesStore";
import { useDungeonsStore } from "../../hooks/useDungeonsStore";
import { DungeonInfo } from "../types/DungeonInfo";
import { Scrollbar } from "react-scrollbars-custom";

export const SingleGamePage = () => {
  const {
    clearGamesA,
    getGame,
    getMonstersById,
    getCharactersById,
    games,
    characters,
    monsters,
  } = useZeldaStore();

  const { bosses, getBossesById } = useBossesStore();
  const { dungeons, getDungeonsById } = useDungeonsStore();

  const { id } = useParams();
  useEffect(() => {
    clearGamesA();
    if (id) {
      getGame(id);
      getCharactersById(id);
      getMonstersById(id);
      getBossesById(id);
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

  // useEffect(() => {
  //   console.log(games)
  // },[games])

  return (
    <>
      <div className="shape-in animate__animated"></div>
      {games.map((game: GameInfo, index: number) => (
        <div className="info-game" key={index}>
          <div className="left-side cream">
            <div className="title-game">
              <h1 className="">{game.name}</h1>
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
                  <div className="content-info">{game.description}</div>
                </div>
                <div className="d-flex divide">
                  <div className="sub-title">Released date</div>
                  <div className="content-info">{game.released_date}</div>
                </div>
                {characters.length > 0 && (
                  <div className="d-flex divide">
                    <div className="sub-title">Characters</div>
                    <div className="content-info">
                      <ul>
                        {characters.map((chr: CharacterInfo, index: number) => (
                          <li key={`ch-${index}`}>{chr.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {monsters.length > 0 && (
                  <div className="d-flex divide">
                    <div className="sub-title">Monsters</div>
                    <div className="content-info">
                      <ul>
                        {monsters.map((mrn: MonsterInfo, index: number) => (
                          <li key={`mrn-${index}`}>{mrn.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {bosses.length > 0 && (
                  <div className="d-flex divide">
                    <div className="sub-title">Bosses</div>
                    <div className="content-info">
                      <ul>
                        {bosses.map((boss: BossInfo, index: number) => (
                          <li key={`boss-${index}`}>{boss.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {dungeons.length > 0 && (
                  <div className="d-flex divide">
                    <div className="sub-title">Dungeons</div>
                    <div className="content-info">
                      <ul>
                        {dungeons.map((dungeon: DungeonInfo, index: number) => (
                          <li key={`dungeon-${index}`}>{dungeon.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                <div className="text-center mt-5">
                  <iframe
                    width="560"
                    height="315"
                    src={game.video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </Scrollbar>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
