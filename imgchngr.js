var imageArray = ['../images/workers/Barricade.jpg',
                  '../images/workers/Bumblebee.jpg',
                  '../images/workers/ironhide.jpg',
                  '../images/workers/blackout.jpg',
		  '../images/workers/Optimus.jpg',
		  '../images/workers/Ratchet.jpg',
		  '../images/workers/SentinelPrime.jpg',
		  '../images/workers/Starscream.jpg'];
var imageIndex = 0;

function nextImage(element) {
    var image = document.getElementById(element);
    imageIndex = (imageIndex + 1) % imageArray.length;
    image.src = imageArray[imageIndex];
};
window.onload = function() {
    setInterval(nextImage, 5000, "changing_image");
};
