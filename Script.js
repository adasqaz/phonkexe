const element = document.getElementById("Phonk");
const Button = document.getElementById("Click");

function Click() {
element.style.display = "block";

Button.style.display = "none";

const fart = new Audio("./fart.mp3");
for (let i = 1; i < 10; i++) {
	fart.play();
}


function MoveRandomly() {
	const viewWidth = window.innerWidth;
	const viewHeight = window.innerHeight;
	const boxWidth = Phonk.offsetWidth;
	const boxHeight = Phonk.offsetHeight;

	const newX = Math.random() * (viewWidth - boxWidth);
	const newY = Math.random() * (viewHeight - boxHeight);

	const xPercent = (newX / viewWidth) * 100;
	const yPercent = (newY / viewHeight) * 100;

	Phonk.style.left = `${newX}px`;
	Phonk.style.top = `${newY}px`;
	Phonk.style.transform = 'none';
}

MoveRandomly();

setInterval(MoveRandomly, 10); 

window.addEventListener('resize', MoveRandomly);
}