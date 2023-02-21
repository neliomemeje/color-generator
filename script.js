const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".btn")

for(let i=0; i<30; i++){
	const divEl = document.createElement("div");
	divEl.classList.add("color-container");
	containerEl.appendChild(divEl)
}

const colorContainer = document.querySelectorAll(".color-container");

displayColor()

function displayColor(){
	colorContainer.forEach(colorEl => {
		const colorValue = randomColor()
		colorEl.style.backgroundColor = "#" + colorValue;
		colorEl.innerText = "#" + colorValue;

		colorEl.addEventListener("click", () => {
			navigator.clipboard.writeText("#" + colorValue);
			colorEl.innerText= "Copied to clipboard";

			setTimeout(()=> {
				colorEl.innerText = "#" + colorValue;
			}, 3000)

		})

	})
}


function randomColor(){
	const chars = "0123456789abcdef";
	const charLength = 6;
	let colorCode = ""; 

	for(let i=0; i<charLength; i++){
		const random = Math.floor(Math.random() * chars.length);
		colorCode += chars.substring(random, random + 1);	
	}
	return colorCode;
}

btnEl.addEventListener("click", displayColor)
