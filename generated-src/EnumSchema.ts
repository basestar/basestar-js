import SchemaImpl, {SchemaImplProps} from "./../src/SchemaImpl";

interface EnumSchemaProps extends SchemaImplProps {

    readonly values? : string[];

}

class EnumSchema extends SchemaImpl {

    public values? : string[];

    constructor(props?: EnumSchemaProps) {

        super(props);
        if(props) {
            this.values = (props.values || []).map(v0 => v0);
        }
    }

    static from(props?: EnumSchemaProps) : EnumSchema {

        return new EnumSchema(props);
    }
}

export {EnumSchemaProps};
export default EnumSchema;
