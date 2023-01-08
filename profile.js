console.log('JS connected')

let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')


color.addEventListener('click', () => {
	alert('Green')
})

place.addEventListener('click', () => {
	alert('The mountians')
})

ritual.addEventListener('click', () => {
	alert('Wake up, get coffee')
})