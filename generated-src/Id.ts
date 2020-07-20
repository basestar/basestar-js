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
            this.constraints = (props.constraints || []).map(v0 => Constraint.from(v0));
            this.expression = props.expression;
        }
    }

    static from(props?: IdProps) : Id {

        return new Id(props);
    }
}

export {IdProps};
export default Id;
