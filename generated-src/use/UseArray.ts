import Use, {UseProps} from "./../../src/Use";

interface UseArrayProps extends UseProps {

    readonly type? : UseProps;

}

class UseArray extends Use {

    public type? : Use;

    constructor(props: UseArrayProps) {

        super(props);
        if(props) {
            this.type = props.type && Use.from(props.type);
        }
    }

    static from(props: UseArrayProps) : UseArray {

        return new UseArray(props);
    }
}

export {UseArrayProps};
export default UseArray;
