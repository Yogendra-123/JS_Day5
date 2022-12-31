// Q .1
hoistedvariable=3;
console.log(hoistedvariable);
var hoistedvariable


hoisted()
   function hoisted(){
console.log('hello')
   }

// Q .2
   //passed by value
   let a = 10;
   let b = a;
   b = a + 5;
   console.log(a)
   console.log(b)

   //passsed by reference
   let obj1 = {
       name: "yogi",
       rollNo: 118
   }
   let obj2 = obj1;

   obj2.rollNo = 135;
   console.log(obj1);
   console.log(obj2);

    //map
   let mapped=[2,3,4,5,6];
  let modifiedmap=mapped.map(function(element){
   return element*4
  })
  console.log(modifiedmap)

    //filter
  let fill= [10,20,30,40]
  let c = fill.filter(item=> item >10)
  console.log(c)


// Q .6
let promise = new Promise(function(resolve,reject){
   setTimeout(()=>{
       resolve("Promise resolved")
   },3000)
})
 async function myFunction(){
   let result=await promise;
   console.log(result);
}
myFunction();

// Q .7
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();