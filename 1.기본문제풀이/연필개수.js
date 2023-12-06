function solution(n) {
  return Math.ceil(n / 12); // 연필을 하나씩 나눠주려면 학생수보다 연필의 갯수가 같거나 더 많아야 한다.
}

console.log(solution(178));
