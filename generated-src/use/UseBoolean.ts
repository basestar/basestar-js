import Use, {UseProps} from "./Use";

interface UseBooleanProps extends UseProps {

}

class UseBoolean extends Use {

    constructor(props?: UseBooleanProps) {

        super(props);
        if(props) {
        }
    }

    static from(props?: UseBooleanProps) : UseBoolean {

        return new UseBoolean(props);
    }
}

export {UseBooleanProps};
export default UseBoolean;
