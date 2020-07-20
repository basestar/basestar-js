import Constraint, {ConstraintProps} from "./Constraint";

interface IdProps  {

    readonly constraints? : ConstraintProps[];

    readonly expression? : string;

}

class Id  {

    public constraints? : Constraint[];

    public expression? : string;

    constructor(props?: IdProps) {

        
        if(props) {
            this.constraints = (props.constraints || []).map(v0 => new Constraint(v0));
            this.expression = props.expression;
        }
    }
}

export {IdProps};
export default Id;
