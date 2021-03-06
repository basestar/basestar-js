import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./../src/Schema";

interface StructSchemaProps extends InstanceSchemaProps {

    readonly concrete? : boolean;

    readonly extend? : string;

}

class StructSchema extends InstanceSchema {

    public concrete? : boolean;

    public extend? : string;

    constructor(props: StructSchemaProps) {

        super(props);
        if(props) {
            this.concrete = (props?.concrete != null) ? props.concrete : undefined;
            this.extend = (props?.extend != null) ? props.extend : undefined;
        }
    }

    static from(props: StructSchemaProps) : StructSchema {

        return new StructSchema(props);
    }
}

export {StructSchemaProps};
export default StructSchema;
