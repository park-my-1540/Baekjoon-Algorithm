/**
 * 4200
 * 4200 / 1000   - 1000 * 4     = 200
 * 200 / 100    - 100*2    = 0
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const [leng,money] = input[0].split(' ').map(Number);
let currentList = [];

for(let val=leng;val>0 ; val--){
    currentList.push(Number(input[val]));
}
let cnt=0;
let _money = money; //4200
let x;
currentList.forEach((item)=>{
    x = parseInt(_money / item); //4
        cnt += x; //4
        _money = _money - (x*item);
})
console.log(cnt);
