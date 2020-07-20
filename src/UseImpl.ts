import lazyRequire from "./lazyRequire";

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

    constructor(_props?: UseImplProps) {

    }

    static from(props?: UseImplProps) : UseImpl {

        if(!props) {
            throw new Error("Props must be provided");
        }

        const impl = (name: string, config: any) : UseImpl => {
            switch (name) {
                case "any": {
                    return new (UseAny().default)();
                }
                case "array": {
                    return new (UseArray().default)({
                        type: config
                    });
                }
                case "binary": {
                    return new (UseBinary().default)();
                }
                case "boolean": {
                    return new (UseBoolean().default)();
                }
                case "date": {
                    return new (UseDate().default)();
                }
                case "datetime": {
                    return new (UseDateTime().default)();
                }
                case "integer": {
                    return new (UseInteger().default)();
                }
                case "map": {
                    return new (UseMap().default)({
                        type: config
                    });
                }
                case "named": {
                    return new (UseNamed().default)({
                        name: config
                    });
                }
                case "number": {
                    return new (UseNumber().default)();
                }
                case "set": {
                    return new (UseSet().default)()({
                        type: config
                    });
                }
                case "string": {
                    return new (UseString().default)();
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
