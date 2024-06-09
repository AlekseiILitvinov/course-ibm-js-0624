// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
}
show();
// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

// task
{
    var anotherVar = "anotherVar";
    let anotherLet = "anotherLet";
    const anotherConst = "anotherConst";
}

anotherVar = "changedScopedVar";
console.log(anotherVar);
anotherLet = "changedLet";
console.log(anotherLet);
anotherConst = "changedConst";
console.log(anotherConst);