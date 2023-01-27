type Identifier = String;
type MarkDown = String;
type ImageURL = String;
type Tag = String;


interface Character {
    id: Identifier,
    name: String,
    kana: String,
    nick_name?: String,
    img?: ImageURL,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Team {
    id: Identifier,
    name: String,
    kana: String,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Bike {
    id: Identifier,
    name: String,
    kana?: String,
    nick_name?: String,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}

interface Organization {
    id: Identifier,
    name: String,
    kana: String,
    summary: MarkDown,
    description?: MarkDown,
    tags?: Tag[],
}


interface FamousQuote {
    id: Identifier,
    sentence: String,
    description?: MarkDown,
    said_by: Identifier[],
    tags?: Tag[],
}

interface Terminology {
    id: Identifier,
    word: String,
    kana: String,
    description?: MarkDown,
    tags?: Tag[],
}