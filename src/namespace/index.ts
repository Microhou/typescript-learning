namespace MyNamespace {
    export const myVar: number = 10;
    export function myFunction(): void {
        console.log("Hello from myNamespace")
    }
}

console.log(MyNamespace.myVar);
MyNamespace.myFunction();

namespace ParentNamespace{
    export namespace ChildNamespace {
        export const myVar: number = 20;
    }
}

console.log(ParentNamespace.ChildNamespace.myVar)