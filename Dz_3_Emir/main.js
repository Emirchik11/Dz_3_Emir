function func(a, b) {
    return Math.min(a, b);
}


console.log(func(5, 9));

var userFunc = (str = prompt('Введите текст и она попадет в новости!')) => {
    if (!str.trim())
        return;
    console.log(str)
};
userFunc();


let num1 = Number(prompt("напишите первое число"))
let num2 = Number(prompt("напишите второе число"))
let operation = prompt("напишите + , - , * , /")

function calculator(a , b , c) {

    if(operation === "+"){
        return a + b;
    } else if(operation === "-"){
        return a - b;
    } else if(operation === "*"){
        return a * b;
    } else if(operation === "/" && b!==0){
        return a / b;
    } else if(operation === "/" && b===0){
        return  "на ноль делить нельзя"
    } else{
        return "не известный символ"
    }

}

console.log(calculator(num1, num2, operation))

