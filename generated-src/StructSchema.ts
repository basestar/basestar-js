import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./Schema";

interface StructSchemaProps extends InstanceSchemaProps {

    readonly concrete? : boolean;

    readonly extend? : string;

}

class StructSchema extends InstanceSchema {

    public concrete? : boolean;

    public extend? : string;

    constructor(props?: StructSchemaProps) {

        super(props);
        if(props) {
            this.concrete = props.concrete;
            this.extend = props.extend;
        }
    }
}

export {StructSchemaProps};
export default StructSchema;
