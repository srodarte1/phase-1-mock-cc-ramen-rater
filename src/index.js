const handleClick = (e) => {
    //we click on ramenImg, and are able to see all the details of the ramen displayed inside ramen-detail 
    e.target.ramenImg = ramenObj.value

}
document.addEventListener('click', handleClick)


const displayRamens = (ramenObj) => {
    const ramenDiv = document.getElementById('ramen-menu')
    const ramenImg = document.createElement('img')
    ramenImg.src = ramenObj.image
    ramenDiv.appendChild(ramenImg)
    const ramenDetails = document.getElementById('ramen-detail')
    const ramenName = document.getElementsByClassName('name')
    const ramenRest = document.getElementsByClassName('restaurant')
    const ramenRating = document.getElementById('rating-display')
    
    
}

// const ramenObj = {}
const fetchRamens = () => {
    fetch("http://localhost:3000/ramens")
   .then(resp => resp.json())
   .then(ramenObj => ramenObj.forEach(displayRamens))
}
fetchRamens()

