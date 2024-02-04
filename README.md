# Typescript

## 类型
1. number string boolean 
2. Array 
    > let list: number[] = [1, 3, 5];
    > let list: Array<number> = [1, 3, 5];
3. Tuple
    > let x: [string, number]
    > x = ['hello', 1];
4. Enum
    > enmu Color {Red, Green, Blue}   let c: Color = Color.Green
    > enmu Color {Red = 1, Green =2, Blue =4} let c = Color.Green;
    > Typescript 提供基于数字和字符串的枚举。
5. NUll and Undefined
    > 默认情况下，他们是所以类型的子类型。
6. any
    > let notSure = 4 
    > notSure = "maybe a sting instead"
7. Unknown
    > let value: unknown;
    value = true
    value = 32;
8. Never
    ```ts 
    function error( message: string): never{ throw new Error(message)}
    ```
9. void
    ```ts 
        function warnUser(): void {
            console.log("this is my warning message)
        }
    ```
10. 联合类型
  ```ts
    function display(input: string | number) {
        console.log(input);
    }

    let variale: string | numberl
    variable = 1;
    variable = "Hell0";
  ```
11. 交叉类型（Intersetciton Types） Type1 & Type2 & Type3 ... & TypeN
```ts
    interface Part1 {
        a: string
    }
    interface Part2 {
        b:number
    }
    type Combined = Pard1 & Pard2
    let obj: Combined = {a: hello, a: 42}
```
12. 类型别名(type Aliases)
    ```ts
        type MyBool = true | false
        type StringOrNumber = string | number;
    ```
13. 字符串字面量类型
    ```ts
        type Easing = 'ease-in' | "ease-out" | "ease-in-out";

        type Brand = 'iphone' | 'xiaomi' | 'honor';

        type SKU = `${Brand}-latest`; // "iphone-latest" | "xiaomi-latest" | "honor-latest"
        
    ```
14. 类型检查可以在运行时做，叫做动态类型检查，也可以在编译时做，叫做静态类型检查。
## 函数
1. 函数声明
   ```ts
    function add(x: number, y: number): number{
        return a + b;
    }
   ```
2. 函数表达式
   ```ts
    let myAdd:(x：number, y: number) => number = function(x: number, y: number): number {
        return x + y;
    }
   ```
3. 可选参数和默认参数
   ```ts
    function buildName(firstName: string, lastName?: string){
        if(lastName){
            return firstName + "" + lastName;
        }else {
            return firstName;
        }
    }

    function buildName (firstName: string, lastName="Smith")
   ```
4. 剩余参数(Rest Parameters)
   ```ts
    function buildName(firstName: string, ...restOfName: string[]){
        return firstName + " " + restOfName.join("");
    }

    let employeeName = buildName("Joseph", "Samuel, "Lucas", "Mack");
   ```
5. this 和箭头函数
   - 箭头函数可以保留函数创建时的this 值，而不是调用时的值。
  ```ts
    let deck ={
        suits: {"hearts", "spades", "clubs", "diamonds"}
        cards: Array(52),
        createCardPicker: function() {
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);

                return { suit: this.suits[pickedSuit], card: pickedCard % 13}
            }
        }
    }
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    alert("card:" + pickedCard.card + "of" + pickedCard.suit);
  ```
  6. 重载

## 接口和类

1. 接口(interfaces)
   - 接口可以描述函数类型
2. 枚举 （enum）
3. 异构枚举 --> 尽量不要用异构枚举
   ```ts
    enum Boolean {
        No = 0,
        Yes = 'Yes'
    }
   ```
4. 函数泛型
   ```ts
    function identity<T>(arg: T): T {
        return arg;
    }

    let result = identity(43);
   ```
5. 接口泛型
   ```ts
    interface Pair<T, U>{
        first: T,
        second: U,
    }
    let pair: Pair<number, string> = {first: 42, second: 'hello'};
   ```
