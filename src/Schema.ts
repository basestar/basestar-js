import BaseSchema, { SchemaProps as BaseSchemaProps } from "../generated-src/Schema";

import lazy from "./util/lazy";
const lazyRequire = (id : string) => lazy(() => require(id));

// Need to do this to break an irreducible import cycle

const EnumSchema = lazyRequire("../generated-src/EnumSchema");
const ObjectSchema = lazyRequire("../generated-src/ObjectSchema");
const StructSchema = lazyRequire("../generated-src/StructSchema");
const ViewSchema = lazyRequire("../generated-src/ViewSchema");

interface SchemaProps extends BaseSchemaProps {

    readonly type?: string;
}

abstract class Schema extends BaseSchema {

    readonly type?: string;

    static enum = (props: any) => new (EnumSchema().default)(props);

    static object = (props: any) => new (ObjectSchema().default)(props);

    static struct = (props: any) => new (StructSchema().default)(props);

    static view = (props: any) => new (ViewSchema().default)(props);

    protected constructor(props: SchemaProps) {

        super(props);
    }

    static from(props: any) : Schema {

        if(!props) {
            throw new Error("Props must be provided");
        }
        const {type} = props;
        switch (type) {
            case "enum": {
                return Schema.enum(props);
            }
            case "struct": {
                return Schema.struct(props);
            }
            case "view": {
                return Schema.view(props);
            }
            case null:
            case undefined:
            case "object": {
                return Schema.object(props);
            }
            default:
                throw new Error("Schema type " + type + " not implemented");
        }
    }
}

export {SchemaProps};
export default Schema;
