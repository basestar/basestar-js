
type ConstraintProps = any;

class Constraint {

    protected constructor(props: ConstraintProps) {

    }

    static from(props: ConstraintProps) : Constraint {

        return new Constraint(props);
    }
}

export {ConstraintProps};
export default Constraint;
