/**
 * 과제
 * 첫 줄에 정수 N (1 ≤ N ≤ 1,000)이 주어진다.
   다음 줄부터 N개의 줄에는 각각 두 정수 d (1 ≤ d ≤ 1,000)와 w (1 ≤ w ≤ 100)가 주어진다. d는 과제 마감일까지 남은 일수를 의미하며, w는 과제의 점수를 의미한다.
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

let inputData = fs.readFileSync(filePath).toString().split('\n');
let n = inputData[0]; //갯수

let assign = [];
let max_day = 0;
for (let i=1; i<=n ; i++){
   let [ day, weight ] = inputData[i].split(' ').map(Number);
   assign.push({day:day,weight:weight});
   max_day = Math.max(max_day,day);
}
let answer = 0;
for( let i=max_day; i > 0; i-- ) {
   answer += getMaximumScoreInDay(assign, i);
}
console.log(answer);

function getMaximumScoreInDay(assignList, now){

   let idx = -1;
   let result = 0;
for( let i=0; i<assignList.length; i++){
   if(assignList[i].day >= now ){
      idx = i;
      result = assignList[i].weight;
      console.log(assignList[i].weight);
      }
   }
   if (result == 0) {
      return 0;
    }
   assignList.splice(idx);
   return result;
}