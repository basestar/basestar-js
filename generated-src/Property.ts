import Constraint, {ConstraintProps} from "./Constraint";
import Member, {MemberProps} from "./Member";
import Visibility, {VisibilityProps} from "./Visibility";
import Use, {UseProps} from "./use/Use";

interface PropertyProps extends MemberProps {

    readonly constraints? : ConstraintProps[];

    readonly expression? : string;

    readonly immutable? : boolean;

    readonly required? : boolean;

    readonly type? : UseProps;

}

class Property extends Member {

    public constraints? : Constraint[];

    public expression? : string;

    public immutable? : boolean;

    public required? : boolean;

    public type? : Use;

    constructor(props?: PropertyProps) {

        super(props);
        if(props) {
            this.constraints = (props.constraints || []).map(v0 => new Constraint(v0));
            this.expression = props.expression;
            this.immutable = props.immutable;
            this.required = props.required;
            this.type = new Use(props.type);
        }
    }
}

export {PropertyProps};
export default Property;
