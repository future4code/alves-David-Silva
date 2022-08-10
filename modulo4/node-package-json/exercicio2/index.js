const mathFunc = (op, num1, num2)=>{
    if(op == "add"){
        return num1 + num2
    } else if(op == "sub"){
        return num1 - num2
    } else if(op == "mult"){
        return num1 * num2
    } else if(op == "div"){
        return num1 / num2
    }
}

console.log(mathFunc(process.argv[2],+(process.argv[3]),+(process.argv[4])))