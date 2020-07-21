import Use, {UseProps} from "./../../src/Use";

interface UseMapProps extends UseProps {

    readonly type? : UseProps;

}

class UseMap extends Use {

    public type? : Use;

    constructor(props: UseMapProps) {

        super(props);
        if(props) {
            this.type = (props?.type != null) ? Use.from(props.type) : undefined;
        }
    }

    static from(props: UseMapProps) : UseMap {

        return new UseMap(props);
    }
}

export {UseMapProps};
export default UseMap;
