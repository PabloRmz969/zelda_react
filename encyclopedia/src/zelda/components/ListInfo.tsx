import { Link } from "react-router-dom";
import { BossInfo, CharacterInfo, MonsterInfo } from "../types";
import { DungeonInfo } from "../types/DungeonInfo";
type Props = {
  defaultItem:
    | CharacterInfo[]
    | MonsterInfo[]
    | BossInfo[]
    | DungeonInfo[]
    | undefined;
  title: string;
};
export const ListInfo = ({ defaultItem, title }: Props) => {
  return (
    <>
      {defaultItem && defaultItem.length > 0 && (
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
                    <li key={`dun-${index}`}>
                      <Link className="alink hover" to={`/dungeon/${chr.id}`}>
                        {chr.name}
                      </Link>
                    </li>
                  ) : title === "Bosses" ? (
                    <li key={`boss-${index}`}>
                      <Link className="alink hover" to={`/boss/${chr.id}`}>
                        {chr.name}
                      </Link>
                    </li>
                  ) : title === "Characters" ? (
                    <li key={`char-${index}`}>
                      <Link className="alink hover" to={`/character/${chr.id}`}>
                        {chr.name}
                      </Link>
                    </li>
                  ):title === "Monsters" ? (
                    <li key={`monster-${index}`}>
                      <Link className="alink hover" to={`/monster/${chr.id}`}>
                        {chr.name}
                      </Link>
                    </li>
                  ): (
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
