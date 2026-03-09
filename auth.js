function register(){

const name=document.getElementById("name").value
const email=document.getElementById("email").value
const password=document.getElementById("password").value
const dob=document.getElementById("dob").value
const role=document.getElementById("role").value

if(!name||!email||!password||!dob||!role){

alert("Fill all fields")
return

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

if(!emailPattern.test(email)){

alert("Invalid email")
return

}

let users=JSON.parse(localStorage.getItem("users"))||[]

const exists=users.find(u=>u.email===email)

if(exists){

alert("User already exists")
return

}

users.push({name,email,password,dob,role})

localStorage.setItem("users",JSON.stringify(users))

alert("Account created")

window.location="login.html"

}

function login(){

const email=document.getElementById("email").value
const password=document.getElementById("password").value

let users=JSON.parse(localStorage.getItem("users"))||[]

const user=users.find(u=>u.email===email && u.password===password)

if(user){

localStorage.setItem("currentUser",JSON.stringify(user))
window.location="jobs.html"

}else{

alert("Invalid login")

}

}