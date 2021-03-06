import Use, {UseProps} from "./../../src/Use";

interface UseNamedProps extends UseProps {

    readonly name? : string;

}

class UseNamed extends Use {

    public name? : string;

    constructor(props: UseNamedProps) {

        super(props);
        if(props) {
            this.name = (props?.name != null) ? props.name : undefined;
        }
    }

    static from(props: UseNamedProps) : UseNamed {

        return new UseNamed(props);
    }
}

export {UseNamedProps};
export default UseNamed;
