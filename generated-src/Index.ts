import Consistency from "./Consistency";

interface IndexProps  {

    readonly consistency? : Consistency;

    readonly description? : string;

    readonly extensions? : {[key: string]: any};

    readonly max? : number;

    readonly over? : {[key: string]: string};

    readonly partition? : string[];

    readonly projection? : string[];

    readonly sort? : string[];

    readonly sparse? : boolean;

    readonly unique? : boolean;

    readonly version? : number;

}

class Index  {

    public consistency? : Consistency;

    public description? : string;

    public extensions? : {[key: string]: any};

    public max? : number;

    public over? : {[key: string]: string};

    public partition? : string[];

    public projection? : string[];

    public sort? : string[];

    public sparse? : boolean;

    public unique? : boolean;

    public version? : number;

    constructor(props: IndexProps) {

        
        if(props) {
            this.consistency = (props?.consistency != null) ? props.consistency : undefined;
            this.description = (props?.description != null) ? props.description : undefined;
            this.extensions = (props?.extensions != null) ? Object.entries(props.extensions || {}).map(e0 => ({[e0[0]]: e0[1]})).reduce((a0, b0) => ({...a0, ...b0}), {}) : undefined;
            this.max = (props?.max != null) ? props.max : undefined;
            this.over = (props?.over != null) ? Object.entries(props.over || {}).map(e0 => ({[e0[0]]: e0[1]})).reduce((a0, b0) => ({...a0, ...b0}), {}) : undefined;
            this.partition = (props?.partition != null) ? (props.partition || []).map(v0 => v0) : undefined;
            this.projection = (props?.projection != null) ? (props.projection || []).map(v0 => v0) : undefined;
            this.sort = (props?.sort != null) ? (props.sort || []).map(v0 => v0) : undefined;
            this.sparse = (props?.sparse != null) ? props.sparse : undefined;
            this.unique = (props?.unique != null) ? props.unique : undefined;
            this.version = (props?.version != null) ? props.version : undefined;
        }
    }

    static from(props: IndexProps) : Index {

        return new Index(props);
    }
}

export {IndexProps};
export default Index;
