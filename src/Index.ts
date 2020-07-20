import Consistency from "./Consistency";

interface Index  {

    readonly consistency : Consistency;

    readonly description : string;

    readonly extensions : {[key: string]: any};

    readonly max : number;

    readonly over : {[key: string]: string};

    readonly partition : string[];

    readonly projection : string[];

    readonly sort : string[];

    readonly sparse : boolean;

    readonly unique : boolean;

    readonly version : number;

}

export default Index;
