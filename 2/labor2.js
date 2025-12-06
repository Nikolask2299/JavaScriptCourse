alert('Напишите функцию, которая принимает три числовых параметра и возвращает произведение двух максимальных из них.');
let a = Number(prompt('Введите число a: ', '')),
    b = Number(prompt('Введите число b: ', '')),
    c = Number(prompt('Введите число c: ', ''));
alert('Ответ: ' + multiplyMax(a, b, c));
function multiplyMax(a, b, c) {
    if (a >= b && b >= c) {
        return a * b;
    } else if (b >= c && c >= a) {
        return b * c;
    } else if (c >= a && a >= b) {
        return c * a;
    } else if (a >= c && c >= b) {
        return a * c;
    } else if (b >= a && a >= c) {
        return b * a;
    } else {
        alert("Error");
    }
}


alert('Объявите функцию, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой». Продемонстрируйте вариант использования функции с передачей 1 и 2 параметров.');
let name = prompt('Введите имя: ', ''),
    rank = prompt('Введите звание: ', '');
printNameRank(name, rank);
function printNameRank(name, rank = 'рядовой') {
    alert(name + " " + rank);
}


alert('Объявите функцию, которая принимает на вход функционально выражение и набор параметров для его вызова, а возвращает результат вызова переданного функционального выражения.');
let expressNumber = function (a, b, c) {
    return a + b + c;
};
alert('Резултат a + b + c' + buildExpression(expressNumber, 2, 3, 4));  
function buildExpression(expres, a, b, c) {
    return expres(a, b, c)
}


alert('Объявите функцию, которая принимает на вход целые числа. Для чётных значений функция возвращает стрелочное выражение возведения числа в квадрат, а для нечётных – стрелочное выражение возведения в куб.');
let x = Number(prompt('Введите число: ', ''));
alert('Результат: ' + expressNumber(x));
function expressNumber(x) {
    if (x % 2 == 0) {
        return (x) => {
            return x * x;
        }
    } else {
        return (x) => {
            return x * x * x;
        }
    }
}


alert('Напишите рекурсивную функцию для расчёта факториала числа n.');
let n = Number(prompt('Введите число: ', ''));
alert('Результат: ' + factorial(n));
function factorial(n) {
    return n * (n > 1 ? factorial(n - 1) : 1);
}