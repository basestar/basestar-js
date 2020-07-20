type SchemaImplProps = any;

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
                const EnumSchema = require("../generated-src/EnumSchema");
                return new (EnumSchema.default)(props);
            }
            case "object": {
                const ObjectSchema = require("../generated-src/ObjectSchema");
                return new (ObjectSchema.default)(props);
            }
            case "struct": {
                const StructSchema = require("../generated-src/StructSchema");
                return new (StructSchema.default)(props);
            }
            case "view": {
                const ViewSchema = require("../generated-src/ViewSchema");
                return new (ViewSchema.default)(props);
            }
            default:
                throw new Error("Schema type " + type + " not implemented");
        }
    }
}

export {SchemaImplProps};
export default SchemaImpl;