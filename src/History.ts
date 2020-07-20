import Consistency from "./Consistency";

interface History  {

    readonly consistency : Consistency;

    readonly enabled : boolean;

}

export default History;
