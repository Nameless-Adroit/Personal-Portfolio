//light-dark toggle switch
const switchToggle = document.querySelector('input[type=checkbox]');

//once checked, this function tuns and the dark mode is triggered in the css
switchToggle.addEventListener('change', ()=>{
    document.body.classList.toggle('dark-mode', switchToggle.checked);
});

// clicking it expands a hidden details paragraph
document.querySelectorAll('.skill-tag').forEach(button => {
    button.addEventListener('click', () => {
        const desc = button.nextElementSibling;

        // Close all others that have not been clicked.
        document.querySelectorAll('.skill-tag').forEach(other => {
            if (other !== button) {
                other.nextElementSibling.classList.remove('open');
                other.classList.remove('open');
            }
        });

        // Toggle current one that has been clicked
        desc.classList.toggle('open');
        button.classList.toggle('open');
    });
});