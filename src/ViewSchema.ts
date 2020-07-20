import From from "./From";
import Link from "./Link";
import Permission from "./Permission";
import Property from "./Property";

interface ViewSchema  {

    readonly description : string;

    readonly extensions : {[key: string]: any};

    readonly from : From;

    readonly group : string[];

    readonly links : {[key: string]: Link};

    readonly materialized : boolean;

    readonly permissions : {[key: string]: Permission};

    readonly properties : {[key: string]: Property};

    readonly sort : string[];

    readonly version : number;

    readonly where : string;

}

export default ViewSchema;
