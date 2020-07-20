import Use, {UseProps} from "./Use";

interface UseArrayProps extends UseProps {

    readonly type? : UseProps;

}

class UseArray extends Use {

    public type? : Use;

    constructor(props?: UseArrayProps) {

        super(props);
        if(props) {
            this.type = new Use(props.type);
        }
    }
}

export {UseArrayProps};
export default UseArray;
