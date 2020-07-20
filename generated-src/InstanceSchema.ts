import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./Schema";

interface InstanceSchemaProps extends SchemaProps {

    readonly properties? : {[key: string]: PropertyProps};

}

abstract class InstanceSchema extends Schema {

    public properties? : {[key: string]: Property};

    protected constructor(props?: InstanceSchemaProps) {

        super(props);
        if(props) {
            this.properties = Object.fromEntries(Object.entries(props.properties || {}).map(e0 => [e0[0], Property.from(e0[1])]));
        }
    }

    static from(props?: InstanceSchemaProps) : InstanceSchema {

        return Schema.from(props) as InstanceSchema;
    }
}

export {InstanceSchemaProps};
export default InstanceSchema;
