var myWindow;

let openWindow1 = () => {
    myWindow= window.open();
};

let openWindow2 = () => {
    myWindow= window.open(`https://www.yahoobaba.com`);
};

let openWindow3 = () => {
    myWindow= window.open(`https://www.yahoobaba.com`, `_black`);
};

let openWindow4 = () => {
    myWindow= window.open(`https://www.yahoobaba.com`, `_parent`);
};

let openWindow5 = () => {
    myWindow= window.open(`https://www.yahoobaba.com`, `_black`, `width=500px, height=500px, left=100px, top=400px`);
};

let openWindow6 = () => {
    myWindow= window.open(`https://www.yahoobaba.com`, `_parent`, `width=500px, height=800px`);
};

let closeWindow = () => { myWindow.close(); }