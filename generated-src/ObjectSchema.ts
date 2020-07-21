import History, {HistoryProps} from "./History";
import Id, {IdProps} from "./Id";
import Index, {IndexProps} from "./Index";
import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Link, {LinkProps} from "./Link";
import Permission, {PermissionProps} from "./Permission";
import Property, {PropertyProps} from "./Property";
import Schema, {SchemaProps} from "./../src/Schema";
import Transient, {TransientProps} from "./Transient";

interface ObjectSchemaProps extends InstanceSchemaProps {

    readonly concrete? : boolean;

    readonly expand? : string[];

    readonly extend? : string;

    readonly history? : HistoryProps;

    readonly id? : IdProps;

    readonly indexes? : {[key: string]: IndexProps};

    readonly links? : {[key: string]: LinkProps};

    readonly permissions? : {[key: string]: PermissionProps};

    readonly transients? : {[key: string]: TransientProps};

}

class ObjectSchema extends InstanceSchema {

    public concrete? : boolean;

    public expand? : string[];

    public extend? : string;

    public history? : History;

    public id? : Id;

    public indexes? : {[key: string]: Index};

    public links? : {[key: string]: Link};

    public permissions? : {[key: string]: Permission};

    public transients? : {[key: string]: Transient};

    constructor(props: ObjectSchemaProps) {

        super(props);
        if(props) {
            this.concrete = (props?.concrete != null) ? props.concrete : undefined;
            this.expand = (props?.expand != null) ? (props.expand || []).map(v0 => v0) : undefined;
            this.extend = (props?.extend != null) ? props.extend : undefined;
            this.history = (props?.history != null) ? History.from(props.history) : undefined;
            this.id = (props?.id != null) ? Id.from(props.id) : undefined;
            this.indexes = (props?.indexes != null) ? Object.fromEntries(Object.entries(props.indexes || {}).map(e0 => [e0[0], Index.from(e0[1])])) : undefined;
            this.links = (props?.links != null) ? Object.fromEntries(Object.entries(props.links || {}).map(e0 => [e0[0], Link.from(e0[1])])) : undefined;
            this.permissions = (props?.permissions != null) ? Object.fromEntries(Object.entries(props.permissions || {}).map(e0 => [e0[0], Permission.from(e0[1])])) : undefined;
            this.transients = (props?.transients != null) ? Object.fromEntries(Object.entries(props.transients || {}).map(e0 => [e0[0], Transient.from(e0[1])])) : undefined;
        }
    }

    static from(props: ObjectSchemaProps) : ObjectSchema {

        return new ObjectSchema(props);
    }
}

export {ObjectSchemaProps};
export default ObjectSchema;
