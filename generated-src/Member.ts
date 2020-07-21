import Visibility, {VisibilityProps} from "./../src/Visibility";

interface MemberProps  {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly visibility? : VisibilityProps;

}

abstract class Member  {

    public description? : string;

    public extensions? : {[key: string]: any};

    public visibility? : Visibility;

    protected constructor(props: MemberProps) {

        
        if(props) {
            this.description = (props?.description != null) ? props.description : undefined;
            this.extensions = (props?.extensions != null) ? Object.entries(props.extensions || {}).map(e0 => ({[e0[0]]: e0[1]})).reduce((a0, b0) => ({...a0, ...b0}), {}) : undefined;
            this.visibility = (props?.visibility != null) ? Visibility.from(props.visibility) : undefined;
        }
    }
}

export {MemberProps};
export default Member;
