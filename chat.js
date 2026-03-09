function sendMessage(){

const msg=document.getElementById("message").value

let chat=JSON.parse(localStorage.getItem("chat"))||[]

chat.push(msg)

localStorage.setItem("chat",JSON.stringify(chat))

}