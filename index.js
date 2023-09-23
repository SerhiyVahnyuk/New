const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main(num1,num2){
    return num1+num2+num1+num2;
}


function calculate(){
    rl.question('Введiть перше число: ', (num1) => {
        rl.question('Введіть друге число: ', (num2)=> {
                num1 = parseFloat(num1)
                num2 = parseFloat(num2)

                console.log(main(num1, num2))
            
                rl.close()

                


            })
        });
    }


calculate()