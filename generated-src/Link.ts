import Member, {MemberProps} from "./Member";

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
            this.expression = props.expression;
            this.schema = props.schema;
            this.single = props.single;
            this.sort = (props.sort || []).map(v0 => v0);
        }
    }

    static from(props: LinkProps) : Link {

        return new Link(props);
    }
}

export {LinkProps};
export default Link;
