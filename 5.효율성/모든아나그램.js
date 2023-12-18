function anagram(str1, str2) {
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
function solution(s, t) {
  /*
      s를 t길이만큼 슬라이딩윈도우로 잘라보면서, 슬라이스배열이 아나그램인지 확인한다.
      
     */
  let end = t.length;
  let sarr = [...s];

  let cnt = 0;
  for (let start = 0; start < sarr.length; start++) {
    if (anagram(sarr.slice(start, end).join(""), t) === "YES") {
      cnt++;
    }
    end++;
  }
  return cnt;
}

let a = "bacaAbcbac";
let b = "abc";
console.log(solution(a, b));
