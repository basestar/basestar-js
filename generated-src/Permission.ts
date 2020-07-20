
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
            this.anonymous = props.anonymous;
            this.description = props.description;
            this.expand = (props.expand || []).map(v0 => v0);
            this.expression = props.expression;
            this.inherit = (props.inherit || []).map(v0 => v0);
        }
    }

    static from(props: PermissionProps) : Permission {

        return new Permission(props);
    }
}

export {PermissionProps};
export default Permission;
