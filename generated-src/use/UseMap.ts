import Use, {UseProps} from "./Use";

interface UseMapProps extends UseProps {

    readonly type? : UseProps;

}

class UseMap extends Use {

    public type? : Use;

    constructor(props?: UseMapProps) {

        super(props);
        if(props) {
            this.type = new Use(props.type);
        }
    }
}

export {UseMapProps};
export default UseMap;
