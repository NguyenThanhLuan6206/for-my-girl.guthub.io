// Function to open the modal and display the image with caption
function openModal(imgElement, captionText) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    var modalCaption = document.getElementById("modal-caption");

    // Set the clicked image as the modal content
    modalImg.src = imgElement.querySelector('img').src;

    // Set the caption text for the modal
    modalCaption.textContent = captionText;

    // Display the modal
    modal.style.display = "flex"; // Make the modal visible
    modal.classList.add("show");  // Add the animation effect
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("modal");

    // Add a small delay before fully hiding the modal for a smooth close effect
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";  // Hide the modal after the transition
    }, 500); // Match this duration with the CSS transition
}

// Optional: Add a click event outside the image to close the modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
