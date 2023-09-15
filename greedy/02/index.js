/**
 * ATM
5
인 1 2 3 4 5
분 3 1 4 3 2
1    3      6     9
1  (1+2) (1+2+3) (1+2+3+3) ...
분 1 2 3 3 4
32

1. 매핑
2. 최소
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');
const array= input[1].split(' ').map(Number).sort((a,b)=>a-b);


let _sum=0;
let answer = 0;
array.forEach((item,idex)=>{
    _sum += item;
    answer += _sum;
})

console.log(answer);