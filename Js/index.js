// room slider
const galleryContainer = document.querySelector(".gallery-container")
const galleryItems = galleryContainer.querySelectorAll(".gallery-item")
const nextButtons = document.querySelectorAll(".next-button")

let currentSlide = 0

function showSlide(slideIndex) {
	galleryItems.forEach((item, index) => {
		item.classList.remove("active")
		if (index === slideIndex) {
			item.classList.add("active")
		}
	})
}

showSlide(currentSlide) // Show the first slide initially

nextButtons.forEach((button) => {
	button.addEventListener("click", () => {
		console.log("Button clicked") // Check if the click event is triggered
		currentSlide++
		console.log("Current Slide:", currentSlide) // Check the currentSlide value
		console.log("galleryitems", galleryItems.length) // Check the number of galleryItems

		if (currentSlide >= galleryItems.length) {
			currentSlide = 0 // Loop back to the first slide
		}

		showSlide(currentSlide)
	})
})

// testimonial slider
const testimonialGalleryContainer = document.querySelector(".testimonial-gallery-container")
const testimonialGalleryItems = document.querySelectorAll(".testimonial-gallery-item")
const nextButton = document.querySelector(".next-btn")
const prevButton = document.querySelector(".previous-btn")

let currentIndex = 0
const totalItems = testimonialGalleryItems.length
const itemWidth = testimonialGalleryItems[0].offsetWidth

function moveSlider(direction) {
	currentIndex += direction

	if (currentIndex >= totalItems) {
		currentIndex = 0
	} else if (currentIndex < 0) {
		currentIndex = totalItems - 1
	}

	const offset = -currentIndex * itemWidth
	testimonialGalleryContainer.style.transform = `translateX(${offset}px)`
}

nextButton.addEventListener("click", () => {
	moveSlider(1)
})

prevButton.addEventListener("click", () => {
	moveSlider(-1)
})
