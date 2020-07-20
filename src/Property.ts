import Constraint from "./Constraint";
import Use from "./Use";
import Visibility from "./Visibility";

interface Property  {

    readonly constraints : Constraint[];

    readonly description : string;

    readonly expression : string;

    readonly extensions : {[key: string]: any};

    readonly immutable : boolean;

    readonly required : boolean;

    readonly type : Use;

    readonly visibility : Visibility;

}

export default Property;
