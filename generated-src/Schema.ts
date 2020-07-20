
interface SchemaProps  {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly version? : number;

}

class Schema  {

    public description? : string;

    public extensions? : {[key: string]: any};

    public version? : number;

    constructor(props?: SchemaProps) {

        
        if(props) {
            this.description = props.description;
            this.extensions = Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]]));
            this.version = props.version;
        }
    }
}

export {SchemaProps};
export default Schema;
