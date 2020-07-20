
type UseImplProps = any;

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
                    const UseAny = require("../generated-src/use/UseAny").default;
                    return new UseAny();
                }
                case "array": {
                    const UseArray = require("../generated-src/use/UseArray").default;
                    return new UseArray({
                        type: config
                    });
                }
                case "binary": {
                    const UseBinary = require("../generated-src/use/UseBinary").default;
                    return new UseBinary();
                }
                case "date": {
                    const UseDate = require("../generated-src/use/UseDate").default;
                    return new UseDate();
                }
                case "datetime": {
                    const UseDateTime = require("../generated-src/use/UseDateTime").default;
                    return new UseDateTime();
                }
                case "integer": {
                    const UseInteger = require("../generated-src/use/UseInteger").default;
                    return new UseInteger();
                }
                case "map": {
                    const UseMap = require("../generated-src/use/UseMap").default;
                    return new UseMap({
                        type: config
                    });
                }
                case "named": {
                    const UseNamed = require("../generated-src/use/UseNamed").default;
                    return new UseNamed({
                        name: config
                    });
                }
                case "number": {
                    const UseNumber = require("../generated-src/use/UseNumber").default;
                    return new UseNumber();
                }
                case "set": {
                    const UseSet = require("../generated-src/use/UseSet").default;
                    return new UseSet({
                        type: config
                    });
                }
                case "string": {
                    const UseString = require("../generated-src/use/UseString").default;
                    return new UseString();
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
