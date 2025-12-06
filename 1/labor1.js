//вариант 4

alert('Избыточным называется положительное целое число, сумма положительных собственных делителей (отличных от x) которого превышает x.');

let x = Number(prompt('Введите положительное число: ', ''));

if (x < 0 || Number.isNaN(x)) {
    alert(`Введено неверное число`);
} else {
    let mass = Array.from(massDivisors(massPrimeFactors(x)));
    let sum = summ(mass);
    if (sum > x) {
        alert(`Число ${x} является избыточным. Сумма делителей ${sum}.`);
    } else {
        alert(`Число ${x} не является избыточным. Сумма делителей ${sum}.`);
    }
}

function summ(arr) {
    if (arr.length == 0) {
        return 0;
    } else {
        return arr.reduce((a, b) => a + b);
    }
}

function massDivisors(arr) {
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        let mul = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] * arr[j] < x) {set.add(arr[i] * arr[j])}
            mul *= arr[j];
            if (mul < x) {set.add(mul);}
        }
    }

    set.add(1);
    return set;
}

function massPrimeFactors(x) {
    let arr = [];

    LOOP:
    for (let j = 0; j < x; j++) {
        for (let i = 2; i <= x; i++) {
            if (x % i == 0) {
                arr.push(i);
                x = x / i;
                continue LOOP;
            }
        }
    }

    return arr;
}