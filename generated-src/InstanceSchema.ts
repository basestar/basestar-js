import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./Schema";

interface InstanceSchemaProps extends SchemaProps {

    readonly properties? : {[key: string]: PropertyProps};

}

class InstanceSchema extends Schema {

    public properties? : {[key: string]: Property};

    constructor(props?: InstanceSchemaProps) {

        super(props);
        if(props) {
            this.properties = Object.fromEntries(Object.entries(props.properties || {}).map(e0 => [e0[0], new Property(e0[1])]));
        }
    }
}

export {InstanceSchemaProps};
export default InstanceSchema;
