/**
 * 좌표 정렬하기
 * 문제 
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
   Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
   X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

 * 입력 :
   첫째 줄에 N이 주어진다.
   둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

 * 출력 : 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.
 * 
   5
   2 4 -10 4 -9
 * 
 * 2 3 0 3 1
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let array = inputData[1].split(' ').map(Number);
let compareArray = [...array];
const compare = (a,b)=>{
   if(a < b) return -1;
   else if(a>b) return 1;
   return 0;
}

compareArray = compareArray.sort(compare); // -10 -9 2 4 4

/**
 * 
 * array    2  4 -10 4 -9  1000
 * 
 * compare -10 -9 2 4 4 
 * 
 *          2 3 0 3 1
 */
let answer = '';
array.some((item, idx) => {
   compareArray.some((item2,idx2)=> {
      if(item === item2){
         answer += compareArray.indexOf(item2) +' ';
         return true; //break
      }else{
         return false;
      }
   })
})


console.log(answer);