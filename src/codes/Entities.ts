export type Identifier = string;
export type MarkDown = string;
export type ImageURL = string;
export type Tag = string;

export interface Character {
    id: Identifier,
    name: string,
    kana: string,
    nick_name?: string,
    img?: ImageURL,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Team {
    id: Identifier,
    name: string,
    kana: string,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Bike {
    id: Identifier,
    name: string,
    kana?: string,
    nick_name?: string,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Organization {
    id: Identifier,
    name: string,
    kana: string,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}


interface FamousQuote {
    id: Identifier,
    sentence: string,
    description?: MarkDown,
    said_by: Identifier[],
    tags?: Tag[],
}

interface Terminology {
    id: Identifier,
    word: string,
    kana: string,
    description?: MarkDown,
    tags?: Tag[],
}