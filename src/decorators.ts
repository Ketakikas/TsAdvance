//NOT CLEAR
// Decorators
// these are annotations
// great for meta programming (meta data) with class method, properties and method parameters
//to supply meta information to classes and its variables and methods
// these are simple functions prefix with @ symbol

// function Component(target:Function){
//     target.prototype.nid="N1099";
// }

// @Component
// class Ninja{
//     nid:string="N007";
// }

// let blackNinja=new Ninja();
// console.log("ID: "+blackNinja.nid);

//
function Log(target:Object,propertyKey:string,propertyDescriptor:PropertyDescriptor){
    console.log("Target: "+target)
    console.log("Key: ",propertyKey)
    propertyDescriptor.value=function(...args:any[]){
        return `Hello from ${args[0]}`;
    }
    console.log("Descriptor: ",propertyDescriptor);
}

class ABC
{
    @Log
    printNinja(str:string){
        return "Black belt ninja"+str;
    }
}

let ninja2=new ABC();
console.log(ninja2.printNinja("Yellowninja"));