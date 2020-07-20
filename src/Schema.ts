import BaseSchema, { SchemaProps as BaseSchemaProps } from "../generated-src/Schema";

import lazyRequire from "./lazyRequire";

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

export {SchemaProps};
export default Schema;