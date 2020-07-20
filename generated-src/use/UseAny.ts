import Use, {UseProps} from "./../../src/Use";

interface UseAnyProps extends UseProps {

}

class UseAny extends Use {

    constructor(props: UseAnyProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseAnyProps) : UseAny {

        return new UseAny(props);
    }
}

export {UseAnyProps};
export default UseAny;
