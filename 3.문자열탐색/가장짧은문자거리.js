function solution(s, t) {
  /*
     한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

     키포인트
     indexOf는 가장 가까운 인덱스를 찾아준다. 
     현재인덱스를 기준으로 가장 가까운  t와의 거리를 찾아야한다.
     s.indexof(t,현재인덱스)
     s.lastIndexOf(t,현재인덱스)
     이 둘중 더 작은수를 담는다.
  */
  s = [...s];
  s.forEach((_, idx) => {
    console.log(
      Math.min(
        Math.abs(parseInt(s.indexOf(t, idx) - idx)),
        Math.abs(parseInt(s.lastIndexOf(t, idx) - idx))
      )
    );
  });
}

let str = "teachermode";
console.log(solution(str, "e"));
