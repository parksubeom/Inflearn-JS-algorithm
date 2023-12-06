function solution(s, t) {
  /*
     한 개의 문자열을 입력받고,
     특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
     문자열의 길이는 100을 넘지 않습니다.
      
     키포인트
     s를 낱말단위로 나눈 후 r과 같은것들을 필터한 배열의 길이를 출력한다.
     */
  return [...s].filter((el) => el === t).length;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
