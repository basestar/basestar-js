
interface FromProps  {

    readonly expand? : string[];

    readonly schema? : string;

}

class From  {

    public expand? : string[];

    public schema? : string;

    constructor(props: FromProps) {

        
        if(props) {
            this.expand = (props?.expand != null) ? (props.expand || []).map(v0 => v0) : undefined;
            this.schema = (props?.schema != null) ? props.schema : undefined;
        }
    }

    static from(props: FromProps) : From {

        return new From(props);
    }
}

export {FromProps};
export default From;
