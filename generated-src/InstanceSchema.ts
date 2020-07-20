import Property, {PropertyProps} from "./Property";
import SchemaImpl, {SchemaImplProps} from "./../src/SchemaImpl";

interface InstanceSchemaProps extends SchemaImplProps {

    readonly properties? : {[key: string]: PropertyProps};

}

abstract class InstanceSchema extends SchemaImpl {

    public properties? : {[key: string]: Property};

    protected constructor(props?: InstanceSchemaProps) {

        super(props);
        if(props) {
            this.properties = Object.fromEntries(Object.entries(props.properties || {}).map(e0 => [e0[0], Property.from(e0[1])]));
        }
    }

    static from(props?: InstanceSchemaProps) : InstanceSchema {

        return SchemaImpl.from(props) as InstanceSchema;
    }
}

export {InstanceSchemaProps};
export default InstanceSchema;
