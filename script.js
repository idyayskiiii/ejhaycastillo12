const images = [
    "image-1.jpg",
    "image-2.jpg",
    "image-3.jpg",
    "image-4.jpg"
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");

function showImage(index, direction) {
    galleryImage.classList.remove("show");

    if (direction === "next") {
        galleryImage.classList.add("slide-left");
    } else {
        galleryImage.classList.add("slide-right");
    }

    setTimeout(() => {
        galleryImage.src = images[index];

        galleryImage.classList.remove("slide-left", "slide-right");

        void galleryImage.offsetWidth;

        galleryImage.classList.add("show");
    }, 400);
}

function nextImage() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex, "next");
}

function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage(currentIndex, "previous");
}