import Member, {MemberProps} from "./Member";
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
            this.expand = (props.expand || []).map(v0 => v0);
            this.expression = props.expression;
            this.type = props.type && Use.from(props.type);
        }
    }

    static from(props: TransientProps) : Transient {

        return new Transient(props);
    }
}

export {TransientProps};
export default Transient;
