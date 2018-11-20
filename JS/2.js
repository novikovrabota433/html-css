function link(){
    window.location.href="https://google.ru";
}

function theme(){
    document.getElementsByTagName("body")[0].innerCSS="";
    location.replace("1.html");
}

function flex(){
    /*узнать свойство элемента и записать его в переменную*/
    color = window.getComputedStyle(document.body).backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
}