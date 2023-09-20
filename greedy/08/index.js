/**
 * 주유소
 * 1. 첫번째는 무조건 다 거리만큼 리터 다 사야함.
 * 2. minValue를 만나기 전까지 계속 다 사야한다. 도착해야 하므로
 * 3. minValue를 만낫다면 남은 거리 다 산다.
 */
   const fs = require('fs');
   const path = require('path'); // path 모듈 추가
   const filePath = path.join(__dirname, 'example.txt');

   const input = fs.readFileSync(filePath).toString().split('\n'); //4    234    5241
   const diff_array = input[1].toString().split(' ').map(Number);
   let money_array = input[2].toString().split(' ').map(Number);
  let arr = [];

  let min = money_array[0];
   money_array.forEach((item,idx)=>{
     if(idx !== 0){
        if(item <min){
          arr.push(item);
          min = item;
        }else{
          arr.push(min);
        }
     }else{
       arr.push(item)
     }
   })

  let answer = 0;
  arr.forEach((item,idx)=>{
     if(!diff_array[idx]){
      diff_array[idx] = 0;
     }
    answer += item * diff_array[idx];
   })

   console.log(answer);