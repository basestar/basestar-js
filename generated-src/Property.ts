import Constraint, {ConstraintProps} from "./../src/Constraint";
import Member, {MemberProps} from "./Member";
import Visibility, {VisibilityProps} from "./../src/Visibility";
import Use, {UseProps} from "./../src/Use";

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

    constructor(props: PropertyProps) {

        super(props);
        if(props) {
            this.constraints = (props?.constraints != null) ? (props.constraints || []).map(v0 => Constraint.from(v0)) : undefined;
            this.expression = (props?.expression != null) ? props.expression : undefined;
            this.immutable = (props?.immutable != null) ? props.immutable : undefined;
            this.required = (props?.required != null) ? props.required : undefined;
            this.type = (props?.type != null) ? Use.from(props.type) : undefined;
        }
    }

    static from(props: PropertyProps) : Property {

        return new Property(props);
    }
}

export {PropertyProps};
export default Property;
