type lenght_ = (array: Array<any>) => number;
const lenght_: lenght_ = (array) => array.length ? lenght_(array.pop()) + 1 : 0;

type compose_ = (f: () => void, g: () => void) => void;
const compose_ = (f, g) => f(g());

class Container {
    public _value: any;
    constructor(x: any) {
        this._value = x;
    }
    of(x) {
        return new Container(x)
    }
}
