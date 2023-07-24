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
        type Easing = 'ease-in' | "ease-out" | "ease-in-out"
    ```

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
    function buildName(furstName: string, lastName?: string){
        if(lastName){
            return firstName + "" + lastName;
        }else {
            return firstName;
        }
    }
   ```