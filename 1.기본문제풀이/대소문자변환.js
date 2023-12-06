function solution(s) {
  /*
      대문자와 소문자가 같이 존재하는 문자열을 입력받아 
      대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

      키포인트
      charcodeAt으로 아스키코드 값을 받아서 대소문자 판별 후 바꿔준다.
      97 이상 = 소문자
      97 이하 = 대문자
     */
  return [...s]
    .map((el) => (el.charCodeAt() > 97 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
}

console.log(solution("StuDY"));
