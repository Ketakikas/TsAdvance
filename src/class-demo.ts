/*
1. Class: access modifiers- priavte, public and protected
Getter/Setter methods
 */

class Animal{
    private _species:string="DEFAULT";
    get species(){
        return this._species;
    }
    set species(newVal){
        if(newVal.length>3){
        this._species=newVal;
        }
        else{
            this._species="DEFAULT";
        }
    }
}

let tiger=new Animal();
tiger.species="TIGER";
//console.log(tiger.species);


//*************************************************************************************************** */
/*
2. Method Overloading
*/

function aboutUser(username:string):string;
//? signifies that parameter is optional
function aboutUser(username:string,age?:number):string;
function aboutUser(username:string,age?:number,isAdmin?:boolean):string;
function aboutUser(username:string,age?:number,isAdmin?:boolean){
    if(age!=undefined && isAdmin!=false){
    return `About username:${username}| Age: ${age}| isAdmin: ${isAdmin}`;
    }
    else if (age!=undefined && isAdmin==false){
        return `About username:${username}| Age: ${age}`;
    }
    else{
        return `About username:${username}`;
    }
}

//intellisense will show 3 overloaded methods
//console.log(aboutUser("Ketaki Kashyap"));
//console.log(aboutUser("Ketaki Kashyap",32));
//console.log(aboutUser("Ketaki Kashyap",32,true));


//*********************************************************************************************** */
//3. Abstract Classes

abstract class Fighter{
    abstract fight():string;
    move(){
        return "Kicking";
    }
}

class Ryu extends Fighter{
    fight(): string {
        //return 'Lightening Kick';
        return super.move();// to call parent class method
    }
}

let ryu=new Ryu();
//console.log(ryu.fight());
//console.log(ryu.move());


//********************************************************************************************** */
//4. Interfaces

interface Resource{
    id:string;
    getDetails:()=>string;
}

class MyResource implements Resource{
    id: string="101";
    getDetails(){
        return this.id;
    };
}

let obj=new MyResource();
//console.log("Id: "+obj.getDetails());


/************************************************************************************************* */
/*
5. 
*/