6. 类泛型
   ```ts
    class Container<T> {
        private value: T;
        constructor(value: T){
            this.value = value;
        }
        getValue(): T {
            return this.value;
        }
    }
    let container = new Container<number>(32);
    let value = container.getValue; //value 的类型为number
   ```
## 命名空间和模块

1. 在Typescript 中，命名空间是一种将代码封装在一个特定名称下的方式，以防止全局作用域污染并避免命名冲突。
   ```ts
    namespace MyNamespace {
        export const myVar: number = 10;
        export function myFunction(): void {
            console.log("Hello from myNamespace")
        }
    }

    console.log(MyNamespace.myVar);
    MyNamespace.myFunction();

    //嵌套的命名空间
    namespace ParentNamespace{
        export namespace ChildNamespace {
            export const myVar: number = 20;
        }
    }

    console.log(ParentNamespace.ChildNamespace.myVar)
   ```
2. 模块
    - 在Typescript 中，模块是另一种组织代码的方式， 但它们更关注的是依赖管理，
3. 命名空间和模块的对比
   - 作用域： 命名空间是在全局作用域中定义的，而模块是在自己的作用域中定义的。
   - 文件组织： 命名空间通常用于组织在同一文件中的代码，而模块是在跨文件进行组织。
   - 依赖管理： 模块关注的是如何导入和导出功能，以方便管理代码之间的依赖关系，相比之下，命名空间并未对依赖管理提供明确的支持。
   - 使用场景：

## 7 类型系统层次
1. 顶层类型（Top Type）
   - top type 是所有其他类型的父类 Typescript 有两个顶层类 *any* *unknown*
   - unknown  --> unknown 在使用之前必须要类型检查或者类型断言，以确保类型安全。

2. 底层类型 （bottom Type）
    - 底层类型是所有类型的子类型 never 是唯一的底层类型
    - never 表示永远不存在的值的类型，例如一个抛出错误和永远死循环的函数。
    ```ts
        function infiniteLoop(): never{
            while(true){}
        }
        function error(message: string): never {
            throw new Error(message)
        }
    ```
## 8 高级类型
1. 映射类型（Mapped Types）
   - 映射类型 是Typescript 中一种强大的类型操作工具，它允许我们在编译时转换已知类型的属性，并创建新的类型。
  ```ts
    type NewType = {
        [Property in keyof ExistingType]: TransformType;
    }
    1) Readonly
        type Readonly<T> = {
            readonly [P in keyof T]: T[P]
        }

    interface Person {
        name: string;
        age: number;
    }

    type ReadonlyPerson = Readonly<Person>
  ```
2. Partial 是另外一个内置的映射类型，它将给定类型的所有属性变为可选
   ```ts
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }

    interface Person {
        name: string;
        age: number;
    }
    type Partial = Partial<Person>
   ```
3. Pick --> 从给的的类型中选择一部分属性来创建新的类型，
```ts
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    interface Person {
        name: string;
        age: number;
        occupation: string
    }

    type PersonInfo = Pick<Person, 'name' | 'age'>;
    const info: PersonInfo = {
        name: "John",
        age: 20
    }
```
4. Record  它根据指定的键类型和值类型创建一个新的对象类型。
   ```ts
    type Record<K extends keyof any, T> = {
        [P in K]: T
    }
    type Weekday = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
    type WorkingHours = Record<Weekday, string>
    const hours: WorkingHours = {
        Monday: "9am-6pm",
        Tuesday: "9am-6pm",
        Wednesday: "9am-6pm",
        Thursday: "9am-6pm",
        Friday: "9am-6pm",
    }
   ```
### 条件类型（conditional types）
1. 允许我们根据类型的条件判断结果来选择不同的类型，条件类型的语法形式为
   ```ts
    T extends U ? X : Y
   ```
    其中T是待检查的类型，U是条件类型，
    -  条件类型与infer -- infer 关键字用于声明一个类型变量，在条件类型中表示待推断的部分类型。
  ```ts
    type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
    function add(a: number, b: number): number{
        return a + b;
    }
    type AddReturnValue = ReturnType<typeof add>
  ```
