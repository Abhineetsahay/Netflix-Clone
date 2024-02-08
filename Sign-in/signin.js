// adding text whenever user clicks learn more.
let button1=document.getElementById("button1");
let spandetails=document.getElementById("span-details");
button1.addEventListener("click",function fun(){
        button1.remove();
        spandetails.style.display="block";
})
