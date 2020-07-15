//console.log('Ahoy TypeScript!');

/*const pizzas = [
    {name: 'pepperoni', toppings: ['pepperoni']}
];

const mappedPizzasold = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase();
});

console.log(mappedPizzasold);

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());


console.log(mappedPizzas);

const pizza = {
    name: 'Blazing inferno',
    getName: function () {
        console.log(this.name);
    },
};

console.log(pizza.getName());*/

/*function multiply(a: number, b= 25){
    return a* b;
};

console.log(multiply(5));*/

/*const pizza = {
    name: 'pepperoni',
    price: 15,
    getName() {
        return this.name;
    },
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

const order = {
    pizza: pizza,
    toppings: toppings
};*/

/*function sumAll(arr: any[]){
    return arr.reduce((prev: any, next: any) => prev + next);
}

const sum = sumAll([1,2,3,4,5,6,7,8,9,10]);

console.log(sum);

function SumAgain(message: string, ...arr: any[]) {
    console.log(message);
    console.log(arguments[0]);
    return arr.reduce((prev: any, next: any) => prev + next);
}

const sumagain = SumAgain('hello', 1,2,3,4,5,6,7,8,9,10);

console.log(sumagain);*/

/*const toppings = ['bacon', 'chilli'];

const newToppings = ['pepperoni'];

const allToppings =  [...newToppings, ...toppings];

console.log(allToppings);*/

/*const pizza = {
    name: 'pepperoni'
};

const toppings = ['pepperoni'];

const order = {
    ...pizza,
    toppings,
};

const finalOrder = {...order};

console.log(finalOrder);*/

/*const pizza = {
    name: 'pepperoni',
    toppings: ['pepperoni'],
};

function order({ name: pizzaName, toppings: pizzaTopping }: any) {
    console.log(pizzaName, pizzaTopping);
}

console.log(order(pizza));

const { pizzaName, pizzaTopping }: any = pizza

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [ first, seconf, third] = toppings;

console.log(first, seconf, third);

function logTopping([first, second, third]: any) {
    console.log(first, second, third);
}

logTopping(toppings);*/

/*const firstNumber: number = 25;
const secondNumber: number = 5;

function DivideThese(anumber: number, another:  number): number {
    return anumber/another;
}
const result: number = DivideThese(firstNumber, secondNumber);
console.log(`the new number is: ${result}`);

let coupon: string | null = 'pizza25'; //union type, multiple types assigned to a value

function removeCoupon(): void {
    coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);

let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('medium');

console.log(`Pizza size is ${pizzaSize}.`);*/

//let sumOrder: (price: number, quantity: number) => number; //function prototype

/*sumOrder = (price: number, quantity: number) => {
    return price * quantity;
}*/

//sumOrder = (price, quantity) => price * quantity; //function definition, uses an implicit return

//const sum = sumOrder(10, 5);

/*let sumOrder: (price: number, quantity?: number) => number; //function prototype, the ? means the variable is optional

sumOrder = (price, quantity = 1) => {
    return price * quantity;
}

const sum = sumOrder(10);

console.log(`total of the order is: $${sum}`);*/

/*let pizza: { name: string; price: number; getName(): string }; //this is an object

pizza ={
    name: 'Plain Pizza',
    price: 25,
    getName() {
        return this.name;
    }
}

console.log(pizza.getName());*/

/*let sizes: number[];

sizes = [1,2,3];

let toppings: Array<string>;

toppings = ['pepperoni', 'bacon', 'tomato'];

let pizza: [string, number, boolean];

pizza = ['pepperoni', 25, true];*/


/*type Size = 'small' | 'medium' | 'large';
type Toppings = 'pepperoni' | 'pineapple' | 'bacon';

let pizzaSize: Size = 'small';

function selectSize(size: Size): void {
    pizzaSize = size;
}

selectSize('medium');

//type Pizza = { name: string, toppings: Toppings, size: Size, cost: number, getCost(): number}
interface Pizza { name: string, toppings: Toppings, size: Size, cost: number, getCost(): number, [key: number]: string}

const HawaianPizza: Pizza = {
    name : 'Hawaiian Pizza',
    toppings: 'pineapple',
    size: 'medium',
    cost: 25,
    getCost() {
        return this.cost;
    }
}

const serialized = JSON.stringify(HawaianPizza);

function getCostFromJSON(obj: string): Pizza {
    return (JSON.parse(obj) as Pizza);
}
HawaianPizza[1] = 'firstPizza';
const result: Pizza = getCostFromJSON(serialized);



console.log(result.cost);
console.log(HawaianPizza.getCost());*/

interface SizesInterface {
    availableSizes: string[];
}

abstract class Sizes implements SizesInterface {
    constructor(protected sizes: string[]) {}

    get availableSizes() {
        return this.sizes;
    }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    protected updateSizes(newSize: string[])
    {
        this.sizes = newSize;
    }
}


interface PizzaInterface extends SizesInterface{
    name: string;
    toppings: string[];
    AddTopping(topping: string):void;
    GetPrice(): number;
    calculateCost(quantity:number): number;
}

class Pizza extends Sizes{//inheriting sizes
    readonly name: string;
    public toppings: string[] = [];
    private readonly price: number = 25;
    //private pizzaSizes: Sizes = new Sizes(['meduim', 'large']);

    constructor(name: string, public sizes: string[]) {
        super(sizes);
        this.name = name;
    }

    AddTopping(topping: string): void {
        this.toppings.push(topping);
    }

    private GetPrice(): number{
        return this.price;
    }

    calculateCost(quantity:number): number {
        return quantity * this.GetPrice();
    }

    /*getSizes(): string[] {
        return this.pizzaSizes.availableSizes;
    }*/


}

const pepPizza = new Pizza('pepperoni', ['brandon', 'courtney']);

pepPizza.AddTopping('Pepperoni');

//console.log(pepPizza);
function showTotal(quantity: number){
    console.log(`The total for ${quantity} pizzas is ${pepPizza.calculateCost(quantity)}. `);
}

showTotal(5);

console.log(pepPizza.sizes);

