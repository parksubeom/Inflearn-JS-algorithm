function solution(s) {
  /*
    앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
    문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
    단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
    
    키포인트
    
    */
  let eng = /[^a-zA-Z]/g; // 알파벳 정규표현식
  let result = s.toUpperCase().replace(eng, ""); // 입력받은 문자열에서 알파벳만뺴고 지워준다.
  return [...result].reverse().join("") === result ? "YES" : "NO"; // 뒤집은값과 기존값이 같으면 팰린드롬이므로 yes 출력
}

let str = "found7, time: study; Ydts; emit, 7Dnuof";
console.log(solution(str));
