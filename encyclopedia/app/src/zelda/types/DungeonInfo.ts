type GenericInfo = {
  id: string,
  name: string
}
export type DungeonInfo = {
  appearances: string[];
  name: string;
  description: string;
  id: string;
  appearancesInfo: GenericInfo[]
};
