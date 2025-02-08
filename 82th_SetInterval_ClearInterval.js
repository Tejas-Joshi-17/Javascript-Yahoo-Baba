
let a = 0
let Time = 0

let set_Interval = setInterval(set_Interval_function, 600)

function set_Interval_function(){
    if(a==100){
        clearInterval(set_Interval)
    }else{
        a = a+10
        Time = a/10
        document.querySelector(".Box").style.marginLeft = `${a}px`
        if(a==100){
            document.querySelector("span").innerHTML = `<span style='color:red'>10 sec (Time Limit End)</span>`
        }else{
            document.querySelector("span").innerText = `${Time} sec`
        }
    }
}