// const someval: number= 22
// const arr1: number[]=[3,4,5]
// const str1: string="44"
// console.log(parseInt(str1))

// const arr2: [number, string]=[22,"dsfd"]

// let str1: boolean=false
// console.log(str1)



//union

// let arr:(string | number)[]=[2,445,"fff"]


// let someval:(string | boolean | number[])=[3.5,6,7]



// type User={
//     readonly name: string,
//     salary:number,
//     workingHours?:number[],
//     print?:()=>void
// }


// const ankul: User={
// name:"sks",
// salary:22,
// }



// console.log(ankul)


// interface User{
//     name: string,
//     age: number,
//     hours:number[]
// }
// interface User{
//     marks: number,
//     salary?:number
// }
// const ankul:User={
//     name:"ankul",
//     age: 22,
//     hours:[2,3],
//     marks:22,
  
// }

// console.log(ankul)

// interface User{
//     name: string,
//     age: number,
//     hours:number[]
// }
// interface Student extends User{
//     marks: number
// }

// const ankul: Student={
//     marks:100,
//     name:"",
//     age:22,
//     hours:[3,4]

// }


// type User={
//     readonly name: string,
//     salary:number,
 
// }
// const user1: User={
//     name:"dkdkd",
//     salary:100
// }
// user1.salary=200;
// user1.name="ffew"
// console.log(user1)
// type Student= User & {
//     marks:number
// }
// const ankul: Student={
//     marks:33,
//     name:"",
//     salary: 44

// }




class Car{

//properties
color:string=""
price:number=0

//constructor
constructor(c:string, p:number){
console.log("constructor called")
this.color=c;
this.price=p;
}
//function
getValue(){
    console.log("color",this.color)
}
}

// const car1= new Car();
// car1.color="red"
// car1.price=100

// console.log(car1)

const car1= new Car("red",100);
const car2=new Car("blue", 1900)
car1.getValue()
console.log(car1, car2)


























