import From, {FromProps} from "./From";
import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Link, {LinkProps} from "./Link";
import Permission, {PermissionProps} from "./Permission";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./Schema";

interface ViewSchemaProps extends InstanceSchemaProps {

    readonly from? : FromProps;

    readonly group? : string[];

    readonly links? : {[key: string]: LinkProps};

    readonly materialized? : boolean;

    readonly permissions? : {[key: string]: PermissionProps};

    readonly sort? : string[];

    readonly where? : string;

}

class ViewSchema extends InstanceSchema {

    public from? : From;

    public group? : string[];

    public links? : {[key: string]: Link};

    public materialized? : boolean;

    public permissions? : {[key: string]: Permission};

    public sort? : string[];

    public where? : string;

    constructor(props?: ViewSchemaProps) {

        super(props);
        if(props) {
            this.from = From.from(props.from);
            this.group = (props.group || []).map(v0 => v0);
            this.links = Object.fromEntries(Object.entries(props.links || {}).map(e0 => [e0[0], Link.from(e0[1])]));
            this.materialized = props.materialized;
            this.permissions = Object.fromEntries(Object.entries(props.permissions || {}).map(e0 => [e0[0], Permission.from(e0[1])]));
            this.sort = (props.sort || []).map(v0 => v0);
            this.where = props.where;
        }
    }

    static from(props?: ViewSchemaProps) : ViewSchema {

        return new ViewSchema(props);
    }
}

export {ViewSchemaProps};
export default ViewSchema;
