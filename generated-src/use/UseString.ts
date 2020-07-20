import Use, {UseProps} from "./Use";

interface UseStringProps extends UseProps {

    readonly pattern? : string;

}

class UseString extends Use {

    public pattern? : string;

    constructor(props?: UseStringProps) {

        super(props);
        if(props) {
            this.pattern = props.pattern;
        }
    }
}

export {UseStringProps};
export default UseString;
