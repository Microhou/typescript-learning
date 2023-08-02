let values = [1, 2, "three",true];

type Check<T> = T extends string ? true : false;
type Result = Check<number>;

interface Person {
    name: string;
    age: number;
}
type PersonKeys = keyof Person; // "name" | "age"
type PersonNameType = Person['name'];
let name1: PersonKeys = 'age';

type ReturnTyped<T> = T extends (...args: any[]) => infer R ? R : never;
function add(a: number, b: number):number {
        return a + b;
}

type AddReturnValue = ReturnTyped<typeof add>

function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result: Partial<T> = {};
    for (const key of keys) {
        result[key] = obj[key];
    }

    return result as Pick<T, K>
}

interface Person2 {
    name: string;
    age: number;
    address: string;
}
const person: Person2 = {
    name: "Tom",
    age: 32,
    address: '123 main str'
}

const nameAndAge = pickProperties(person, ['name', 'age'])
console.log(nameAndAge); // {"name": "Tom","age": 32} 

//鸭子类型
interface Duck {
    walk: () => void;
    quack: () => void;
}
function doDuckThings(duck: Duck) {
    duck.walk();
    duck.quack();
}

const myDuck = {
    walk: () => console.log('Walk like a duck'),
    quack: () => console.log("Quacking like a duck"),
    swim: () => console.log("Swimming like a duck")
}

doDuckThings(myDuck);

//toString
function toString(obj: {toString: () => string}) {
    return obj.toString()
}
console.log(toString(123))
console.log(toString([1,2,3]));
console.log(toString({a: 1, b: 2}));