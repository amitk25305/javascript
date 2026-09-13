/// for of
// for of apne app predict kr deta h ki kab loop end hoga ,kitna element hai
// for of array ,string sab pe lagta h


const arr = [1 ,2 ,3 ,4, 5]

for (const num of arr) {
    console.log(num);
    
}


//////// MAPS/////////
// maps are not iterable
//1.key value Pairs
//2.no duplicate value only unique value
//3.it stores in a ordered way but object not store 
const map = new Map()
map.set('IN',"india")
map.set('IN',"india")
map.set('USA',"united")
map.set('UK',"ukkk")

// console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value)
    
}


// at object pr kam nhi krta
const myObject ={
    game1 : 'NFS',
    game2 : 'spiderman'
}
for (const [key,value] of myObject) {
    
}