const form = document.querySelector("form")
const div = document.getElementById('div')
const baseURL = 'http://localhost:4004/api/'
const img = document.querySelector("image")
const deleteBtn = document.getElementById('delete')
const createHouse = body => axios.post(baseURL).then(createHouseCard)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

}

function createHouseCard(house) {
    const houseCard = document.createElement('div')
    houseCard.classList.add('house-card')

    houseCard.innerHTML = `<img alt='house cover image' src=${house.imageURL} class="house-cover-image"/>
    <p class="address">${house.address}</p>
    <div class="btns-container">
        <button onclick="updateHouse(${house.id}, 'minus')">-</button>
        <p class="house-price">$${house.price}</p>
        <button onclick="updateHouse(${house.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteHouse(${house.id})">delete</button>
    `


    housesContainer.appendChild(houseCard)
}

const deleteImg = () =>{
    img.delete()
}


form.addEventListener('submit', submitHandler);
deleteBtn.addEventListener('click', deleteImg)