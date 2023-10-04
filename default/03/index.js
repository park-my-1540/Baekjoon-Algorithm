/**
 * 과제 안 내신 분..?
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 * 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
 */


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');


let arr = [];
for( i=0; i<30; i++){
    if(!isNaN(Number(input[i]))){
        arr.push(Number(input[i]));
    }else{
        arr.push(0);

    }
}
arr.sort((a,b)=> a-b);

let answer = '';
let cnt = 1;
let j=0;
while(cnt<31){
    if(arr[j] === 0){
        j++;
    }else if(arr[j] !== cnt && arr[j] !== 0){
        answer += cnt+'\n';
        cnt++;
    } else{
        j++;
        cnt++
    }
}
console.log(answer);