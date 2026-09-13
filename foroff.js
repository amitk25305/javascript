/// for make object iterabable

const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
}
for (const key in myObject) {
   
  //  console.log(myObject[key]);//
    
}

///for array
const programming =["js","rb","py","java","cpp"]
    
for (const key in programming) {
   
    // console.log(key);
    // console.log(programming[key]);
    
   /// note= 1)forin loop array pe use hua to bas key print hoga
   //////////2)forof loop array pe use hone pr value deta h direct 
    
}
    
/// ****foreach fn***
/// foreach does not return value
const coding =["js","ruby","java","python"]

// coding.forEach ((item) => {
//     console.log(item);
    
// })
// coding.forEach ((item,index,arr) => {
//     console.log(item, index, arr);
    
// })




const myCoding = [
    {
        languageName :"javascript",
        languagefile: "js"
    },

    {
        languageName :"java",
        languagefile: "java"
    },

    {
        languageName :"python",
        languagefile: "py"
    },
]
myCoding.forEach ((item) => {
    console.log(item.languageName);
    
})