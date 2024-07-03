import { BossInfo, CharacterInfo, MonsterInfo } from "../types";
import { DungeonInfo } from "../types/DungeonInfo";

export const ListInfo = (
  characters: CharacterInfo[] | MonsterInfo[] | BossInfo[] | DungeonInfo[],
  title : string
) => {
  return (
    <>
      {characters.length > 0 && (
        <div className="d-flex divide">
          <div className="sub-title">{title}</div>
          <div className="content-info">
            <ul>
              {characters.map(
                (
                  chr: CharacterInfo | MonsterInfo | BossInfo | DungeonInfo,
                  index: number
                ) => (
                  <li key={`ch-${index}`}>{chr.name}</li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
