//light-dark toggle switch
const switchToggle = document.querySelector('input[type=checkbox]');

//once checked, this function tuns and the dark mode is triggered in the css
switchToggle.addEventListener('change', ()=>{
    document.body.classList.toggle('dark-mode', switchToggle.checked);
});