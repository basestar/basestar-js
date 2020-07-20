
interface VisibilityProps  {

}

class Visibility  {

    constructor(props?: VisibilityProps) {

        
        if(props) {
        }
    }

    static from(props?: VisibilityProps) : Visibility {

        return new Visibility(props);
    }
}

export {VisibilityProps};
export default Visibility;
