const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calculate(){

    var quadNum1
    var quadNum2

    rl.question('Введiть перше число: ', (num1) => {
        rl.question('Введіть друге число: ', (num2)=> {
            rl.question('Введіть третьє число: ', (num3)=> {
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)
                num3 = parseFloat(num3)  

                let discriminant = num2 * num2 - 4 * num1 * num3;

                if (discriminant > 0){
                    quadNum1 = (-num2 + Math.sqrt(discriminant)) / (2 * num1);
                    quadNum2 = (-num2 - Math.sqrt(discriminant)) / (2 * num1);
                    console.log(`Коефіцієнти рівняння: ${quadNum1} та ${quadNum2}`);

                } else if (discriminant == 0) {
                    quadNum1 = quadNum2 = -num2 / (2 * num1);
                    console.log(`Коефіцієнти рівняння: ${quadNum1} та ${quadNum2}`);
                } else {
                    let actualPart = (-num2/ (2 * num1)).toFixed(2);
                    var unrealPart = (Math.sqrt(-discriminant) / (2 * num1)).toFixed(2);
                    console.log(
                        `Коефіцієнти рівняння: ${actualPart} + ${unrealPart}i та ${actualPart} - ${unrealPart}`
                      );
                };

            }) 
        });
    });
};


calculate()