interface IPerson {
	readonly id: number;
	userName: string;
	surname?: string;
	age: number;
	coins: number;
	addCoin(amount: number): void;
	removeCoin(amount: number): void;
	getCoins(): string;
}

interface IPerson {
	height: number;
}

interface ICoolPerson extends IPerson {
	carBrand: string;
}

class Person implements ICoolPerson {
	private static idCounter: number = 0;
	readonly id: number;
	userName: string;
	surname?: string;
	age: number;
	coins: number = 0;
	height: number = 180;
	carBrand: string = 'BMW';

	constructor(userName: string, age: number, surname?: string) {
		this.id = ++Person.idCounter;
		this.userName = userName;
		this.age = age;
		this.surname = surname;
	}

	addCoin(amount: number): void {
		this.coins += amount;
	}

	removeCoin(amount: number): void {
		this.coins -= amount;
	}

	getCoins(): string {
		return `Количество монет ${this.coins}`;
	}
}

const ivan = new Person('Ivan', 25, 'Ivanov');
ivan.carBrand = 'Lada';
ivan.addCoin(5);
console.log(ivan.getCoins());

console.log('id', ivan.id);
console.log('id', new Person('Alex', 30).id);
