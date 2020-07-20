import Property from "./Property";

interface StructSchema  {

    readonly concrete : boolean;

    readonly description : string;

    readonly extend : string;

    readonly extensions : {[key: string]: any};

    readonly properties : {[key: string]: Property};

    readonly version : number;

}

export default StructSchema;
