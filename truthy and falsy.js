if ("hello") {
    console.log("This will be executed because 'hello' is truthy");
}

if (42) {
    console.log("This will be executed because 42 is truthy");
}

if (true) {
    console.log("This will be executed because true is truthy");
}

if ({}) {
    console.log("This will be executed because an empty object is truthy");
}


///falsy
if (false) {
    console.log("This will not be executed because false is falsy");
}

if (0) {
    console.log("This will not be executed because 0 is falsy");
}

if (null) {
    console.log("This will not be executed because null is falsy");
}

if (undefined) {
    console.log("This will not be executed because undefined is falsy");
}

if (NaN) {
    console.log("This will not be executed because NaN is falsy");
}
