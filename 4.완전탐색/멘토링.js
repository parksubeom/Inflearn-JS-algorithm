function solution(test) {
  /*
     만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면,
    A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다. 

    키포인트
    모든시험동안 내 뒤에 등수에 있는애들만 멘토링이가능하다.
    어찌됐건 본인의 가장 않좋은 성적일때에도 뒤에 있던애들만 멘토링가능
    exam.length - 1 - idx 는 현재 자신뒤에 있는 사람들의 수를 가리킨다
    exam.length 가 4라면 여기서 1을빼면 등수별 인덱스이고, 해당학생의 등수(인덱스)를 빼주면 3-0 = 3
    즉 이번회차 시험에서 3명의 학생의 멘토링이; 가능하다는 뜻
    이런방식으로 매 시험마다 본인이 멘토링 가능한 학생의 수 중에서 가장 작은수가 최종적으로 해당학생이 멘토링 가능한 학생의 수
    경우의수를 구하는 문제이기떄문에 누구와 누가 멘토링하는지는 중요치않고 경우의수만 구해주면 된다.
     */

  let result = {};
  test[0].forEach((el) => {
    result[el] = 0;
  });
  test.forEach((exam, index) => {
    exam.forEach((el, idx) => {
      if (index > 0) {
        result[el] =
          result[el] < exam.length - 1 - idx
            ? result[el]
            : exam.length - 1 - idx;
      } else {
        result[el] = exam.length - 1 - idx;
      }
    });
  });
  return Object.values(result).reduce((acc, cur) => acc + cur, 0);
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
