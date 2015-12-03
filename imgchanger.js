var imageArray = ['../images/Barricade.jpg',
                  '../images/Bumblebee.jpg',
                  '../images/Fallen.jpg',
                  '../images/Megatron.jpg',
								  '../images/Optimus.jpg',
								  '../images/Ratchet.jpg',
								  '../images/SentinelPrime.jpg',
								  '../images/Starscream.jpg'];
var imageIndex = 0;

function nextImage(element) {
    var image = document.getElementById(element);
    imageIndex = (imageIndex + 1) % imageArray.length;
    image.src = imageArray[imageIndex];
}

// window.onload is fired when the entire page loads, including its
// content (images, css, scripts, etc.)
// It must be assigned a function.
window.onload = function() {
    // setInterval returns a number, representing the ID value of the
    // timer that is set. It cannot be directly assigned to
    // window.onload.
    setInterval(nextImage, 5000, "changing_image");
}