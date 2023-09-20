/**
 * 주유소
 * 핵심아이디어
 * 주유비용을 비오름차 순으로 변경한다. => 자기보다 뒤에 있는 비싼 주유소에 대해서 미리 결제하는것으로 이해...
 */
   const fs = require('fs');
   const path = require('path'); // path 모듈 추가
   const filePath = path.join(__dirname, 'example.txt');

   const input = fs.readFileSync(filePath).toString().split('\n'); //4    234    5241
   const CITY_LENG = Number(input[0]);
   const diff_array = input[1].split(' ').map(Number);
   let money_array = input[2].split(' ').map(Number);

  let min = money_array[0];

  for(let i=0; i < CITY_LENG; i++){
    min = Math.min(min, money_array[i]); // 지금까지의 쵯소값이네...하....머리 를 탁 친다...
    money_array[i] = min;
  }

  let answer = BigInt(0);// 큰 정수를 처리할때는 BigInt를 사용.
  for(let val = 0; val<CITY_LENG-1; val++){
    answer += BigInt(money_array[val]) * BigInt(diff_array[val]);
  }
  console.log(String(answer)); //뒤에붙은 n 제거