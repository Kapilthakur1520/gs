// Navigate to the specified page
function navigateTo(page) {
    window.location.href = page;
}

// Example for adding dynamic animations on page load
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});
