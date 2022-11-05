const ansVar = document.getElementById('answer');
document.addEventListener('click', function math(){
    let ans = 0;
    if(op === '*'){
        ans = num1 * num2;
    } else if(op === '/'){
        ans = num1 / num2;
    } else if (op === '+') {
        ans = num1 + num2;
    } else if (op === '-') {
        ans = num1 - num2;
    };
     ansString = parseFloat(ans) || parseInt(ans);
     ansVar.textContent = ansString;
     console.log(math.value)
});