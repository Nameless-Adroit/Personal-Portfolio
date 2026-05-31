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

//Sorting out of the years of the Table
const ascendingSortBtn = document.getElementById("ascendingSortBtn");
const descendingSortBtn = document.getElementById("descendingSortBtn");

descendingSortBtn.classList.add('hidden');
ascendingSortBtn.addEventListener('click',()=>{
    const table = document.getElementById("ed-table");
    ascendingSortBtn.classList.add('hidden');
    descendingSortBtn.classList.remove('hidden');
    let rows, x, y,shouldSwitch;
    switching = true;
    rows = table.rows;
    while(switching){
        switching = false;
        
        for(i=1; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i+1].getElementsByTagName("td")[2];

            if(x.innerHTML>y.innerHTML){
                shouldSwitch = true;
                break;
            }
           
        }
            if(shouldSwitch){
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
});

descendingSortBtn.addEventListener('click',()=>{
    const table = document.getElementById("ed-table");
    descendingSortBtn.classList.add('hidden');
    ascendingSortBtn.classList.remove('hidden');
    let rows, x, y,shouldSwitch;
    switching = true;
    rows = table.rows;
    while(switching){
        switching = false;
        
        for(i=1; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[2];
            y = rows[i+1].getElementsByTagName("td")[2];

            if(x.innerHTML<y.innerHTML){
                shouldSwitch = true;
                break;
            }
           
        }
        if(shouldSwitch){
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
        
});

//displaying the "back to top" button when a person scrolls over 200px
const scrollToTop = document.getElementById("scrollToTop");
window.addEventListener('scroll',()=>{
    if(window.scrollY > 200){
        scrollToTop.classList.remove('hidden');
    }
    if(window.scrollY < 180){
       scrollToTop.classList.add('hidden'); 
    }
});

//the button itself
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// What it does: clicking any image with class "lightbox-trigger" opens it full-size in a dark overlay 

let lightbox      = document.getElementById('lightbox');
let lightboxImg   = document.getElementById('lightboxImg');
let lightboxClose = document.getElementById('lightboxClose');
let triggers      = document.querySelectorAll('.lightbox-trigger');

// Open lightbox when any trigger image is clicked
triggers.forEach((imgEl) => {
    imgEl.addEventListener('click', () => {
        lightboxImg.src = imgEl.src;
        lightbox.style.display = 'flex';
    });
});

// Close lightbox when the ✕ button is clicked
lightboxClose.addEventListener('click',(img)=>{
    lightbox.style.display = 'none';
    lightboxImg.src = '';   // clear the src to stop the image loading
});

// Also close lightbox when the user clicks the dark backdrop (not the image)
lightbox.addEventListener('click',(event)=>{

    if (event.target === lightbox) {
        lightbox.style.display = 'none';
        lightboxImg.src = '';
    }
});

// What it does: hobby descriptions are cut. Clicking "Read More" expands them; clicking again collapses them back.             

let readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(function(btn) {

    btn.addEventListener('click', function() {

        let para = this.previousElementSibling;

        if (para.classList.contains('clamped')) {
            para.classList.remove('clamped');
            this.textContent = 'Read Less';   // update button label

        } else {

            para.classList.add('clamped');
            this.textContent = 'Read More';   // update button label
        }
    });
});