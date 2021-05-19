// 11. 뮤직비디오 (결정알고리즘)
// 결정알고리즘은 기본이 이분 탐색이다.

function count(songs, capacity) {
    let cnt = 1,
        sum = 0;
    for (let x of songs) {
        if (sum + x > capacity) {
            cnt++;
            sum = x;
        } else sum += x;
    }
    return cnt;
}

function solution(m, songs) {
    let answer;
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a + b, 0);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(songs, mid) <= m) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));