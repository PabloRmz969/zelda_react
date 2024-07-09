import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useZeldaStore } from "../../hooks";
import { GameInfo } from "../types";
import { useBossesStore } from "../../hooks/useBossesStore";
import { useDungeonsStore } from "../../hooks/useDungeonsStore";
import { Scrollbar } from "react-scrollbars-custom";
import { ListInfo } from "../components/ListInfo";
import { functionsJq } from "../../helpers";

export const SingleGamePage = () => {
  const {onPageLoad} = functionsJq();
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
  const { dungeons, getDungeonsByGame } = useDungeonsStore();

  const { id } = useParams();
  useEffect(() => {
    clearGamesA();
    if (id) {
      getGame(id);
      getCharactersById(id);
      getMonstersById(id);
      getBossesById(id);
      getDungeonsByGame(id);
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
                <ListInfo defaultItem={characters} title="Characters" />
                <ListInfo defaultItem={monsters} title="Monsters" />
                <ListInfo defaultItem={bosses} title="Bosses" />
                <ListInfo defaultItem={dungeons} title="Dungeons" />
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
