import Validator from "./Validator";

interface Constraint  {

    readonly message : string;

    readonly validator : Validator;

}

export default Constraint;
