// tel másolás
function copyTel(event) {
    event.preventDefault();
    const tel = '06205555555';
    navigator.clipboard.writeText(tel).then(() => {
        alert('Telefonszám másolva a vágólapra!');
    }).catch(err => {
        console.error('Hiba történt a másolás során:', err);
    });
}
// Email másolás 

function copyEmail(event) {
    event.preventDefault();
    const email = 'tothgeri@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email cím másolva a vágólapra!');
    }).catch(err => {
        console.error('Hiba történt a másolás során:', err);
    });
}

// csaptelep csaba tel
function copyTel2(event) {
        event.preventDefault();
        const tel = '06708008135';
        navigator.clipboard.writeText(tel).then(() => {
            alert('Telefonszám másolva a vágólapra!');
        }).catch(err => {
            console.error('Hiba történt a másolás során:', err, '<br> ');
        });
    }


// termekek.html redirect
function termekekRedirect() {
    window.location.href = "termekeink.html";
}


// slideshow
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("dolgozo");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Show the current slide
    slides[slideIndex-1].classList.add('active');
}

// Initialize the first slide when the page loads
document.addEventListener('DOMContentLoaded', function() {
    let slides = document.getElementsByClassName("dolgozo");
    if (slides.length > 0) {
        // Show first slide
        slides[0].classList.add('active');
    }
    
    // Add click event listeners to arrows
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton) {
        prevButton.addEventListener('click', function(e) {
            e.preventDefault();
            plusSlides(-1);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function(e) {
            e.preventDefault();
            plusSlides(1);
        });
    }
});