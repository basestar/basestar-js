import Visibility from "./Visibility";

interface Link  {

    readonly description : string;

    readonly expression : string;

    readonly extensions : {[key: string]: any};

    readonly schema : string;

    readonly single : boolean;

    readonly sort : string[];

    readonly visibility : Visibility;

}

export default Link;
