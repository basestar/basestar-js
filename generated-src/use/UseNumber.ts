import Use, {UseProps} from "./../../src/Use";

interface UseNumberProps extends UseProps {

}

class UseNumber extends Use {

    constructor(props: UseNumberProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseNumberProps) : UseNumber {

        return new UseNumber(props);
    }
}

export {UseNumberProps};
export default UseNumber;
