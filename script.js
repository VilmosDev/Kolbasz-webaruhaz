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
            alert('Csaptelep csaba telefonszám másolva a vágólapra!');
        }).catch(err => {
            console.error('Hiba történt a másolás során:', err, '<br> ');
        });
    }

// kolbász járat tel
function copyTel3(event) {
        event.preventDefault();
        const tel = '06207770777';
        navigator.clipboard.writeText(tel).then(() => {
            alert('Kolbász járat telefonszám másolva a vágólapra!');
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

  // Az első slideot betölti vagy nemtom
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


// Telefonos dropdown
const mobileDropdownLi = document.getElementById('mobile-dropdown-li');

function opendropdown() {
    mobileDropdownLi.classList.add('show-dropdown');
}

function closedropdown() {
    mobileDropdownLi.classList.remove('show-dropdown');
}


// Pop up

const popUpContainer = document.getElementById('popUpContainer')

function closePopUp() {
    popUpContainer.classList.remove('showing');
}



const popUpOverlay = document.getElementById('popUpOverlay')

function closePopUp2() {
    popUpOverlay.classList.remove('showing');
}


// cart ------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const cartIcons = document.querySelectorAll('.fa-shopping-cart.cart');
    const cart = document.querySelector('.kosar');
    const closeCart = document.querySelector('#kosar-bezaras');
    const cartContent = document.querySelector(".tartalom");
    const cartItemCountBadge = document.querySelector('.cart-item-count');
    const purchaseButton = document.querySelector('.vevo-gomb');
    
    // localstorageről betölti a kosarat
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // cart-countot betölti
    updateCartCountBadge();

    // Fizetés
    if (purchaseButton) {
        purchaseButton.addEventListener('click', () => {
            if (cartItems.length > 0) {
                alert('Köszönjük a vásárlást! Jóétvágyat!');
                cartItems = [];
                saveCartToStorage();
                updateCart();
                updateCartCount(-cartItemCount);
                cart.classList.remove('active');
            } else {
                alert('A kosár üres!');
            }
        });
    }

    // Kosár megnyitás
    cartIcons.forEach(cartIcon => {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            cart.classList.add('active');
        });
    });

    // Kosár bezárás
    closeCart.addEventListener('click', () => {
        cart.classList.remove('active');
    });

    // Kosárhoz adás
    function addToCart(product) {
        const productImg = product.querySelector('img').src;
        const productName = product.querySelector('.kolbasz-name').textContent;
        const productPrice = product.querySelector('.kolbasz-price').textContent;

        // Benne van-e a termék már a kosárban
        const existingItems = cartItems.filter(item => item.name === productName);
        if (existingItems.length > 0) {
            alert("Ez a termék már benne van a kosárban!🌭");
            return;
        }

        const cartItem = {
            img: productImg,
            name: productName,
            price: productPrice,
            quantity: 1
        };

        cartItems.push(cartItem);
        saveCartToStorage();
        updateCart();
        updateCartCount(1);
        cart.classList.add('active');
    }

    // Item megjelenítése htmlben
    function updateCart() {
        cartContent.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cartItems.forEach((item, index) => {
            const cartBox = document.createElement("div");
            cartBox.classList.add("kosar-box");
            cartBox.innerHTML = `
                <img src="${item.img}" alt="" class="kosar-img">
                <div class="kosar-desc">
                    <p class="kosar-prod-name">${item.name}</p>
                    <span class="kosar-ar">${item.price}</span>
                    <div class="kosar-mennyiseg">
                        <button id="sub" onclick="updateQuantity(${index}, -1)">-</button>
                        <span class="kosar-szam">${item.quantity}</span>
                        <button id="add" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <i class="fa-solid fa-trash kosar-torles" onclick="removeItem(${index})"></i>
            `;
            cartContent.appendChild(cartBox);
            
            total += parseInt(item.price.replace(/[^0-9]/g, '')) * item.quantity;
            itemCount += item.quantity;
        });

        document.querySelector('.osszeg').textContent = `${total}- Ft`;
        updateCartCountBadge();
    }

    // Item mennyiség frissítése
    window.updateQuantity = function(index, change) {
        cartItems[index].quantity = Math.max(1, cartItems[index].quantity + change);
        saveCartToStorage();
        updateCart();
        updateCartCount(change);
    }

    // Item törlés
    window.removeItem = function(index) {
        const removedQuantity = cartItems[index].quantity;
        cartItems.splice(index, 1);
        saveCartToStorage();
        updateCart();
        updateCartCount(-removedQuantity);
    }

    // Kosárba gombra kattintás érzékelése
    const kosarbaButton = document.getElementById('kosarba');
    if (kosarbaButton) {
        kosarbaButton.addEventListener('click', function() {
            const product = document.querySelector('.kolbasz-container');
            addToCart(product);
        });
    }

    // kosár mentése localstoragere
    function saveCartToStorage() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // cart count badge update
    function updateCartCountBadge() {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        cartItemCountBadge.textContent = totalItems;
        cartItemCountBadge.style.visibility = totalItems > 0 ? 'visible' : 'hidden';
    }

    // cart count update
    function updateCartCount(change) {
        cartItemCount += change;
        updateCartCountBadge();
    }

    // Elsődleges cart update
    updateCart();
});

// Kívül kattintás bezárja a kosarat - a mennyiség hozzáadás is bezárja a kosarat azért van kikommentelve
// document.addEventListener('click', (e) => {
//     if (!cart.contains(e.target) && !cartIcon.contains(e.target)) {
//         cart.classList.remove('active');
//     }
// });


