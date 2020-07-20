
interface EnumSchema  {

    readonly description : string;

    readonly extensions : {[key: string]: any};

    readonly values : string[];

    readonly version : number;

}

export default EnumSchema;
