// Вариант 4


function multMaxandMin(array) {

    if (array.length < 2) {
        console.log("Array must have at least two elements");
        return 0;
    }

    maxInd = 0
    minInd = 0

    for (i = 0; i < array.length; i++) {
        if (array[i] > array[maxInd]) {
            maxInd = i;
        }
        if (array[i] < array[minInd]) {
            minInd = i;
        }
    }

    start = 0
    end = 0

    if (maxInd > minInd) {
        start = minInd;
        end = maxInd;
    } else {
        start = maxInd;
        end = minInd;
    }

    if (start >= end) {
        console.log("start index is greater than end index");
        return 0;
    }

    result = 1
    for (i = start; i < end; i++) {
        result *= array[i];
    }

    return result;
}

function minEvenElem(matrix) {
   let res = []

    for (let i = 0; i < matrix.length; i++) {
        let min = null;

        for (let j = 0; j < matrix[i].length; j++) {

            if (matrix[i][j] % 2 == 0) {
                if (min == null || matrix[i][j] < min) {
                    min = matrix[i][j];
                }
            }

        }
        res.push(min);
    }

    return res;
}

const array1 = [5, 3, 8, 1, 9, 2, 7];   
const array2 = [4, 0, -2, 5, 0, 3, -1];

const matrix1 = [
    [3, 5, 1],
    [2, 4, 7],
    [8, 6, 9]
];
const matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("array1:", multMaxandMin(array1));
console.log("array2:", multMaxandMin(array2));

console.log("matrix1:", minEvenElem(matrix1));
console.log("matrix2:", minEvenElem(matrix2));

