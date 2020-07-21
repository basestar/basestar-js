import Constraint, {ConstraintProps} from "./../src/Constraint";

interface IdProps  {

    readonly constraints? : ConstraintProps[];

    readonly expression? : string;

}

class Id  {

    public constraints? : Constraint[];

    public expression? : string;

    constructor(props: IdProps) {

        
        if(props) {
            this.constraints = (props?.constraints != null) ? (props.constraints || []).map(v0 => Constraint.from(v0)) : undefined;
            this.expression = (props?.expression != null) ? props.expression : undefined;
        }
    }

    static from(props: IdProps) : Id {

        return new Id(props);
    }
}

export {IdProps};
export default Id;
