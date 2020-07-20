import Use, {UseProps} from "./../../src/Use";

interface UseBinaryProps extends UseProps {

}

class UseBinary extends Use {

    constructor(props: UseBinaryProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseBinaryProps) : UseBinary {

        return new UseBinary(props);
    }
}

export {UseBinaryProps};
export default UseBinary;
