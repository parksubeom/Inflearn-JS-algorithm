function solution(s) {
  let answer = "";
  /*
  알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
  반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
  단 반복횟수가 1인 경우 생략합니다

  키포인트
  단어종류 구한다.
  종류별로 몇개들어있는지 갯수 구한다.

 */
  let arr = [...s]; // 문자열배열
  let set = [...new Set([...s])]; // 중복제거한 문자열 배열
  let result = []; // 문자별 중복갯수 담을 배열
  for (let el of set) {
    result.push(arr.filter((x) => x === el).length); // 각문자별로 중복이 몇개인지 result에 넣는다.
  }

  return set
    .map((el, idx) => (result[idx] > 1 ? el + result[idx] : el)) // 중복이 2개미만이면 따로 갯수를 안적어주고, 그 이상은 갯수를 적어준다.
    .join("");
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
