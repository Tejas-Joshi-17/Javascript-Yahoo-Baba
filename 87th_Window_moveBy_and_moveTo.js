var myWindow

let openWindow1 = () => {
    // we cann't move another website
    myWindow = window.open(``, `_blank`)
    myWindow.document.write(`<p>This is Our Website</p>`)
}

let openWindow2 = () => {
    myWindow = window.open(`https://www.yahoobaba.com`, `_parent`)
}

let openWindow3 = () => {
    myWindow = window.open(`https://www.yahoobaba.com`, `_blank`, `heigth=400px, width=600px`)
}

let openWindow4 = () => {
    myWindow = window.open(`https://www.yahoobaba.com`, `_parent`, `heigth=400px, width=600px`)
}

let moveWindow = () => {
    myWindow.moveTo(100, 200)
    myWindow.focus()
}