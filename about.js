console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');
let img = document.querySelector('img')

form.addEventListener('submit', handleSubmit);

img.addEventListener('mouseover', () => {
	alert('nice hat')
})

