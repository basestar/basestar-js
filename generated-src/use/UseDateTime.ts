import Use, {UseProps} from "./../../src/Use";

interface UseDateTimeProps extends UseProps {

}

class UseDateTime extends Use {

    constructor(props: UseDateTimeProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseDateTimeProps) : UseDateTime {

        return new UseDateTime(props);
    }
}

export {UseDateTimeProps};
export default UseDateTime;
