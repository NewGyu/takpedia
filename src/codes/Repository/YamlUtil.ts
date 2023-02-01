import { readFileSync } from "fs";
import { load } from "js-yaml";
import path from "path";
import { fileURLToPath } from "url";
export function xxx(moduleUrl: string) {
    return path.dirname(moduleUrl);
}

export function loadYAML<T>(filepath: string): T {
    //    const filepath = fileURLToPath(path.join(path.dirname(moduleUrl), fileName));
    return load(readFileSync(filepath, "utf-8")) as T;
}