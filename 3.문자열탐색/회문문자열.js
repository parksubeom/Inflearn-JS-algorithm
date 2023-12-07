function solution(s) {
  /*
      앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
      문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
      단 회문을 검사할 때 대소문자를 구분하지 않습니다.
  
      키포인트
      뒤집어도 뒤집기전과 같으면 회문문자열이다.
       */
  s = s.toUpperCase();
  let result = [...s].reverse().join("");
  return s === result ? "YES" : "NO";
}

let str = "TOMMOT";
console.log(solution(str));
