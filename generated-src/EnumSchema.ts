import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./Schema";

interface EnumSchemaProps extends InstanceSchemaProps {

    readonly values? : string[];

}

class EnumSchema extends InstanceSchema {

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
