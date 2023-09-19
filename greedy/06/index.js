/**
 * A -> B
 * 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.

   200
   19개의 자연수 합이 200?
   1 2 3 4 5 6 7 8 9 10
   (1 + 19)
   1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19=> 190
   19=> 29 200
   140
   11 12
   1 ~ 11 => 132
   11 12
   11 대신 19
   n*(n+1) <= s
 */
   const fs = require('fs');
   const path = require('path'); // path 모듈 추가
   const filePath = path.join(__dirname, 'example.txt');
   let sum = Number(fs.readFileSync(filePath).toString().split('\n'));
   
   let answer = 1;
   let flag = false;
   let _val = 0;
   
   while(_val <= sum){ 
      _val = parseInt( (n*(n+1)) /2 ); //132
      n++
   }
   
   console.log(n-1);
   