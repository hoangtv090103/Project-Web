const greet = (name, callback) => {
    console.log("Hello ", name, "!");
    callback(name);
}

const sayGoodbye = (name) => {
    console.log(`Goodbye, ${name}!`);
}

greet("Hoang", sayGoodbye);