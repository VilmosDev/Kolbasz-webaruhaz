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
    const email = 'gergototh539@gmail.com';
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
    window.location.href = "kolbasz.html#scroll";
}


// slideshow
document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  prev.addEventListener('click', () => changeSlide(-1));
  next.addEventListener('click', () => changeSlide(1));

  // Initialize the first slide
  showSlide(slideIndex);
});

// Telefonos navbar
const navbar2 = document.getElementById('navbar2')

function openNavbar() {
    navbar2.classList.add('show');
}

function closeNavbar() {
    navbar2.classList.remove('show');
}


