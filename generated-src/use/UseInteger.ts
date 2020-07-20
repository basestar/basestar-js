import Use, {UseProps} from "./../../src/Use";

interface UseIntegerProps extends UseProps {

}

class UseInteger extends Use {

    constructor(props: UseIntegerProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseIntegerProps) : UseInteger {

        return new UseInteger(props);
    }
}

export {UseIntegerProps};
export default UseInteger;
