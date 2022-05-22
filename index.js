// Modifying Doggos header
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

// Modifying dogs' images
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

// Modifying dogs' names
let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++){
	dogName[i].style.textAlign = "left"
	dogName[i].style.color = "blue"
}

// Alignment of the description for each dog
let dogdescription = document.querySelectorAll('.dog-description')
for(let i = 0; i < dogdescription.length; i++){
	dogdescription[i].style.textAlign = "left"
}

// Change the color of the footer text.
let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'
footer.style.backgroundColor = 'black'
footer.style.color = 'white'

