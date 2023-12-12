const readline = require("readline");
const fs = require("fs");
const { start } = require("repl");

const rl = readline.createInterface({
  input:
    process.platform === "linux"
      ? process.stdin
      : fs.createReadStream("input.txt"),
  output: process.stdout,
  terminal: false,
});

let inputLines = [];

rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  const input = inputLines.map((el) => +el)[0];
  /*
    1. -가 3N개 있는 문자열에서 시작한다.
    2. 문자열을 3등분 한 뒤, 가운데 문자열을 공백으로 바꾼다. 이렇게 하면, 선(문자열) 2개가 남는다.
    3. 이제 각 선(문자열)을 3등분 하고, 가운데 문자열을 공백으로 바꾼다. 이 과정은 모든 선의 길이가 1일때 까지 계속 한다.
   */
  let n = 3 ** input;
  let bar = "-".repeat(n).split("");
  0;
  function dfs(n) {
    if (n[1] === " ") {
      return;
    }
    n.splice(n.length / 3, n.length / 3, [..." ".repeat(n.length / 3)]);
    bar = n.flat().join(" ");
    dfs(n.flat().join(" "));
  }
  dfs(bar);
  console.log([...bar].join(""));
});
