
interface EnumSchemaProps  {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly values? : string[];

    readonly version? : number;

}

class EnumSchema  {

    public description? : string;

    public extensions? : {[key: string]: any};

    public values? : string[];

    public version? : number;

    constructor(props?: EnumSchemaProps) {

        
        if(props) {
            this.description = props.description;
            this.extensions = Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]]));
            this.values = (props.values || []).map(v0 => v0);
            this.version = props.version;
        }
    }
}

export {EnumSchemaProps};
export default EnumSchema;
