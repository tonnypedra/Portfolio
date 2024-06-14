document.addEventListener('DOMContentLoaded', () =>{
	const humburger = document.querySelector('.humburger-bars');
	const links = document.querySelector('.links')


	humburger.addEventListener('click',() =>{
		links.classList.toggle('nav-active')
		humburger.classList.toggle('fa-times')
	});
});