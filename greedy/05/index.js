/**
 * A -> B
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

    2를 곱한다.   2N
    1을 수의 가장 오른쪽에 추가한다. N + N1  
    8  +  73 = 81
    n의 자릿수 + 1    +1
    200  1801  2001
    A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

    2  162
    2 4 8 81 162

    4 42
    8 16

    100  40021
    100 200 2001 4002 40021

    2A + B 10제곱 +1

 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');
let [start, end] = fs.readFileSync(filePath).toString().split(' ').map(Number);

//start : 4 
//end : 42
// 현재 코드로는 1 → 2 → 20 → 21로 가야하지만 최적은 1 → 11 → 10으로 가야 합니다.

let answer = 0;
let flag = false;
while(end >= start){ // 4 > 4
   if(end === start){
        flag = true;
        break;
    }
   if( end % 2 === 0 ){
       end = end/2;
       answer ++;
   }else{
    end = Number(String(end).substring(0,String(end).length-1));
    answer ++;
   }
}
if(!flag){
    answer = -1;
}
console.log(answer);
