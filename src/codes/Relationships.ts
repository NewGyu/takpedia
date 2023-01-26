interface BikeOwnedBy {
    bike_id: Identifier,
    owner_ids: Identifier[],
}

interface TeamHasMembers {
    team_id: Identifier,
    member_ids: Identifier[],
}

interface SaidThat {
    char_id: Identifier,
    quote_ids: Identifier[],
}