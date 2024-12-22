interface Car {
	model: string;
	price: number;
	dynamic_1: Record<string, string>;
	dynamic_2: { [key: string]: number; };
	tuple: [string, number, string];
}

const car: Car = {
	model: 'BMW',
	price: 999,
	dynamic_1: {},
	dynamic_2: {},
	tuple: ['1', 2, '3']
};

type CarKeys = keyof typeof car;

function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a: any, b: any): any {
	return a + b;
}

type PartialCar = Partial<Car>;
type ReadonlyCar = Readonly<Car>;
type JustCar1 = Pick<Car, 'model' | 'price'>;
type JustCar2 = Omit<Car, 'dynamic_1' | 'dynamic_2' | 'tuple'>;
type Never = Exclude<Car, Car>;

console.log(add('a', 'b'));
console.log(add(1, 2));

export type { CarKeys, PartialCar, ReadonlyCar, JustCar1, JustCar2, Never };
