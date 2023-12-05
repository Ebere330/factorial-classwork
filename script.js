function printNumberPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
    let row = '';
    for (let j = 1; j <= rows - i; j++) {
    row += ' ';
    }
    
    for (let k = 1; k <= i; k++) {
    row += k + ' ';
    }
    console.log(row);
    }
    }
    
    const numberOfRows = 5;
    
    printNumberPyramid(numberOfRows);



    // question 2

    function findGCD(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
        }
        return a;
        }
        
        const num1 = 33;
        const num2 = 12;
        const gcd = findGCD(num1, num2);
        console.log(`The GCD of ${num1} and ${num2} is: ${gcd}`);
        

    