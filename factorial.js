function cal (num) {
    if (num === 0 || num === 1 ) {
        return 1;

    } else {
        return num * cal(num - 1);
    }
}
let result = cal(5)
console.log(result);

