
interface FromProps  {

    readonly expand? : string[];

    readonly schema? : string;

}

class From  {

    public expand? : string[];

    public schema? : string;

    constructor(props?: FromProps) {

        
        if(props) {
            this.expand = (props.expand || []).map(v0 => v0);
            this.schema = props.schema;
        }
    }

    static from(props?: FromProps) : From {

        return new From(props);
    }
}

export {FromProps};
export default From;
