class User {
	static userName: string;
	private surname: string;
	protected age: number;

	constructor(userName: string, surname: string, age: number) {
		User.userName = userName;
		this.surname = surname;
		this.age = age;
		console.log('inside:', User.userName, this.surname, this.age);
	}

	public setAge(age: number): void {
		this.age = age;
	}

	public getAge(): number {
		return this.age;
	}
}

const user = new User('John', 'Smith', 20);
console.log('outside:', User.userName, user.getAge());
