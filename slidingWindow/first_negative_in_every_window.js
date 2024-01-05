function printFirstNegativeInteger(A, N, K) {
    let i = 0;
    let j = 0;
    const ans = [];
    const l = [];

    while (j < N) {
        if (A[j] < 0) {
            l.push(A[j]);
        }

        if (j - i + 1 < K) {
            j++;
        } else if (j - i + 1 === K) {
            if (l.length === 0) {
                ans.push(0);
            } else {
                ans.push(l[0]);
            }

            if (A[i] < 0) {
                l.shift();
            }

            i++;
            j++;
        }
    }

    return ans;
}

const A = [2, -3, 5, -2, 9, -7, 1, -25, 30];
const N = A.length;
const K = 3;

const result = printFirstNegativeInteger(A, N, K);
console.log(result);
