import SchemaImpl, {SchemaImplProps} from "./../src/SchemaImpl";

interface SchemaProps extends SchemaImplProps {

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly version? : number;

}

abstract class Schema extends SchemaImpl {

    public description? : string;

    public extensions? : {[key: string]: any};

    public version? : number;

    protected constructor(props?: SchemaProps) {

        super(props);
        if(props) {
            this.description = props.description;
            this.extensions = Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]]));
            this.version = props.version;
        }
    }

    static from(props?: SchemaProps) : Schema {

        return SchemaImpl.from(props) as Schema;
    }
}

export {SchemaProps};
export default Schema;
