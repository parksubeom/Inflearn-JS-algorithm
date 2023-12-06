function solution(a, b) {
  /*
     1은 2한테지고 3한테이긴다
     2는 3한테 지고 1한테 이긴다
     3은 1한테 지고 2한테 이긴다. 
     */
  let answer = "";
  for (let i = 0; i < 5; i++) {
    if (a[i] === 1) {
      b[i] === 2
        ? (answer += "B" + "\n")
        : b[i] === 1
        ? (answer += "D" + "\n")
        : (answer += "A" + "\n");
    } else if (a[i] === 2) {
      b[i] === 3
        ? (answer += "B" + "\n")
        : b[i] === 2
        ? (answer += "D" + "\n")
        : (answer += "A" + "\n");
    } else if (a[i] === 3) {
      b[i] === 1
        ? (answer += "B" + "\n")
        : b[i] === 3
        ? (answer += "D" + "\n")
        : (answer += "A" + "\n");
    }
  }
  return answer.trim();
}
let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
