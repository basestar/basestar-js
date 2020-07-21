
type VisibilityProps = any;

abstract class Visibility {

    static Constant = class extends Visibility {

        readonly value: boolean;

        constructor(value: boolean) {

            super();
            this.value = value;
        }

        isAlwaysHidden(): boolean {

            return !this.value;
        }

        isAlwaysVisible(): boolean {

            return this.value;
        }
    }

    static Dynamic = class extends Visibility {

        readonly expression: string;

        constructor(expression: string) {

            super();
            this.expression = expression;
        }

        isAlwaysHidden(): boolean {

            return false;
        }

        isAlwaysVisible(): boolean {

            return false;
        }
    }

    abstract isAlwaysVisible() : boolean;

    abstract isAlwaysHidden() : boolean;

    static from(props: VisibilityProps) : Visibility {

        if(typeof props === "boolean") {
            return new Visibility.Constant(props);
        } else if(typeof props === "string") {
            return new Visibility.Dynamic(props);
        } else {
            throw Error("Visibility " + props + " not supported");
        }
    }
}

export {VisibilityProps};
export default Visibility;
