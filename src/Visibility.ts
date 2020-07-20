
type VisibilityProps = any;

class Visibility {

    protected constructor(props: VisibilityProps) {

    }

    static from(props: VisibilityProps) : Visibility {
        
        return new Visibility(props);
    }
}

export {VisibilityProps};
export default Visibility;