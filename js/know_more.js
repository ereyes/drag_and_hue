const hiddenParagraph = document.getElementById('hiddenParagraph');
const toggleLink = document.getElementById('toggleLink');

toggleLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (hiddenParagraph.classList.contains('show')) {
        hiddenParagraph.classList.remove('show');
        toggleLink.innerHTML = 'Want to know a bit more? <i class="fa-solid fa-chevron-down"></i>';
    } else {
        hiddenParagraph.classList.add('show');
        toggleLink.innerHTML = 'Click to hide <i class="fa-solid fa-chevron-up"></i>';
    }
});