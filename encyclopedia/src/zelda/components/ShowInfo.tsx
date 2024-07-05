import { Scrollbar } from "react-scrollbars-custom";
import { BossInfo } from "../types";
import { DungeonInfo } from "../types/DungeonInfo";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { functionsJq } from "../../helpers";


type Props = {
  elements: BossInfo[] | DungeonInfo[];
  title: string;
};

export const ShowInfo = ({ elements, title }: Props) => {
  const {onPageLoad} = functionsJq();

  useEffect(() => {
    elements.map(element => console.log(typeof element))
  }, []);

  useEffect(() => {
    if (elements) {
      console.log(elements)
      if (elements.length > 0) {
        if (document.readyState === "complete") {
          onPageLoad();
        } else {
          window.addEventListener("load", onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener("load", onPageLoad);
        }
      }
    }
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
          <div className="contet-synops">
            <div className="fix sinopsis">
              <h2>Conent</h2>
              <hr className="hr-synops" />
            </div>
            <Scrollbar className="content-right-game">
              {elements.map(
                (element, index: number) => (
                  <div className="d-flex divide" key={`el-${index}`}>
                    <div className="sub-title">{element.name}</div>
                    <div className="content-info">
                        {element.description}<br></br>
                        {
                          ('dungeons' in element) && element.dungeons.map((dungeon) => (
                            
                            <Link to={`/`} > aquí</Link>
                          ))
                        }
                    </div>
                  </div>
                )
              )}
            </Scrollbar>
          </div>
        </div>
      </div>
    </>
  );
};
