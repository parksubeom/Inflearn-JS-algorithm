function solution(n) {
  //자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.

  let anwer = Array(n)
    .fill()
    .map((_, idx) => idx + 1) // 배열을 N 만큼 인덱스로 채운다.
    .reduce((acc, cur) => acc + cur, 0); // 이후 해당배열을 더한값을 구한다.
  return anwer;
}

console.log(solution(10));
