import Member, {MemberProps} from "./Member";
import Visibility, {VisibilityProps} from "./../src/Visibility";

interface LinkProps extends MemberProps {

    readonly expression? : string;

    readonly schema? : string;

    readonly single? : boolean;

    readonly sort? : string[];

}

class Link extends Member {

    public expression? : string;

    public schema? : string;

    public single? : boolean;

    public sort? : string[];

    constructor(props: LinkProps) {

        super(props);
        if(props) {
            this.expression = (props?.expression != null) ? props.expression : undefined;
            this.schema = (props?.schema != null) ? props.schema : undefined;
            this.single = (props?.single != null) ? props.single : undefined;
            this.sort = (props?.sort != null) ? (props.sort || []).map(v0 => v0) : undefined;
        }
    }

    static from(props: LinkProps) : Link {

        return new Link(props);
    }
}

export {LinkProps};
export default Link;
