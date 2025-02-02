export interface Card {
    name?: string;
    id?: string;
    rarity?: string;
    fileName?: string;
    code?: string;
};


export const cardRarity: string[] = [
    "COMMON",
    "UNCOMMON",
    "RARE",
    "MYTHIC"
];

export const MythicList: string[] = [
    "big-75-hostile-investigator.jpg"
];

export const RareList: string[] = [
    "c15-35-centaur-vinecrasher.jpg"
];

export const UncommonList: string[] = [
    "ddf-52-juggernaut.jpg"
];

export const CommonList: string[] = [
    "dmr-23-renewed-faith.jpg"
];