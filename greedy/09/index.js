/**
 * 회의실 배정
    1. 시작시간 기준으로 오름차순 정렬부터.
    2. 시작시간을 기준으로 끝나는 시간이 가장 min 한거 찾기.
    3. 그 min 한 친구에 끝나는시간 min 찾기...등...

 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const input = fs.readFileSync(filePath).toString().split('\n'); //11 , 1 4,  3 5..
const length = Number(input[0]);

let arr = [];

for(let i=1;i<=length;i++){
  arr.push(input[i].split(' ').map(Number));
}

const compare = (a,b)=>{
  if(a[1] != b[1]){
    return a[1]-b[1];
  }else{
    return a[0]-b[0]
  }
}

arr.sort(compare);

let cnt = 1;
let cur = 0;

for(let i=0; i< length; i++){

  console.log(arr[i][0], arr[cur][1]);
  if(arr[i][0] >= arr[cur][1]){
    cnt++;
    cur = i
  }

}
console.log(cnt);