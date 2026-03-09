const user=JSON.parse(localStorage.getItem("currentUser"))

if(!user){

alert("Login first")
window.location="login.html"

}

let jobs=JSON.parse(localStorage.getItem("customJobs"))||[]

const list=document.getElementById("postedJobs")

list.innerHTML=""

jobs.forEach(job=>{

if(job.recruiter===user.email){

const li=document.createElement("li")

li.innerText=job.title+" - "+job.company

list.appendChild(li)

}

})