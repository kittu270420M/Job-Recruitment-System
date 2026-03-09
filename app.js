const currentUser = JSON.parse(localStorage.getItem("currentUser"))

document.addEventListener("DOMContentLoaded", () => {

const loginLink=document.querySelector('a[href="login.html"]')
const registerLink=document.querySelector('a[href="register.html"]')
const logoutLink=document.querySelector('a[onclick="logout()"]')

if(currentUser){

if(loginLink) loginLink.style.display="none"
if(registerLink) registerLink.style.display="none"

}else{

if(logoutLink) logoutLink.style.display="none"

}

loadProfile()
loadProfileImage()
showApplications()
showSavedJobs()

})

// LOGOUT

function logout(){

localStorage.removeItem("currentUser")
window.location="index.html"

}

// PROFILE INFO

function loadProfile(){

if(!currentUser) return

const name=document.getElementById("userName")
const email=document.getElementById("userEmail")

if(name) name.innerText=currentUser.name
if(email) email.innerText=currentUser.email

}

// EDIT PROFILE

function editProfile(){

if(!currentUser) return

const newName=prompt("Enter new name",currentUser.name)

if(!newName) return

currentUser.name=newName

localStorage.setItem("currentUser",JSON.stringify(currentUser))

let users=JSON.parse(localStorage.getItem("users"))||[]

users=users.map(u=>{

if(u.email===currentUser.email){

u.name=newName

}

return u

})

localStorage.setItem("users",JSON.stringify(users))

location.reload()

}

// PROFILE IMAGE

function uploadImage(){

const file=document.getElementById("imageUpload").files[0]

if(!file){

alert("Select image")
return

}

const reader=new FileReader()

reader.onload=function(e){

localStorage.setItem("profileImage_"+currentUser.email,e.target.result)
loadProfileImage()

}

reader.readAsDataURL(file)

}

function loadProfileImage(){

if(!currentUser) return

const img=localStorage.getItem("profileImage_"+currentUser.email)

const image=document.getElementById("profileImage")
const icon=document.getElementById("defaultIcon")

if(img && image){

image.src=img
image.style.display="block"

if(icon) icon.style.display="none"

}

}

// RESUME

function uploadResume(){

const file=document.getElementById("resumeFile").files[0]

if(!file){

alert("Select resume")
return

}

if(!file.name.endsWith(".pdf")){

alert("Upload PDF only")
return

}

let resumes=JSON.parse(localStorage.getItem("resumes"))||[]

resumes.push({

email:currentUser.email,
name:currentUser.name,
file:file.name,
date:new Date().toLocaleDateString()

})

localStorage.setItem("resumes",JSON.stringify(resumes))

const status=document.getElementById("resumeStatus")

if(status){

status.innerText="Resume uploaded: "+file.name

}

}

// APPLICATIONS

function showApplications(){

const list=document.getElementById("applications")

if(!list) return

list.innerHTML=""

let apps=JSON.parse(localStorage.getItem("applications"))||[]

apps.forEach(app=>{

if(currentUser && app.user===currentUser.email){

const li=document.createElement("li")
li.innerText=app.job
list.appendChild(li)

}

})

}

// SAVED JOBS

function showSavedJobs(){

const savedList=document.getElementById("savedJobs")

if(!savedList) return

savedList.innerHTML=""

let saved=JSON.parse(localStorage.getItem("savedJobs"))||[]

saved.forEach(job=>{

const li=document.createElement("li")
li.innerText=job
savedList.appendChild(li)

})

}