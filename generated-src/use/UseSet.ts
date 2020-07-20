import Use, {UseProps} from "./Use";

interface UseSetProps extends UseProps {

    readonly type? : UseProps;

}

class UseSet extends Use {

    public type? : Use;

    constructor(props?: UseSetProps) {

        super(props);
        if(props) {
            this.type = new Use(props.type);
        }
    }
}

export {UseSetProps};
export default UseSet;
