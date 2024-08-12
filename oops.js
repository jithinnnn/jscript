//detail of a person


// class Person{
//     setValues(name,age,location){
//         this.name=name
//         this.age=age
//         this.place=location
//     }
//     displayData(){
//         console.log("person name is",this.name);
//         console.log("person location is",this.place);
//         console.log("person age is",this.age);
//     }
// }
// pe1=new Person()
// pe1.setValues("anu",23,"kochi")
// pe1.displayData()

// pe2=new Person()
// pe2.setValues("amal",22,"kochi")
// pe2.displayData()


//detail of a student with another method of displaying

// class Student{
//     college="luminar"   //class attribute
//     setStudent(name,rollno){  //method attribute
//         this.name=name
//         this.rollno=rollno
//         // this.collage=college
//     }
//     displayStudent(){
//         console.log(this.name,this.rollno,this.college);

//     }
// }
// st1=new Student()
// st1.setStudent("amal",7)
// st1.displayStudent()

// st2=new Student()
// st2.setStudent("arun",10)
// st2.displayStudent()


//-----------------------------------------------------------------------------------------------------------------------
// constructor - to initialize an object with the time of object creation
// method - constructor() ----- auto initialization

//detail of employee with constructor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// class Employee{
//     constructor(id,name){
//         console.log("_constructor method worked_");
//         this.id=id
//         this.name=name
        
//     }
//     display(){
//         console.log(this.id,this.name);
//     }
// }

// obj=new Employee(1,"abhi")
// obj.display()


// //bank details with deposit

// class Bank{
//     bname="SBI"
//     constructor(acno,name){
//         this.acno=acno
//         this.name=name
//         this.balance=0
//         console.log(this.name,this.bname,"bank account created");
//     }
//     deposit(amnt){
//         this.amnt=amnt
//         this.balance+=this.amnt
//         console.log(this.name,"your",this.bname,"account credited with amount",this.amnt);
//         this.balanceCheck()
//     }
//     withdraw(amount){
//         this.amount=amount
//         if(this.amount>this.balance){
//             console.log("insufficient balance");
//         }
//         else{
//             this.balance-=this.amount
//             console.log(this.name,"your",this.bname,"account debited with amount",this.amount);
//             this.balanceCheck()
//         }
//     }
//     balanceCheck(){
//         console.log("yyour account balance is",this.balance);
//     }
// }


// ac1=new Bank(123456789,"Abhi")
// ac1.balanceCheck()
// ac1.deposit(1500)


// Calculator num1,num2

// class Calculator{
//     constructor(num1,num2){
//         this.num1=num1
//         this.num2=num2
//         console.log("happy calculating...get started..");
//     }

//     add(){
//         console.log(this.num1,"+",this.num2,"=",this.num1+this.num2);
//     }

//     sub(){
//         console.log(this.num1,"-",this.num2,"=",this.num1-this.num2);
//     }

//     div(){
//         console.log(this.num1,"/",this.num2,"=",this.num1/this.num2);
//     }

//     mul(){
//         console.log(this.num1,"*",this.num2,"=",this.num1*this.num2);
//     }
// }

// obj=new Calculator(100,200)
// obj.add()
// obj.sub()
// obj.div()
// obj.mul()


//inheritence - used to access properties of one class into another class
//single inheritence - one parent for child
//multiple inheritence -more than one parent for a child - not supported for javascript 
//multi-level

// class A{ //parent class/super classs/ base class
//     methoda(){
//         console.log("inside A class");
//     }
// }

// class B extends A{//child class/sub class/ derived class
//     methodb(){
//         console.log("inside B class");
//     }
// }
// class C extends B{
//     methodc(){
//         console.log("inside C class");
//     }
// }

// objc=new C()
//     objc.methodc()
//     objc.methodb()
//     objc.methoda()


// objb= new B()
// objb.methodb()
// objb.methoda()

//User - name, age, location
//Teacher - User
//Student - User

//--------------------------------------------------------------------------------------------
//polymorphism
//many forms

//method overloading - same method name but different number of parameters - js not supporting
// class A{
//     methoda(n){
//         this.n=n
//         console.log("first method",this.n);
//     }
//     methoda(){
//         console.log("second method");
//     }
// }
// obj=new A()
// obj.methoda(5)
// obj.methoda() //THIS IS THE CONCEPT OF METHOD OVERLOADING BUT OVERLOADING IS NOT SUPPORTED IN JAVASCRIPT

//method overriding - SAME METHOD NAME ANDSAME NUMBER OF PARAMETERS //CHILD CLASS METHODS OVERRIDE PARENT CLASS METHODS 
class Parent{
    buyphone(){
        console.log("nokia");
    }
}
class Child extends Parent{
    buyphone(){
        console.log("iphone");
    }
}
ch=new Child()
ch.buyphone()