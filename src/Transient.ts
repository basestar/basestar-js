import Use from "./Use";
import Visibility from "./Visibility";

interface Transient  {

    readonly description : string;

    readonly expand : string[];

    readonly expression : string;

    readonly extensions : {[key: string]: any};

    readonly type : Use;

    readonly visibility : Visibility;

}

export default Transient;
