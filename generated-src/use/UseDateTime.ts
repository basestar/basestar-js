import Use, {UseProps} from "./Use";

interface UseDateTimeProps extends UseProps {

}

class UseDateTime extends Use {

    constructor(props?: UseDateTimeProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseDateTimeProps};
export default UseDateTime;
