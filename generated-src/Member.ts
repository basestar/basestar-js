import Visibility, {VisibilityProps} from "./Visibility";

interface MemberProps  {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly visibility? : VisibilityProps;

}

class Member  {

    public description? : string;

    public extensions? : {[key: string]: any};

    public visibility? : Visibility;

    constructor(props?: MemberProps) {

        
        if(props) {
            this.description = props.description;
            this.extensions = Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]]));
            this.visibility = new Visibility(props.visibility);
        }
    }
}

export {MemberProps};
export default Member;
