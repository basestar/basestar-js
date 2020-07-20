
export default function lazyRequire(id : string) : (() => any) {

    let result : any = undefined;
    return () => {
        if(!result) {
            return (result = require(id));
        } else {
            return result;
        }
    }
}
