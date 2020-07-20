import History, {HistoryProps} from "./History";
import Id, {IdProps} from "./Id";
import Index, {IndexProps} from "./Index";
import InstanceSchema, {InstanceSchemaProps} from "./InstanceSchema";
import Link, {LinkProps} from "./Link";
import Permission, {PermissionProps} from "./Permission";
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
            this.concrete = props.concrete;
            this.expand = (props.expand || []).map(v0 => v0);
            this.extend = props.extend;
            this.history = props.history && History.from(props.history);
            this.id = props.id && Id.from(props.id);
            this.indexes = Object.fromEntries(Object.entries(props.indexes || {}).map(e0 => [e0[0], e0[1] && Index.from(e0[1])]));
            this.links = Object.fromEntries(Object.entries(props.links || {}).map(e0 => [e0[0], e0[1] && Link.from(e0[1])]));
            this.permissions = Object.fromEntries(Object.entries(props.permissions || {}).map(e0 => [e0[0], e0[1] && Permission.from(e0[1])]));
            this.transients = Object.fromEntries(Object.entries(props.transients || {}).map(e0 => [e0[0], e0[1] && Transient.from(e0[1])]));
        }
    }

    static from(props: ObjectSchemaProps) : ObjectSchema {

        return new ObjectSchema(props);
    }
}

export {ObjectSchemaProps};
export default ObjectSchema;
