function solution(queries) {
  /*
 
    현재 재귀가 2세대이고,
    gane[Math.ceil(7/4)] 가 잡종이라면 gane[7%4]가 답이다.
    매 재귀마다 Math.ceil(7/4)를 해주고, 세대를 -1해준다
    */

  let gane = ["RR", "Rr", "Rr", "rr"];
  let result = [];
  function dfs(n) {
    let [세대, 인덱스] = n;
    if (세대 === 1) {
      result.push("Rr");
      return;
    }
    if (세대 === 2) {
      result.push(gane[인덱스 - 1]);
      return;
    }
    if (세대 === 3 && gane[Math.ceil(인덱스 / 4) - 1] === "Rr") {
      if (인덱스 % 4 === 0) {
        result.push(gane[4 - 1]);
      } else {
        result.push(gane[(인덱스 % 4) - 1]);
      }
      return;
    } else if (세대 === 3 && gane[Math.ceil(인덱스 / 4) - 1] !== "Rr") {
      result.push(gane[Math.ceil(인덱스 / 4) - 1]);
      return;
    }
    dfs([세대 - 1, Math.ceil(인덱스 / 4)]);
  }
  queries.forEach((el) => {
    dfs(el);
  });
  return result;
}
console.log(solution([[1, 1]]));
