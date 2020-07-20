import Use, {UseProps} from "./Use";

interface UseNumberProps extends UseProps {

}

class UseNumber extends Use {

    constructor(props?: UseNumberProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseNumberProps};
export default UseNumber;
