
interface ValidatorProps  {

}

class Validator  {

    constructor(props?: ValidatorProps) {

        
        if(props) {
        }
    }

    static from(props?: ValidatorProps) : Validator {

        return new Validator(props);
    }
}

export {ValidatorProps};
export default Validator;
