
function func(){
    n1=Math.round(Math.random()*255)
    n2=Math.round(Math.random()*255)
    n3=Math.round(Math.random()*255)
    console.log(n1,n2,n3)
    document.querySelector("h2").textContent=`Background Color : rgb(${n1},${n2},${n3})`;
    document.querySelector("body").style.backgroundColor=`rgb(${n1},${n2},${n3})`;
}



