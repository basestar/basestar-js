
interface Permission  {

    readonly anonymous : boolean;

    readonly description : string;

    readonly expand : string[];

    readonly expression : string;

    readonly inherit : string[];

}

export default Permission;
