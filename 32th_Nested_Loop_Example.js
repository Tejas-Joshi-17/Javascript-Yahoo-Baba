

for(var a = 1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(b + "  ")
    }
    document.write("<br>")
}
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5





for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}
// 1
// 2 2
// 3 3 3
// 4 4 4 4 
// 5 5 5 5 5





for(var a=5; a>=1; a--){
    for(var b=a; b>=1; b--){
        document.write(a + " ")
    }
    document.write("<br>")
}
// 5 5 5 5 5
// 4 4 4 4 
// 3 3 3
// 2 2
// 1





for(var a=5; a>=1; a--){
    for(var b=a; b>=1; b--){
        document.write(b + " ")
    }
    document.write("<br>")
}
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1