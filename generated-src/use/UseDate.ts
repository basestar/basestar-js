import Use, {UseProps} from "./Use";

interface UseDateProps extends UseProps {

}

class UseDate extends Use {

    constructor(props?: UseDateProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseDateProps};
export default UseDate;
