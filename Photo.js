const image = document.getElementById("image");
const contain= document.getElementById("contain");
const contain1= document.getElementById("contain1");
const contain2= document.getElementById("contain2");
const contain3= document.getElementById("contain3");
const contain4= document.getElementById("contain4");

function change(){
    const value= contain.value;
    const value1= contain1.value;
    const value2= contain2.value;
    const value3= contain3.value;
    const value4= contain4.value;
    image.style.transform = value;
    console.log(contain1);
    image.style.height = value1;
    image.style.filter = value2;
    image.style.filter = value3;
    image.style.border = value4;
    
}