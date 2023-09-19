/**
  수들의 합
 */
  const fs = require('fs');
  const path = require('path'); // path 모듈 추가
  const filePath = path.join(__dirname, 'example.txt');
  let input = fs.readFileSync(filePath).toString().split('\n');
  let s = Number(input[0]); //이거 안해서 틀렷네..참..
  
  let n=0;
// 1 2
  let sum = 0;
  while(sum <= s){  //0 < 2 1 < 2 
    sum += ++n;  //sum = 1
   }



  console.log(n-1);