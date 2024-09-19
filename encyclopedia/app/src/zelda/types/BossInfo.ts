type GenericInfo = {
    id: string,
    name: string
}
export type BossInfo = {
    appearances: string[],
    dungeons: string[],
    name: string,
    description: string,
    id: string,
    appearancesInfo: GenericInfo[],
    dungeonsInfo: GenericInfo[]
}