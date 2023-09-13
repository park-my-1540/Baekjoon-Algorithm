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

 * 1. 중복제거
 * 2. 매핑
 * 
 */
  /**
   * 맵(Map) 자료형
   * - "키"가 있는 데이터를 저장한다는 것은 "Object"와 유사함, 다만 맵은 키에 "다양한 자료형"을 허용한다. 💡
   *
   * 맵 프로퍼티s
   * - new Map() : 맵 생성
   * - map.set(key, value) : key를 이용해 value 저장
   * - map.get(key) : key에 해당하는 값을 반환, key가 존재하지 않으면, undefinde
   * - map.has(key) : key 가 존재하면 true, 아니면 false
   * - map.delete(key) : key 에 해당하는 "값을 삭제"
   * - map.clear() : 맵 안에 모든 요소를 제거
   * - map.size : 맵 요소의 개수를 반환
   *
   * 맵 사용시, 유의점 🔍
   * - map[key] 형식을 사용하지 않도록 한다.
   * - 사용할 수 있긴 하나, 이는 곧 map을 "일반 객체"처럼 취급하게 된다. 고로 여러 제약이 발생한다.
   * - map을 사용할 때는, map 전용 메서드 set, get 등을 사용할 것 💡
   */
const fs = require('fs');
const path = require('path'); // path 모듈 추가
const filePath = path.join(__dirname, 'example.txt');

const inputData = fs.readFileSync(filePath).toString().split('\n');
const length = Number(inputData[0]);

let array = inputData[1].split(' ').map(Number);
let sortArray = [...new Set(array)]; //중복제거 array 복사

//1 4    1-4 - 4 1
const compare = (a,b)=>{
   if(a < b) return -1;
   else if(a>b) return 1;
   return 0;
}
// const compare = (a,b)=>{ 유사
//    return a-b;
// }
// sortarray  -10 -9 2 4
// array      2 4 -10 4 -9

/**
 * 2 : 2
 * 4 : 3
 * -10 :0
 * -9 : 1
 */
sortArray.sort(compare); // -10 -9 2 4
console.log(sortArray);
let mySet = new Map();
sortArray.forEach((item, idx)=>{
   mySet.set(item, idx);
})
let answer = '';
for( data of array ){
   answer += mySet.get(data)+' ';
}
console.log(answer);
