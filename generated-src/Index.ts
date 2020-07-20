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

    constructor(props?: IndexProps) {

        
        if(props) {
            this.consistency = props.consistency;
            this.description = props.description;
            this.extensions = Object.fromEntries(Object.entries(props.extensions || {}).map(e0 => [e0[0], e0[1]]));
            this.max = props.max;
            this.over = Object.fromEntries(Object.entries(props.over || {}).map(e0 => [e0[0], e0[1]]));
            this.partition = (props.partition || []).map(v0 => v0);
            this.projection = (props.projection || []).map(v0 => v0);
            this.sort = (props.sort || []).map(v0 => v0);
            this.sparse = props.sparse;
            this.unique = props.unique;
            this.version = props.version;
        }
    }
}

export {IndexProps};
export default Index;
