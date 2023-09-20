/**
 * 신입 사원
 * 서류심사 성적과 면접시험 성적 중 "적어도 하나가" 다른 지원자보다 떨어지지 않는 자만 선발한다는 원칙을 세웠다. 
 * 즉, 어떤 지원자 A의 성적이 B의 성적에 비해 서류 심사 결과와 면접 성적이 모두 떨어진다면 A는 결코 선발되지 않는다.
 * 
 * 2 테스트 개수
 * 5 지원자 숫자
 *     서류 OR 면접  결과
 * 1번 : 3    2     o
 * 2번 : 1    4     o
 * 3번 : 4    1     o
 * 4번 : 2    3     o     
 * 5번 : 5    5     x
 * 
 * 4명이나 뽑힌다고?
 *  *    서류 OR 면접  결과
 *  1번 :   3    6    x
 *  2번 :   7    3    x
 *  3번 :   4    2    o
 *  4번 :   1    4    o
 *  5번 :   5    7    x
 *  6번 :   2    5    x
 *  7번 :   6    1    o
 * 
 * 3명밖에 안뽑힌다고? ㅋㅋ
 */
   const fs = require('fs');
   const path = require('path'); // path 모듈 추가
   const filePath = path.join(__dirname, 'example.txt');
   const input = fs.readFileSync(filePath).toString().split('\n'); //2 5 3

   const length = Number(input[0]); //2
   
   const START = 1;
   let array = [];
   let firstIndx  = START;
   
   for(let i=1; i<=length; i++){

      let human = Number(input[firstIndx]); //5

      for(let j=0; j< human; ++j){
        array.push(input[j+firstIndx+1].split(' ').map(Number));
      }
      console.log(calc(array));
      array = [];
      firstIndx = human+ firstIndx + START;
    }

  let answer = '';
   function calc(array){
     array.sort(compare);
     let minVal = 100001;
     let count = 0;
     for(let [x,y] of array){
       if(y < minVal){
         minVal = y;
         count++;
       }
     }

     return count;
   }

   function compare(a,b){
     return a[0]-b[0];
   }