import Validator, {ValidatorProps} from "./Validator";

interface ConstraintProps  {

    readonly message? : string;

    readonly validator? : ValidatorProps;

}

class Constraint  {

    public message? : string;

    public validator? : Validator;

    constructor(props?: ConstraintProps) {

        
        if(props) {
            this.message = props.message;
            this.validator = new Validator(props.validator);
        }
    }
}

export {ConstraintProps};
export default Constraint;
