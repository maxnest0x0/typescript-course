interface Container<T> {
    value: T;
}

function getValue<T>(container: Container<T>): T {
    return container.value;
}

console.log(getValue({ value: 1 }));
console.log(getValue({ value: 'hi' }));
