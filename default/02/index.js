/**
 * 별 찍기 - 2
 * 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
    하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.

    첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
 */


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');
const input = fs.readFileSync(filePath).toString().split('\n');

const length = Number(input[0]);

let answer = '';
for( i=1; i <= length; i++){
    console.log(' '.repeat(length-i) + '*'.repeat(i));
}
// let answer = '';
// for( i=0; i<length; i++){
//     for(j=length-1;j >= 0; j--){
//         // console.log(i,j);
//         if(i >= j){
//             answer += '*';
//         }else{
//             answer += ' ';
//         }
//     }`
//     answer += '\n';
// }
// console.log(answer);
