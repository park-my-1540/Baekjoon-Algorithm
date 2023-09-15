/**
 * 잃어버린 괄호
 * 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.

   case01 55-(50+40)-10-5
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');
const inputData = fs.readFileSync(filePath).toString();

const groups = inputData.split('-');
let answer = 0;
for(let i=0;i<groups.length;i++){
    let cur = groups[i].split('+').map(Number).reduce((a,b) => a+b);

    if(i==0){ // 첫번째
        console.log(cur);
        answer += cur;
    }else{ // 두번째 부터
        answer -= cur;
    }
}