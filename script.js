function newDog(){
	fetch("https://dog.ceo/api/breeds/image/random")
		.then(response => response.json())
		.then(data => {
			let dogImage = document.getElementById("dog_image")
			dogImage.src = data["message"]
		})
}
