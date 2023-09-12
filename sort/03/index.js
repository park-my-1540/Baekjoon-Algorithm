/**
 * 좌표 정렬하기
 * 문제 
 * 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
    길이가 짧은 것부터
    길이가 같으면 사전 순으로
    단, 중복된 단어는 하나만 남기고 제거해야 한다.
    
 * 입력 : 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)이 주어진다. 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi가 주어진다. 
 *      (-100,000 ≤ xi, yi ≤ 100,000) 좌표는 항상 정수이고, 위치가 같은 두 점은 없다.
 * 출력 : 첫째 줄부터 N개의 줄에 점을 정렬한 결과를 출력한다.
 * 
i
im
it
no
but
more
wait
wont
yours
cannot
hesitate
 * 
 * 
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let array = [];
for(let i=1; i<=length; i++){
   array.push(inputData[i].split(' ').toString());
}
array = [...new Set(array)];

const compare = (a,b) => {
   if(a.length !== b.length){
      return a.length - b.length;
   }
   else{
      if(a < b) return -1;
      else if( a > b) return 1;
      else return 0;
   }
}
/**
   return < 0 a,b
   return > 0 b,a
 */
array.sort(compare);

let answer = '';
for( item of array ){
   answer += item+'\n';
}

console.log(answer);