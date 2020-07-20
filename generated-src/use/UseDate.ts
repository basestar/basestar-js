import Use, {UseProps} from "./../../src/Use";

interface UseDateProps extends UseProps {

}

class UseDate extends Use {

    constructor(props: UseDateProps) {

        super(props);
        if(props) {
        }
    }

    static from(props: UseDateProps) : UseDate {

        return new UseDate(props);
    }
}

export {UseDateProps};
export default UseDate;
