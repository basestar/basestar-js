import lazy from "./lazy";

export default function lazyRequire(id : string) : (() => any) {

    return lazy(() => require(id));
}
