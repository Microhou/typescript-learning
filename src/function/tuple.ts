let myTuple: [string, number] = ["hello", 42];
console.log(myTuple)

const tabs = ["Books", "Movies", "Laptops"] as const;
type Tabs = typeof tabs;
type Tab = Tabs[number];

enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up);
console.log(Direction[0]);