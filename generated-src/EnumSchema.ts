import Schema, {SchemaProps} from "./../src/Schema";

interface EnumSchemaProps extends SchemaProps {

    readonly values? : string[];

}

class EnumSchema extends Schema {

    public values? : string[];

    constructor(props: EnumSchemaProps) {

        super(props);
        if(props) {
            this.values = (props?.values != null) ? (props.values || []).map(v0 => v0) : undefined;
        }
    }

    static from(props: EnumSchemaProps) : EnumSchema {

        return new EnumSchema(props);
    }
}

export {EnumSchemaProps};
export default EnumSchema;