2. 模板字面量类型（Template Literal Types）
   ```ts
    type Greeting<T extends string> = `Hello, ${T}!`;
    type GreetingWorld = Greeting<'World'>;  //GreetingWorld 的类型为“Hello, World”


    type Pluralize<T extends string> = `${T}s`;
    type Message<T extends boolean> = T extends true ? "Enabled" : "Disabled";
    type Plural = Pluralize<'apple'> // Plural 的类型为“apples” type
    EnabledMessage = Message<true>;
   ```


   ## 类型推断
   1. 基础类型推断
   2. 最佳公共类型推断
   ```ts
    let values = [1, 2, "three",true]; 
   ```
   3. 上下文类型推断
   ```ts
    function greet(person: string){
        console.log(`Hello, ${person}!`)
    }
    greet("John")
   ```
   4. 类型断言
    ```ts
        let value = 'Hello Typescript';
        let length = (values as string).length;
    ```
    5. 类型断言和泛型
    ```ts
        function identity<T>(value: T): T {
            return value;
        }
        let result = identity("Hello, Typescript");
    ```

    ## 类型守位
    1. typeof 类型守卫
    ```ts
        function printValue(value: string | number){
            if(typeof value === 'string'){
                console.log(value.toUpperCase())
            } else {
                console.log(value.toFixed(2));
            }
        }
        printValue('hello');
    ```
    2. instanceof 类型守卫
   ```ts
    class Animal {
        move() {
            console.log("Animal is moving");
        }
    }
    class Dog extends Animal {
        bark() {
            console.log("Dog is barking");
        }
    }

    function performAction(animal: Animal){
        if(animal instanceof Dog){
            animal.bark();
        }else {
            animal.move();
        }
    }

    const animal = new Animal();
    const animal2 = new Dog();
    performAction(animal);
    movingperformAction(animal2);
   ```
3. 使用自定义谓词函数类型守卫
   ```ts
    interface Circle {
        kind: 'circle';
        radius: number;
    }
    interface Rectangle {
        kind: 'rectangle';
        width: number;
        height: number;
    }
    type Shape = Circle | Rectangle;

    function calculateArea(shape: Shape){
        if(isCircle(shape)){
            console.log(Math.PI * shape.radius ** 2)
        } else {
            console.log(shape.width * shape.height)
        }
    }

    function isCircle(shape: Shape): shape is Circle{
        return shape.kind === 'circle';
    }

    const circle: Circle = { kind：'circle', radius: 5};
    calculateArea(circle);
   ```
   4. 联合类型守卫
    ```ts
        interface Car {
            type：'car';
            brand: string;
            wheels: number;
        }
        interface Bicycle {
            type: 'bicycle';
            color: sting;
        }
        interface Motorcycle {
            type: 'motorcycle';
            engine: number;
        }
        type Vehicle = Car | Bicycle | Motorcycle;
        function printVehicleInfo(vehicle: Vehicle){
            switch(vehicle.type){
                case 'car':
                    console.log(`Brand: ${vehicle.brand}, wheels: ${vehicle.wheels}`);
                    bread;
                case 'bicycle':
                    console.log(`Color: ${vehicle.color}`);
                    bread;
                default:
                    const _exhaustiveCheck: never = vehicle;
            }
        }

        const car: Car = {type: 'car', brand: 'Toyota', wheels: 4};
        printVehicle(car);
    ```
    5. 使用in 操作符进行类型守卫
        - in 操作符可以typescript 中判断一个属性是否存在于对象中，从而进行类型判断和类型守窄
        ```ts
            interface Circle {
                kind: 'circle';
                radius: number;
            }
            interface Rectangle {
                kind: 'rectangle';
                width: number;
                height: number;
            }
            type Shape = Circle | Rectangle;
            function printArea(shape: Shape){
                if('radius' in shape){
                    console.log(Math.PI * shape.radius ** 2)
                }else {
                    console.log(shape.width * shape.height)
                }
            }
            const circle: Circle = { kind：'circle', radius: 5};
            const rectangle: Rectangle = {kind: 'rectangle', width： 10， height: 10};
            printArea(circle);
            printArea(rectangle)
        ```
    6.  自定义类型判断（type predicates）守卫
        ```ts
            interface Bird {
                fly():void
            }
            interface Fish {
                swim(): void
            }
        ```
