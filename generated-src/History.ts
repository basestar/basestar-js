import Consistency from "./Consistency";

interface HistoryProps  {

    readonly consistency? : Consistency;

    readonly enabled? : boolean;

}

class History  {

    public consistency? : Consistency;

    public enabled? : boolean;

    constructor(props: HistoryProps) {

        
        if(props) {
            this.consistency = props.consistency;
            this.enabled = props.enabled;
        }
    }

    static from(props: HistoryProps) : History {

        return new History(props);
    }
}

export {HistoryProps};
export default History;
