
interface SchemaProps  {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly version? : number;

}

abstract class Schema  {

    public description? : string;

    public extensions? : {[key: string]: any};

    public version? : number;

    protected constructor(props: SchemaProps) {

        
        if(props) {
            this.description = (props?.description != null) ? props.description : undefined;
            this.extensions = (props?.extensions != null) ? Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]])) : undefined;
            this.version = (props?.version != null) ? props.version : undefined;
        }
    }
}

export {SchemaProps};
export default Schema;
