let users=JSON.parse(localStorage.getItem("users"))||[]

const userList=document.getElementById("users")

if(userList){

users.forEach(user=>{

const li=document.createElement("li")
li.innerText=user.name+" - "+user.role

userList.appendChild(li)

})

}

let jobs=JSON.parse(localStorage.getItem("customJobs"))||[]

const jobList=document.getElementById("jobs")

if(jobList){

jobs.forEach((job,index)=>{

const li=document.createElement("li")

li.innerHTML=job.title+" - "+job.company+
` <button onclick="deleteJob(${index})">Delete</button>`

jobList.appendChild(li)

})

}

function deleteJob(index){

let jobs=JSON.parse(localStorage.getItem("customJobs"))||[]

jobs.splice(index,1)

localStorage.setItem("customJobs",JSON.stringify(jobs))

location.reload()

}

let resumes=JSON.parse(localStorage.getItem("resumes"))||[]

const resumeList=document.getElementById("resumeList")

if(resumeList){

resumes.forEach(resume=>{

const li=document.createElement("li")

li.innerText=
resume.name+" ("+resume.email+") uploaded "+resume.file+" on "+resume.date

resumeList.appendChild(li)

})

}