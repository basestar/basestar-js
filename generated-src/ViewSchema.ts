import From, {FromProps} from "./From";
import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Link, {LinkProps} from "./Link";
import Permission, {PermissionProps} from "./Permission";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./../src/Schema";

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

    constructor(props: ViewSchemaProps) {

        super(props);
        if(props) {
            this.from = (props?.from != null) ? From.from(props.from) : undefined;
            this.group = (props?.group != null) ? (props.group || []).map(v0 => v0) : undefined;
            this.links = (props?.links != null) ? Object.entries(props.links || {}).map(e0 => ({[e0[0]]: Link.from(e0[1])})).reduce((a0, b0) => ({...a0, ...b0}), {}) : undefined;
            this.materialized = (props?.materialized != null) ? props.materialized : undefined;
            this.permissions = (props?.permissions != null) ? Object.entries(props.permissions || {}).map(e0 => ({[e0[0]]: Permission.from(e0[1])})).reduce((a0, b0) => ({...a0, ...b0}), {}) : undefined;
            this.sort = (props?.sort != null) ? (props.sort || []).map(v0 => v0) : undefined;
            this.where = (props?.where != null) ? props.where : undefined;
        }
    }

    static from(props: ViewSchemaProps) : ViewSchema {

        return new ViewSchema(props);
    }
}

export {ViewSchemaProps};
export default ViewSchema;
