import Use, {UseProps} from "./Use";

interface UseIntegerProps extends UseProps {

}

class UseInteger extends Use {

    constructor(props?: UseIntegerProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseIntegerProps};
export default UseInteger;
