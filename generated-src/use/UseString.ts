import Use, {UseProps} from "./../../src/Use";

interface UseStringProps extends UseProps {

    readonly pattern? : string;

}

class UseString extends Use {

    public pattern? : string;

    constructor(props: UseStringProps) {

        super(props);
        if(props) {
            this.pattern = props.pattern;
        }
    }

    static from(props: UseStringProps) : UseString {

        return new UseString(props);
    }
}

export {UseStringProps};
export default UseString;
