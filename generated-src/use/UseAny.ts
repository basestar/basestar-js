import Use, {UseProps} from "./Use";

interface UseAnyProps extends UseProps {

}

class UseAny extends Use {

    constructor(props?: UseAnyProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseAnyProps};
export default UseAny;
