/**
 * 소트인사이드
 * 배열을 정렬하는 것은 쉽다. 수가 주어지면, 그 수의 각 자리수를 내림차순으로 정렬해보자.

   입력
   첫째 줄에 정렬하려고 하는 수 N이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이다.

   출력
   첫째 줄에 자리수를 내림차순으로 정렬한 수를 출력한다.
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

let inputData = fs.readFileSync(filePath).toString().split('\n');
let n = inputData[0];

let cnt = Array(10).fill(0);

for(let x of n){
   cnt[Number(x)]++;
}

let answer='';
for (let i= 9; i>=0; i--){ //9부터 0까지 역순으로 반복.
   for(let j=0; j<cnt[i];j++){ //cnt[i]만큼 반복 (i의 갯수)
      answer += i+'';
   }
}
console.log(answer);