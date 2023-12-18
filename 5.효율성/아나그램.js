function solution(str1, str2) {
  let arr = [...str1].sort();
  let arr2 = [...str2].sort();
  let board = {};
  arr.forEach((el) => {
    board[el] = 0;
  });
  arr.forEach((x) => {
    board[x] = board[x] + 1;
  });
  arr2.forEach((y) => {
    board[y] = board[y] - 1;
  });
  return Object.values(board).reduce((acc, cur) => acc + cur, 0) === 0
    ? "YES"
    : "NO";
}

let a = "cba";
let b = "abc";
console.log(solution(a, b));
