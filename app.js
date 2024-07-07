// JavaScript to handle "Load More" button functionality

document.querySelector('.load-more').addEventListener('click', function() {
    // Fetch more courses dynamically or show hidden ones
    // For now, we'll just log a message
    console.log('Load more courses');
});

// JavaScript to handle category button active state

const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});