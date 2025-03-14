/* let limit = 900719925474099n;

console.log(typeof limit);
console.log(limit+4n);

let limit = 2**53-1; 

console.log(typeof limit);
console.log(limit);
 
*/

/*  Big int
let num = 12345678910n;
console.log(typeof num);
console.log(num);
console.log(num+2024n); */

/* String Data type

let myName = `Tharun=${23+26}`;

console.log(myName);
console.log(typeof myName);

myName = 23112000;

console.log(typeof myName); */

/* Boolean Conversion

let x = '0';

console.log(x); 
console.log(typeof x);

x = Boolean(x);

console.log(x);
console.log(typeof x); --Since 0 is in string type it is taken as true. Or else 0 is mentioned as false.
*/

/* Unary Operator

let a = '43', b='46';

sum = +a + +b;

console.log(sum); --> Gets the value as number from string and gets the sum value.
console.log(typeof sum); 
*/

/* 

let a = '43', b='46';

c = ++a + b--;

console.log(c); */

/* 

let a = 'tharun', b='garun';

c = a>b;

console.log(c); 

*/ 

// console.log(2^20);

// console.log(null || 0 || undefined);

// let n=5, ans=0;

// for(let i=1;i<=n;i++){
//     ans += i;
//     console.log(ans);
// }

// function abc(){
//     console.log("1");
// }

// console.log(abc);

// let mul = (n) => n*5;
// console.log(mul(2));

//--Objects

// let user = {
//     name: 'Tharun Prasaath',
//     'name initial': 'R'
// }

// console.log(user.name+' '+user["name initial"]);
// delete user.name;
// console.log(user);

// let vari =1;
// vari =2;

// console.log(vari);


//split function
// function myFunction(a, b) 
// {
//     return b.split(a).length - 1
// }
 
// function myFunction(a)
// {
//     console.log(Number);
//     return a>0 && Number.isInteger(a);
// }

// myFunction(4)


// function myFunction(a, b) {
//     return a < b ? a / b : a * b
//   }


// function myFunction(a)
// {
//     return a.toFixed(2);
// }

// console.log(myFunction(26.1379));


// function User(a,b){
//     this.a=a;
//     this.b=b;
//     this.sum = this.a+this.b;
// }

// let add = new User(50,63);

// console.log(add.sum);

//Array
// let arr = [ [1,2,3],
//             [4,5,6],
//             [7,8,9]];


// for(let i=0;i<arr.length;i++){
    
//     for(j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
    
// }

// let arr = [ [1,2,3],
//             [4,5,6],
//             [7,8,9]];

// let ack =[];

// for(let i=0;i<arr.length;i++){
    
//     for(j=0;j<arr[i].length;j++){
//         val = ack.push(arr[i][j]);
//         // console.log(val);
//     }
// }

// console.log(ack.join(""));

// function myFunction(a){
//     arr=[];
//     str= a.toString()
//     for(i=0;i<str.length;i++){
//         splitArr = str.split("").map(Number);      
//     }
//     console.log(splitArr);
// }

// myFunction(24563);

//set method

// let set = new Set();

// set.add('9895953564');

// console.log(set.size);

// let num = set.values();

// leng = num.next().value;

// console.log(leng.length);

// function rec(n){
//     if(n==0){
//         return 1;
//     }

//     return n*rec(n-1);
// }

// console.log(rec(4));

//Recursive function
// function fac(n){
//     if(n==1){
//         return 1;
//     }
//     return n+fac(n-1);
// }

// console.log(fac(5));

//Class Getter And Setter
// class User{
//     #name
//     #age
//     constructor(name,age){
//         this.#name = name;
//         this.#age  = age;
//     }

//     display(){
//         console.log("Name:",this.#name);
//         console.log("Age:",this.age);
//     }
//     get age(){
//         return "Age:"+this.#age;
//     }

//     set age(age){
//         if(age==26){
//             this.#age="31";
//         } else {
//             this.#age=age;
//         }
//     }
// }

// let userAge = new User('Tharun',23);
// userAge.age = "26";
// console.log(userAge.age);


// const arr = [1, 2, 3, 4, 5, 6];
// const n =7;
// const result = arr.slice(4, n);
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6];
// const n = 3;
// arr.splice(0,3);
// console.log(arr);

// function myFunction(a)
// {    
//     const arr = [];
//     for(let i=0;i<=a.length-1;i++){
//         const val = a[i];
//         const ind = a.indexOf(val);
//         // console.log(val,'-',ind);

//         if(ind<3){
//              arr.push(val);
//         }
        
//     }
//     return arr;
// }

// val = myFunction([5,4,3,2,1,0]);

// console.log(val);


// const str = 'TharUnprasAath'
// const strCon = str.split('');
// const vowel = [];
// const nonVowel = [];

// for(let i=0;i<strCon.length;i++){
//     val = strCon[i];
//     ind = i
// //  console.log(val+'-'+ind);

//     if(val==='a'||val==='e'||val==='i'||val==='o'||val==='u'||val==='A'||val==='E'||val==='I'||val==='O'||val==='U'){
//         vowel.push(val);
//     } else {
//         nonVowel.push(val);
//     }
// }

// console.log(vowel+','+nonVowel);

//Vowels and non Vowels
function vowelsAndConsonants(s) {
    const strCon   = s.split('');
    const vowel    = [];
    const nonVowel = [];
    
    for(let i=0;i<strCon.length;i++){
    let val = strCon[i];
    let ind = i;

    if(val==='a'||val==='e'||val==='i'||val==='o'||val==='u'||val==='A'||val==='E'||val==='I'||val==='O'||val==='U'){
        vowel.push(val);
    } else {
        nonVowel.push(val);
    }
}

// Characters need to be printed in loop statement
    for(const char of vowel){
        console.log(char);
    }

    for(const char of nonVowel){
        console.log(char);
        
    }
}

vowelsAndConsonants('javascriptloops');

let btn = document.getElementById("btn-click");
            
            btn.addEventListener("click",(event)=> {
                console.log(event.key);
                
                
                    btn.style.backgroundColor='red';
                
            });