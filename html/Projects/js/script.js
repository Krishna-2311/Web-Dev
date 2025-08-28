// Typing placeholder animation
const searchInput = document.querySelector("main input");
const placeholders = [
    "Search for restaurants, cuisines or dishes",
    "Try 'Pizza in Delhi'",
    "Find 'Best cafes near you'"
];
let placeholderIndex = 0;
let charIndex = 0;

function typePlaceholder() {
    if (charIndex < placeholders[placeholderIndex].length) {
        searchInput.setAttribute("placeholder", placeholders[placeholderIndex].substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typePlaceholder, 100);
    } else {
        setTimeout(erasePlaceholder, 2000);
    }
}

function erasePlaceholder() {
    if (charIndex > 0) {
        searchInput.setAttribute("placeholder", placeholders[placeholderIndex].substring(0, charIndex - 1));
        charIndex--;
        setTimeout(erasePlaceholder, 50);
    } else {
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        setTimeout(typePlaceholder, 500);
    }
}

typePlaceholder();

// Scroll animation for location cards
const locationCards = document.querySelectorAll(".location-card");

function showCardsOnScroll() {
    locationCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.5s ease";
        }
    });
}

window.addEventListener("scroll", showCardsOnScroll);
showCardsOnScroll();
