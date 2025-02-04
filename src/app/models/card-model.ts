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

export const MythicList: Card[] = [
    {
        name: "Hostile Investigator",
        id: undefined,
        rarity: "MYTHIC",
        fileName:  "big-75-hostile-investigator.jpg" 
    }
];

export const RareList: Card[] = [
    {
        name: "Centaur Vinecrasher",
        id: undefined,
        rarity: "RARE",
        fileName: "c15-35-centaur-vinecrasher.jpg"
    }
];

export const UncommonList: Card[] = [
    {
        name: "Juggernaut",
        id: undefined,
        rarity: "UNCOMMON",
        fileName:  "ddf-52-juggernaut.jpg"
    }
];

export const CommonList: Card[] = [
    {
        name: "Renewed Faith",
        id: undefined,
        rarity: "COMMON",
        fileName:  "dmr-23-renewed-faith.jpg"
    }
];