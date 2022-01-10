//namesapce creation
namespace MySounds{
    export const dogSound="Buff Buff";
    export const speak=()=>"Hello World";

    //nested namespace creation and then export it
    export namespace Duck{
        export const speak="Quack Quack";
    }
}

console.log(MySounds.dogSound);
console.log(MySounds.speak());
console.log(MySounds.Duck.speak);