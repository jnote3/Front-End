
/*
console.log(fetch('https://pbs.twimg.com/media/Fuxfm12WcAAvsme.jpg:large')

.then(response=>{
    console.log(response)
        return response.blob();
})

.then(blob => {
    console.log(blob)
    document.querySelector("#myTuna").src=URL.createObjectURL(blob)
})

.catch(error => {
    console.log(error)
})

)*/

const submit = document.querySelector('#submit')
submit.addEventListener('click', () => {
    let fname = document.querySelector('#fname')
    let lname = document.querySelector('#lname')
    let email = document.querySelector('#email')
    let gender = document.querySelector('#gender')

    let formData = {fname,lname,email,gender}

    fetch('https://bscs3a-crud-api.onrender.com/api/members', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers:{
            'Content-Type': 'application/json',
        }

    })
    

})




//id selector 
const content = document.querySelector("#content");

//loading page
window.addEventListener('load', ()=>{
    getUsers();

})
function getUsers(){
    fetch("https://bscs3a-crud-api.onrender.com/api/members", {mode:"cors"})
    //fetch("http://localhost:1001/api/employee", {mode:"cors"})
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element)=>{_
            html += `<li>${element.first_name} ${element.last_name}</li>`
        })
        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })
}