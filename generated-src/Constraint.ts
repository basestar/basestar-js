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
            this.validator = Validator.from(props.validator);
        }
    }

    static from(props?: ConstraintProps) : Constraint {

        return new Constraint(props);
    }
}

export {ConstraintProps};
export default Constraint;
