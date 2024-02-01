console.log("Follow request")
var bttn = document.querySelector("button")
var istatus = document.querySelector("h4")

var flag = 0
bttn.addEventListener("click",function(){
    var a = Math.floor(Math.random()*5000);
    if(flag == 0){
        bttn.innerHTML = "Sending"
       
        istatus.innerHTML = "Request Sending"
        istatus.style.color = "yellow"
       setTimeout(function(){

        bttn.innerHTML = "Remove Friend"
        istatus.style.color = "green"
        istatus.innerHTML = "Friend"
        flag = 1



       },a)
        
    }
    else{
        bttn.innerHTML = "Add Friend"
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"

       
        
        flag = 0
    }
})