## 泛型和类型体操（Type Gymnastics）
1. 泛型函数
   ```ts
    function identity<T>(arg: T): T {
        return arg;
    }
    let result = identity<number>(42);
   ```
2. 泛型接口
   ```ts
    interface Container<T> {
        value: T
    }
    let container: Container<number> = {
        value: 43
    }
   ```
3. 泛型类
   ```ts
    class Stack<T> {
        private items: T[] = [];

        push(item: T){
            this.items.push(item);
        }

        pop(): T | undefined{
            this.item.pop();
        }
    }
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
   ```
### 类型体操（Type Gymnastics）
1.  条件类型
    > T extends U ? X : Y
    其中，T 是待检查类型，U是条件类型， X是满足条件是返回的类型。Y是不满足条件时返回的类型。
    ```ts
        type Check<T> = T extends string ? true : false;
        type Result = Check<string>; // type Result = true
    ```
2. keyof 操作符和索引访问类型
   keyof 操作符用于获取类型的所有属性名，结合索引访问类型可以从一个类型中获取属性的具体类型
   ```ts
    interface Person {
        name: string;
        age: number;
    }
    type PersonKeys = keyof Person; // "name" | "age"
    type PersonNameType = Person['name'];
   ```
3. infer 关键字
   ```ts
        type ReturnTyped<T> = T extends (...args: any[]) => infer R ? R : never;
        function add(a: number, b: number):number {
                return a + b;
        }

        type AddReturnValue = ReturnTyped<typeof add>
   ```
4. extends 关键字和类型约束
   ```ts
    function printProterty<T extends {name: string}>(obj: T): void {
        console.log(obj.name);
    }
    printProterty({name: "John", age: 24})
   ```
5. 泛型函数Util
   - Partial
   - Required
   - Pick
  ```ts
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
  ```
  - Exclude<T, U>  --> 用于从类型T中排除类型U， 返回一个新的类型。该新类型包含在T中存在但不存在U中的成员类型。
    ```ts
        tppe T = Exclude<'a' | 'b' | 'c', 'a' | 'b'> // T 的类型为c
    ```
- Omit<T, K> -- 返回一个新的类型， 该新的类型排除了类型T中指定的属性K。
  ```ts
    interface Person {
        name: string;
        age: number;
        address: string;
    }
    type PersonWithoutAddress = Omit<Person, 'address'>
  ```
  - Readonly
  ```ts
    interface Person {
        name: string;
        age: number;
    }
    type ReadonlyPerson = Readonly<Person>
  ```
## 类型兼容： 结构化类型
- '鸭子类型（Duck Typing）或者 结构化类型（structural Typing）'
- 鸭子类型意味者一个对象的类型不是由它继承或实现的具体类别决定的，而是由它具体的结构决定的。
1. 鸭子类型的定义 
   ```ts
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
   ```
- 只要一个对象的类型满足接口的要求，我们就可以把这个对象看作这个接口的实例，而不管这个对象的实际类型是什么。
- >摘要: 更少的代码 = 更少的解析/编译(时间) + 更少的传输(时间) + 更少的解压(时间)
- [JavaScript 的时间消耗](https://github.com/dwqs/blog/issues/59)

- https://vue3js.cn/interview/typescript/interface.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88