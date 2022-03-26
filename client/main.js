

const complimentBtn = document.getElementById('complimentButton')
const fortuneBtn = document.getElementById('fortuneButton')
const studentContainer = document.querySelector('#student-ct')


const baseURL = "http://localhost:4000/api"


const renderStudents = (data) => {
    studentContainer.innerHTML = ``;
    data.forEach((s) => {
        let nameHeading = document.createElement("h3");
        let xbtn = document.createElement("p");
        xbtn.textContent = "x";
        xbtn.addEventListener("click", handleDelete);
        nameHeading.textContent = s.name;
        nameHeading.value = s.id;
        nameHeading.appendChild(xbtn);
        studentContainer.appendChild(nameHeading);
    });
};


const complimentUser = () =>{
    axios.get(`${baseURL}/compliment`)
    .then((response) => {
        const compliment = response.data
        alert(compliment)
    });
};

const giveFortune = () =>{
    axios.get(`${baseURL}/fortune`)
    .then((response) => {
        const fortune = response.data
        alert(fortune)
    });
};

const allStudents = () =>{
    axios.get(`${baseURL}/students`)
    .then((res) =>{
        console.log(res.data)
        renderStudents(res.data);
    })
    .catch((err) => console.log(err));
}

window.addEventListener('DOMContentLoaded', allStudents)


let userInput = document.querySelector('#std-input')
let submitBtn = document.querySelector('#submitBtn')

const addNewStudent = () => {
    //get users input
    let studentName = userInput.value
    console.log(studentName)
    //make axios call to attach input to the body/send it
    axios.post(`${baseURL}/students`, { studentName })
    .then((res) => {
        console.log(res.data)
        renderStudents(res.data)
    })
    .catch(err => console.log(err))
    //after results, can re-render list
}

const handleDelete = (event) => {
    const id  = event.target.value
    axios.delete(`${baseURL}/students/${id}`)
    .then((res) =>{
        console.log(res.data)
        renderStudents(res.data)
    })
}

axios.post(`${baseURL}/students`, {
    name: 'joejon',

})
.then(function (response){
    console.log(studentContainer)
})

complimentBtn.addEventListener('click', complimentUser)
fortuneBtn.addEventListener('click', giveFortune)
submitBtn.addEventListener('click', addNewStudent)

