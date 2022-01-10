/*
1. Generics: generalize types which can work with many
different dbs
- Apply overloading for applying polymorphism
- declared using <T>
- constraining the generic type is done with the extends 
  keyword : <T extends Car>, to extend the generic type
*/
//number generic array
type numberArray=Array<number>;
let numbers:numberArray=[1,2,3,4];

//string generic array
type stringAray=Array<string>;
let strings:stringAray=['a','b','c','d'];

//object array
type objArray=Array<{email:string,age:number}>;
let objs:objArray=[
    {email:"test@test.com",age:32},
    {email:"test@test.com",age:32},
    {email:"test@test.com",age:32}
];

const addAtBeginning=(val:number,arr:number[])=>{
    return [val,...arr];
};

let v1=addAtBeginning(10,[1,2,3,4]);
console.log(v1);

//This is an array as array supports numbers only.
//let v1=addAtBeginning("ABC",[,2,3,4]);

//resolve this using any 

const addBeginning=(val:any,arr:any[]):any[]=>{
    return [val,...arr];
};
let v2=addBeginning("ABC",[1,2,3,4]);
console.log(v2);

//generics
// here T will take any data type: number, string or any complex type
const fxn=<T>(val:T,arr:T[]):T[]=>{
    return [val,...arr];
};

//calling with numbers
let func1=fxn<number>(10,[20,30,40]);
console.log(func1);

//calling with strings
let func2=fxn<string>("ABC",["PQR","XYZ"]);
console.log(func2);

//********************************************************************* */
//Practice 1
//T getting extended having firstname and last name and other oroperties that type T will have.
interface Person{
    firstname:string;
    lastname:string;
}

const getFullName=<T extends Person>(obj:T)=>{
    return {
        ...obj,
        fullname:obj.firstname+" "+obj.lastname
    };
};


//calling getFullName() with any number of properties.
console.log(getFullName({firstname:"Ketaki",lastname:"Kashyap"}));
console.log(getFullName({firstname:"Ketaki",lastname:"Kashyap",age:32}));
console.log(getFullName({firstname:"Ketaki",lastname:"Kashyap",age:43,isAdmin:true}));


//Practice 2
interface Resource1<T,U>{
    RID:T;
    Rtype:U;
}

let resource1:Resource1<number,string>={
    RID:101,
    Rtype:"Server 01"
}
console.log(resource1);
let resource2:Resource1<string,string>={
    RID:"102",
    Rtype:"Server 02"
}
console.log(resource2);


//Practice 3
class Employee<T,U>{
    constructor(private empid:T,empAge:U){}
}

//calling employee with different datatypes
let emp1=new Employee<string,number>("EMP001",32);
let emp2=new Employee<string,string>("EMP002","32");
let emp3=new Employee<number,number>(3,32);
console.log(emp1);
console.log(emp2);
console.log(emp3);


