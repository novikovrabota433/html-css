var count = 0;

function toggle(){
    if (count%2==0){animatsiaTurnOn();}else animatsiaTurnOff();
}

function animatsiaTurnOn(){
    
var margin = document.getElementById('menu');
    margin.style.cssText='left: 40%;';

count++;
}


function animatsiaTurnOff(){

var margin = document.getElementById('menu');
    margin.style.cssText='left: -40%;';

count++;
}

var a = count;
while(count%2==0)
{
document.getElementById('button');
a.style.cssText='left: 40%;';
}
document.getElementById('button');
a.style.cssText='left: 0%;';