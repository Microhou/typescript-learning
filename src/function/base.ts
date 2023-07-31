let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
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
console.log("card:" + pickedCard.card + " of " + pickedCard.suit);


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number|string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if(typeof x === 'string') {
        return x.split('').reverse().join('');
    }
    return x;
}

console.log(reverse(123456));


//interface 
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc = function(src: string, sub: string):boolean {
    let result = src.search(sub);
    return result > -1;
}

type voidFunc = () => void;
const f1: voidFunc = () => {
    return true;
}
const v1 = f1()
console.log(v1);

function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x )
}