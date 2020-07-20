import Constraint from "./Constraint";

interface Id  {

    readonly constraints : Constraint[];

    readonly expression : string;

}

export default Id;
