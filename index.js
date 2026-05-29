function Calculate(){
    var x1 = eval(prompt("Enter First Number"))
    var y2 = eval(prompt("Enter Your Second Number"))
    var op1 = prompt("What Shall I do ?")
    var result = justdoit(x1,y2,op1)
    alert(result)
}
//eval string o adad mikone
function justdoit(x,y,op){
    switch(op){
        case "+" :return(x+y);
        case "-" :return(x-y);
        case "*" :return(x*y);
    }
}