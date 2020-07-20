import lazyRequire from "./lazyRequire";
import lazy from "./lazy";

type UseImplProps = any;

// Need to do this to break an irreducible import cycle

const UseAny = lazyRequire("../generated-src/use/UseAny");
const UseArray = lazyRequire("../generated-src/use/UseArray");
const UseBinary = lazyRequire("../generated-src/use/UseBinary");
const UseBoolean = lazyRequire("../generated-src/use/UseBoolean");
const UseDate = lazyRequire("../generated-src/use/UseDate");
const UseDateTime = lazyRequire("../generated-src/use/UseDateTime");
const UseInteger = lazyRequire("../generated-src/use/UseInteger");
const UseMap = lazyRequire("../generated-src/use/UseMap");
const UseNamed = lazyRequire("../generated-src/use/UseNamed");
const UseNumber = lazyRequire("../generated-src/use/UseNumber");
const UseSet = lazyRequire("../generated-src/use/UseSet");
const UseString = lazyRequire("../generated-src/use/UseString");

class UseImpl {

    static any = lazy(() => new (UseAny().default)());

    static array = (config: any) => new (UseArray().default)(config);

    static binary = lazy(() => new (UseBinary().default)());

    static boolean = lazy(() => new (UseBoolean().default)());

    static date = lazy(() => new (UseDate().default)());

    static datetime = lazy(() => new (UseDateTime().default)());

    static integer = lazy(() => new (UseInteger().default)());

    static map = (config: any) => new (UseMap().default)(config);

    static named = (config: any) => new (UseMap().default)(config);

    static number = lazy(() => new (UseNumber().default)());

    static set = (config: any) => new (UseSet().default)(config);

    static string = lazy(() => new (UseString().default)());

    constructor(_props?: UseImplProps) {

    }

    static from(props?: UseImplProps) : UseImpl {

        if(!props) {
            throw new Error("Props must be provided");
        }

        const impl = (name: string, config: any) : UseImpl => {
            switch (name) {
                case "any": {
                    return UseImpl.any();
                }
                case "array": {
                    return UseImpl.array({type: config});
                }
                case "binary": {
                    return UseImpl.binary();
                }
                case "boolean": {
                    return UseImpl.boolean();
                }
                case "date": {
                    return UseImpl.date();
                }
                case "datetime": {
                    return UseImpl.datetime();
                }
                case "integer": {
                    return UseImpl.integer();
                }
                case "map": {
                    return UseImpl.map({type: config});
                }
                case "named": {
                    return UseImpl.named({name: config});
                }
                case "number": {
                    return UseImpl.number();
                }
                case "set": {
                    return UseImpl.set({type: config});
                }
                case "string": {
                    return UseImpl.string();
                }
                default: throw Error("Type " + name + " not implemented");
            }
        };

        if(typeof props === "string") {
            return impl(props, {})
        } else {
            const names = Object.getOwnPropertyNames(props);
            if(names.length === 1) {
                const name = names[0];
                return impl(name, props[name]);
            } else {
                throw Error("Type expression should have one key");
            }
        }
    }
}

export {UseImplProps};
export default UseImpl;
