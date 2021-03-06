import Use, {UseProps} from "./../../src/Use";

interface UseSetProps extends UseProps {

    readonly type? : UseProps;

}

class UseSet extends Use {

    public type? : Use;

    constructor(props: UseSetProps) {

        super(props);
        if(props) {
            this.type = (props?.type != null) ? Use.from(props.type) : undefined;
        }
    }

    static from(props: UseSetProps) : UseSet {

        return new UseSet(props);
    }
}

export {UseSetProps};
export default UseSet;
