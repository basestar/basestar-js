import Use, {UseProps} from "./Use";

interface UseBinaryProps extends UseProps {

}

class UseBinary extends Use {

    constructor(props?: UseBinaryProps) {

        super(props);
        if(props) {
        }
    }
}

export {UseBinaryProps};
export default UseBinary;
