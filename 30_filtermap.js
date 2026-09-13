// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (num) => {
// //   return  num>4
// // })


// const newNum = []
// myNums.forEach ( (num) =>{
//     if (num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);



const books = [
    { title: "The Alchemist", genre: "Fiction", publish: 1988 },

    { title: "Atomic Habits", genre: "Self Help", publish: 2018 },

    { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997 },

    { title: "The Psychology of Money", genre: "Finance", publish: 2020 }
];

const userBooks = books.filter ( (bk) => bk.genre === "Finance")

// console.log(userBooks);

// const myNumbers =[1, 2, 3, 4, 5, 6, 7,]
// const newNums = myNumbers.map ((num) => { return num + 10})
// console.log(newNums);



/// CHANING ///
const myNumbers = [1, 2, 3, 4, 5, 6, 7]
const newNums = myNumbers

.map((num) => num * 10)

.map((num) => num * 1)

.filter((num) =>   num >=40)
console.log(newNums);
