const user=JSON.parse(localStorage.getItem("currentUser"))

if(!user){

alert("Login first")
window.location="login.html"

}

if(user.role!=="recruiter"){

alert("Only recruiters allowed")
window.location="index.html"

}

function postJob(){

const title=document.getElementById("title").value
const company=document.getElementById("company").value
const location=document.getElementById("location").value

if(!title||!company||!location){

alert("Fill all fields")
return

}

let jobs=JSON.parse(localStorage.getItem("customJobs"))||[]

jobs.push({

title,
company,
location,
recruiter:user.email

})

localStorage.setItem("customJobs",JSON.stringify(jobs))

alert("Job posted")

}