let jobs=[]

fetch("jobs.json")
.then(res=>res.json())
.then(data=>{

let customJobs=JSON.parse(localStorage.getItem("customJobs"))||[]

jobs=[...data,...customJobs]

displayJobs(jobs)

})

function displayJobs(list){

const container=document.getElementById("jobsContainer")

container.innerHTML=""

const user=JSON.parse(localStorage.getItem("currentUser"))

list.forEach(job=>{

const div=document.createElement("div")

div.className="job-card"

let buttons=""

if(user && user.role==="seeker"){

buttons=`
<button onclick="applyJob('${job.title}')">Apply</button>
<button onclick="saveJob('${job.title}')">Save</button>
`

}

div.innerHTML=`

<h3>${job.title}</h3>
<p>${job.company}</p>
<p>${job.location}</p>
<p>${job.salary||""}</p>

${buttons}

`

container.appendChild(div)

})

}

function searchJobs(){

const text=document.getElementById("search").value.toLowerCase()

const filtered=jobs.filter(j=>j.title.toLowerCase().includes(text))

displayJobs(filtered)

}

function applyJob(title){

const user=JSON.parse(localStorage.getItem("currentUser"))

if(!user){

alert("Login first")
return

}

let apps=JSON.parse(localStorage.getItem("applications"))||[]

const exists=apps.find(a=>a.user===user.email && a.job===title)

if(exists){

alert("Already applied")
return

}

apps.push({user:user.email,job:title})

localStorage.setItem("applications",JSON.stringify(apps))

alert("Application submitted")

}

function saveJob(title){

let saved=JSON.parse(localStorage.getItem("savedJobs"))||[]

if(saved.includes(title)){

alert("Already saved")
return

}

saved.push(title)

localStorage.setItem("savedJobs",JSON.stringify(saved))

alert("Job saved")

}