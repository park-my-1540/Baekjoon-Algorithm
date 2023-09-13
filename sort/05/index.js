/**
 * 나이순 정렬
 * 문제 
 * 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 
 * 이때,  회원들을 나이가 증가하는 순으로, 
 *       나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
 */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let members = [];
for(let i=1; i<=length; i++){
   let [age,name] = inputData[i].split(' ');
   members.push([Number(age),name]);
}

const compare = (a,b) => {
   if(a[1] !== b[1]){
      return a[1]-b[1];
   }else{
      return a[0]-b[0];
   }
}

members.sort((a,b)=>a[0]-b[0])
let answer = '';
for(let member of members){
   answer += `${member[0]} ${member[1]}\n`
}
console.log(answer);

//십만 이면 nlogn으로 해야해영.
// 같은값이면 들어온순서대로 stable sort 라고함.`