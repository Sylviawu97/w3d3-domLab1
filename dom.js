

let h1=document.getElementById("title");

h1.textContent="Welcome to my website!"
console.log(h1)

let button1=document.getElementById("hide")

button1.addEventListener("click",()=>{
    h1.style.display="none";
})

let button2=document.getElementById("unhide")
button2.addEventListener("click",()=>{
    h1.style.display="block";
})