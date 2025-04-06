
function shuffleCards() {
let container = document.getElementById("cardContainer");
let visibleCards = Array.from(container.children).filter(card => card.style.display !== 'none');

// Fisher-Yates shuffle
for (let i = visibleCards.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
container.insertBefore(visibleCards[j], visibleCards[i]);
}
}

function filterCards(category) {
// Update active button
const buttons = document.querySelectorAll('.filter-btn');
buttons.forEach(btn => {
btn.classList.remove('active');
if (btn.textContent.toLowerCase() === category ||
(btn.textContent.toLowerCase() === 'all' && category === 'all')) {
btn.classList.add('active');
}
});

// Filter cards
const allCards = document.querySelectorAll('.card');
allCards.forEach(card => {
if (category === 'all') {
card.style.display = 'flex';
} else {
if (card.classList.contains(category)) {
    card.style.display = 'flex';
} else {
    card.style.display = 'none';
}
}
});

// Now shuffle only the visible cards
shuffleCards();
}

function toggleLike(button) {
let countSpan = button.nextElementSibling;
let count = parseInt(countSpan.textContent);
if(button.classList.contain("liked")
   {
button.classList.remove("liked");
count--;
}else{
button.classList.add("liked");
count++;
}
countSpan.textContent = count;
}

// Function to share the post
function sharePost(event) {
event.stopPropagation();

// Find the image element within the same card where the share button was clicked
const imageElement = event.target.closest('.card').querySelector('.image img');
const imgUrl = imageElement ? imageElement.src : null;  // Get the src of the image

if (!imgUrl) {
alert("No photo to share.");
return;
}

// Construct the URL with the image parameter for sharing
const fullImageUrl = window.location.href.split("?")[0] + "?image=" + encodeURIComponent(imgUrl);

if (navigator.share) {
navigator.share({
title: "Check out this photo!",
url: fullImageUrl
}).then(() => console.log("Shared successfully"))
.catch(error => console.log("Error sharing", error));
} else {
prompt("Copy this link to share:", fullImageUrl);
}
}

// Optional: Show full image on double-click (if you want to keep this feature)
function showFullImage(imgUrl) {
let showMessage = confirm("Show full image?");
if (showMessage) {
const popupOverlay = document.getElementById('popupOverlay');
const fullImage = document.getElementById('fullImage');

fullImage.src = imgUrl;  // Set the full image source
popupOverlay.style.display = 'flex';  // Show the popup
}
}

document.addEventListener("DOMContentLoaded", function() {
const urlParams = new URLSearchParams(window.location.search);
const sharedImage = urlParams.get("image");

if (sharedImage) {
showFullImage(sharedImage); // Show the full image when the link is visited
}
});
function closePopup() {
// Hide the popup when the user closes it
const popupOverlay = document.getElementById('popupOverlay');
popupOverlay.style.display = 'none';
}

// Theme toggler functionality
document.getElementById("theme-toggler").addEventListener("click", function () {
const currentTheme = document.documentElement.getAttribute("data-theme");
if (currentTheme === "green") {
document.documentElement.setAttribute("data-theme", "red");
localStorage.setItem("theme", "red");
} else {
document.documentElement.setAttribute("data-theme", "green");
localStorage.setItem("theme", "green");
}
});

// Load saved theme from local storage
document.addEventListener("DOMContentLoaded", function () {
const savedTheme = localStorage.getItem("theme") || "red";
document.documentElement.setAttribute("data-theme", savedTheme);
});
