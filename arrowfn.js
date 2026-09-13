// const user = {
//     username : "amit",
//     price :999,

//     welcomemessage : function(){
//         console.log(`${this.usernamr},welcome to website`);
        // console.log(this);

        // HERE this REP CURRENT CONTEXT WHICH IS ALL UNDER OF CONST KEY WORD
    // }
// }
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()
// console.log(this);// this show empty value in node environment not in browser,it show window object



/////NEXT CONCEPT
// const chai = function(){
//     let username ="amit"
//     console.log(this);
    
// }
  

// chai()


////ARROW FUN ///
// const addtwo= (num1 , num2) => {
//     return num1 + num2

// }
// console.log(addtwo(2,3);///explicit return due to return
    

const addtwo= (num1 , num2) =>( num1 + num2)
console.log(addtwo(2,3));/////IMPLICIT RETURN