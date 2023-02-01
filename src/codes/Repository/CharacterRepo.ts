import type { Character } from "../Entities";
import { loadYAML } from "./YamlUtil";

export function listAll(): Character[] {
    return loadYAML<Character[]>("data/Character.yaml");
}