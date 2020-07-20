import UseImpl, {UseImplProps} from "./../../src/UseImpl";

interface UseProps extends UseImplProps {

}

abstract class Use extends UseImpl {

    protected constructor(props?: UseProps) {

        super(props);
        if(props) {
        }
    }

    static from(props?: UseProps) : Use {

        return UseImpl.from(props) as Use;
    }
}

export {UseProps};
export default Use;
