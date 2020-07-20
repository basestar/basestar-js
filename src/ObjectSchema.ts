import History from "./History";
import Id from "./Id";
import Index from "./Index";
import Link from "./Link";
import Permission from "./Permission";
import Property from "./Property";
import Transient from "./Transient";

interface ObjectSchema  {

    readonly concrete : boolean;

    readonly description : string;

    readonly expand : string[];

    readonly extend : string;

    readonly extensions : {[key: string]: any};

    readonly history : History;

    readonly id : Id;

    readonly indexes : {[key: string]: Index};

    readonly links : {[key: string]: Link};

    readonly permissions : {[key: string]: Permission};

    readonly properties : {[key: string]: Property};

    readonly transients : {[key: string]: Transient};

    readonly version : number;

}

export default ObjectSchema;
