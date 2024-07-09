import { Link } from "react-router-dom";
import { BossInfo, CharacterInfo, MonsterInfo } from "../types";
import { DungeonInfo } from "../types/DungeonInfo";
type Props = {
  defaultItem: CharacterInfo[] | MonsterInfo[] | BossInfo[] | DungeonInfo[];
  title: string;
};
export const ListInfo = ({ defaultItem, title }: Props) => {
  return (
    <>
      {defaultItem.length > 0 && (
        <div className="d-flex divide">
          <div className="sub-title">{title}</div>
          <div className="content-info">
            <ul>
              {defaultItem.map(
                (
                  chr: CharacterInfo | MonsterInfo | BossInfo | DungeonInfo,
                  index: number
                ) =>
                  title === "Dungeons" ? (
                    <li key={`ch-${index}`}>
                      <Link className="alink hover" to={`/dungeon/${chr.id}`}>{chr.name}</Link>
                    </li>
                  ) : (
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
