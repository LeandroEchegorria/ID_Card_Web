const buttons = document.querySelector(".contact");
const social= document.querySelector(".main");

buttons.addEventListener("click", (e)=>{
    e.preventDefault();    
    buttons.insertAdjacentHTML("afterend","<p>Choose the social network to contact me:</p>");
    social.style.visibility ="";
    buttons.style.visibility="hidden";
    
})

