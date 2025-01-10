function greeter(person: string | string[]) {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(', ');
    }
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user)); // Output: Hello, Jane Doe, John Smith

let singleUser = "Jane Doe";
console.log(greeter(singleUser)); // Output: Hello, Jane Doe