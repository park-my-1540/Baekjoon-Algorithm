/**
 * 올림픽
 */


 const fs = require('fs');
 const path = require('path');
 
 const filePath = path.join(__dirname, 'example.txt');
 const input = fs.readFileSync(filePath).toString().split('\n');
 
 const [n,k] = input[0].split(' ').map(Number);
 
 let myMap = new Map();
 for( let i =1; i<= n; ++i ){
     let [country, g,s,d] = input[i].split(' ').map(Number);
     myMap.set(country, [g,s,d]);
 }

//  const mapSort1 = new Map([...myMap.entries()].sort(compare));

//  function compare(a,b){
//  //3  5   리턴값이 +면 자리교체
//     if(a[1][0] > b[1][0]){
//         return b[1][0] - a[1][0];
//     }else if(a[1][0] === b[1][0]){

//         if(a[1][1] > b[1][1]){ // 5 > 3
//             return a[1][1] - b[1][1]
//         }else if(a[1][1] === b[1][1]){
//             if(a[1][2] > b[1][2]){ //5 > 3
//                 return b[1][2] - a[1][2]
//             }
//         }
//     }
//  }

let answer = myMap.get(k);
let answer2 = answer[0] * 3 + answer[1] * 2 + answer[2];
let count = 1;

for( let [x,y] of myMap){
    let sum = y[0] * 3 + y[1] * 2 + y[2];
    if(sum > answer2){
        ++count;
    }
}
console.log(count);