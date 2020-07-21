import Member, {MemberProps} from "./Member";
import Visibility, {VisibilityProps} from "./../src/Visibility";
import Use, {UseProps} from "./../src/Use";

interface TransientProps extends MemberProps {

    readonly expand? : string[];

    readonly expression? : string;

    readonly type? : UseProps;

}

class Transient extends Member {

    public expand? : string[];

    public expression? : string;

    public type? : Use;

    constructor(props: TransientProps) {

        super(props);
        if(props) {
            this.expand = (props?.expand != null) ? (props.expand || []).map(v0 => v0) : undefined;
            this.expression = (props?.expression != null) ? props.expression : undefined;
            this.type = (props?.type != null) ? Use.from(props.type) : undefined;
        }
    }

    static from(props: TransientProps) : Transient {

        return new Transient(props);
    }
}

export {TransientProps};
export default Transient;
