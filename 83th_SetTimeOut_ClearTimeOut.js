
let a = 0
let Time = 0

let set_TimeOut = setTimeout(set_Timeout_function, 11000)
let set_Interval = setInterval(set_Interval_function, 1000)

function set_Interval_function(){
    Time = Time+1 
    document.querySelector("span").innerText = `${Time} sec`
    if(Time == 11){
        document.querySelector("span").innerHTML = `<span style='color:green'>${Time} sec (setTimeOut Function Execuetd Succefully)</span>`
        clearInterval(set_Interval)
    }
}

function set_Timeout_function(){
    document.querySelector(".Box").style.marginLeft = `100px`
}

function clear_Timeout_function(){
    document.querySelector("span").innerHTML = `<span style='color:red'>${Time} sec (clearTimeOut Function Execuetd Succefully)</span>`
    clearInterval(set_Interval)
    clearTimeout(set_TimeOut)
}

document.querySelector("button").addEventListener("click", clear_Timeout_function)



let Set_Time_Out = setTimeout(Set_Time_Out_Function, 3000)

clearTimeout(Set_Time_Out)