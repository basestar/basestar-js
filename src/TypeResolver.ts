import Schema from "../generated-src/Schema";
import Use from "../generated-src/use/Use";
import UseAny from "../generated-src/use/UseAny";
import UseArray from "../generated-src/use/UseArray";
import UseInteger from "../generated-src/use/UseInteger";
import UseBinary from "../generated-src/use/UseBinary";
import UseDate from "../generated-src/use/UseDate";
import UseDateTime from "../generated-src/use/UseDateTime";
import UseMap from "../generated-src/use/UseMap";
import UseNamed from "../generated-src/use/UseNamed";
import UseNumber from "../generated-src/use/UseNumber";
import UseSet from "../generated-src/use/UseSet";
import UseString from "../generated-src/use/UseString";

type Namespace = {[key: string]: Schema};

interface TypeResolverProps {

    readonly namespace: Namespace;
}

class TypeResolver {

    readonly namespace:  Namespace;

    constructor(props : TypeResolverProps) {

        const {namespace} = props;

        this.namespace = namespace;
    }

    type(config: any) : Use {

        const impl = (name: string, config: any) : Use => {
            switch (name) {
                case "any": return new UseAny();
                case "array": return new UseArray({
                    type: this.type(config)
                });
                case "binary": return new UseBinary();
                case "date": return new UseDate();
                case "datetime": return new UseDateTime();
                case "integer": return new UseInteger();
                case "map": return new UseMap({
                    type: this.type(config)
                });
                case "named": return new UseNamed({
                    name: config
                });
                case "number": return new UseNumber();
                case "set": return new UseSet({
                    type: this.type(config)
                });
                case "string": return new UseString();
                default: throw Error("Type " + name + " not implemented");
            }
        };

        if(typeof config === "string") {
            return impl(config, {})
        } else {
            const names = Object.getOwnPropertyNames(config);
            if(names.length === 1) {
                const name = names[0];
                return impl(name, config[name]);
            } else {
                throw Error("Type expression should have one key");
            }
        }
    }
}

export default TypeResolver;
