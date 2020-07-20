
export default function lazy(fn : (() => any)) : (() => any) {

    let result : any = undefined;
    return () => {
        if(!result) {
            return (result = fn());
        } else {
            return result;
        }
    }
}
