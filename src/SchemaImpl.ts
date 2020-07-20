import lazyRequire from "./lazyRequire";

type SchemaImplProps = any;

const EnumSchema = lazyRequire("../generated-src/EnumSchema");
const ObjectSchema = lazyRequire("../generated-src/ObjectSchema");
const StructSchema = lazyRequire("../generated-src/StructSchema");
const ViewSchema = lazyRequire("../generated-src/ViewSchema");

abstract class SchemaImpl {

    readonly type?: string;

    protected constructor(props?: SchemaImplProps) {

        this.type = props?.type;
    }

    static from(props?: SchemaImplProps) : SchemaImpl {

        if(!props) {
            throw new Error("Props must be provided");
        }
        const {type} = props;
        switch (type) {
            case "enum": {
                return new (EnumSchema().default)(props);
            }
            case "object": {
                return new (ObjectSchema().default)(props);
            }
            case "struct": {
                return new (StructSchema().default)(props);
            }
            case "view": {
                return new (ViewSchema().default)(props);
            }
            default:
                throw new Error("Schema type " + type + " not implemented");
        }
    }
}

export {SchemaImplProps};
export default SchemaImpl;