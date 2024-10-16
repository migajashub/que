




var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]); 
  };
  
  // Function to trigger the file upload when clicking the image
  var triggerFileUpload = function() {
    var fileInput = document.getElementById('file');
    fileInput.click(); // Simulate a click on the hidden file input
  };
  

  // Function to validate if an image is uploaded
var validateUpload = function(event) {
  var fileInput = document.getElementById('file');

// Check if the file input is empty
if (!fileInput.files || !fileInput.files[0]) {
    event.preventDefault(); // Stop the redirection
    alert("Por favor, sube una imagen antes de continuar."); // Display an alert to the user
  } else {
    // Allow redirection if a file is selected
    window.location.href = 'Form.html';
  }
};





let slideIndexes = {}; // To keep track of multiple sliders

function showSlide(index, sliderId) {
    const slides = document.getElementById(sliderId); // Get the specific slider by ID
    const totalSlides = slides.querySelectorAll('.square').length;
    const itemsPerSlide = 4; // Number of items to display at once
    const totalVisibleSlides = Math.ceil(totalSlides / itemsPerSlide);
    
// Update next button content if it's the last slide
const nextButton = slides.parentElement.querySelector('.next');

if (index >= totalVisibleSlides - 1) {
    slideIndexes[sliderId] = totalVisibleSlides - 1;
    nextButton.innerHTML = '⮩';
    nextButton.classList.add('last-slide');  // Add class when on the last slide
} else if (index < 0) {
    slideIndexes[sliderId] = 0;
} else {
    slideIndexes[sliderId] = index;
    nextButton.innerHTML = '&#10095;';
    nextButton.classList.remove('last-slide');  // Remove class when not on the last slide
}

    slides.style.transform = `translateX(${-slideIndexes[sliderId] * 100 / totalVisibleSlides}%)`;
}

function moveSlide(step, sliderId) {
    if (!(sliderId in slideIndexes)) {
        slideIndexes[sliderId] = 0; // Initialize index if not present
    }
    showSlide(slideIndexes[sliderId] + step, sliderId);
}

// Initialize sliders
showSlide(0, 'hoy-slider');
showSlide(0, 'populares-slider');



// profile section -------------------------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const nicknameDisplay = document.getElementById('nickname-display');
    const nicknameInput = document.getElementById('nickname-input');
    const saveNicknameButton = document.getElementById('save-nickname');
    const profilePicture = document.getElementById('profile-picture');
    const uploadPicture = document.getElementById('upload-picture');
    const editNicknameIcon = document.getElementById('edit-nickname');
    const nicknameEditor = document.getElementById('nickname-editor');
    const editPictureIcon = document.getElementById('edit-picture');

    // Show nickname input when clicking pen icon
    editNicknameIcon.addEventListener('click', () => {
        nicknameEditor.style.display = 'block';
        nicknameInput.focus();
    });

    // Handle nickname change
    saveNicknameButton.addEventListener('click', () => {
        const nickname = nicknameInput.value.trim();
        if (nickname) {
            nicknameDisplay.textContent = nickname;
            welcomeMessage.textContent = `Bienvenido, ${nickname}`;
            nicknameEditor.style.display = 'none'; // Hide input once nickname is saved
        }
    });

    // Show file upload when clicking pen icon next to profile picture
    editPictureIcon.addEventListener('click', () => {
        uploadPicture.click();
    });

    // Handle profile picture change
    uploadPicture.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                profilePicture.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});
