import Use, {UseProps} from "./Use";

interface UseMapProps extends UseProps {

    readonly type? : UseProps;

}

class UseMap extends Use {

    public type? : Use;

    constructor(props?: UseMapProps) {

        super(props);
        if(props) {
            this.type = Use.from(props.type);
        }
    }

    static from(props?: UseMapProps) : UseMap {

        return new UseMap(props);
    }
}

export {UseMapProps};
export default UseMap;
