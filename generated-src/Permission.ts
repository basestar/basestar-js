
interface PermissionProps  {

    readonly anonymous? : boolean;

    readonly description? : string;

    readonly expand? : string[];

    readonly expression? : string;

    readonly inherit? : string[];

}

class Permission  {

    public anonymous? : boolean;

    public description? : string;

    public expand? : string[];

    public expression? : string;

    public inherit? : string[];

    constructor(props: PermissionProps) {

        
        if(props) {
            this.anonymous = (props?.anonymous != null) ? props.anonymous : undefined;
            this.description = (props?.description != null) ? props.description : undefined;
            this.expand = (props?.expand != null) ? (props.expand || []).map(v0 => v0) : undefined;
            this.expression = (props?.expression != null) ? props.expression : undefined;
            this.inherit = (props?.inherit != null) ? (props.inherit || []).map(v0 => v0) : undefined;
        }
    }

    static from(props: PermissionProps) : Permission {

        return new Permission(props);
    }
}

export {PermissionProps};
export default Permission;
