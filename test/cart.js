const cartIcon = document.querySelector("#cart-link");
const cart = document.querySelector("");
const cartClose = document.querySelector("");

cartIcon.addEventListener("click", () => cart.classList.add("active"));
cartClose.addEventListener("click", () => cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll("");
addCartButtons.forEach(button => {
  button.addEventListener("click", event=>{
    const productBox = event.target.closest("");
  });
});

const cartContent= document.querySelector("")
const addToCart = productBox => {
  const productImgScr =productBox.querySelector("").src;
  const productTitle =productBox.querySelector("").textContent;
  const productPrice =productBox.querySelector("").textContent;




  const cartItems =cartContent.querySelectorAll("cart-product-title")
for (let item of cartItems){
  if (item.textContent===productTitle){
  alert("Ez már a kosárban van")
  return;
  }
}



  const cartBox=document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML=`
  <img src="${productImgSrc}" class="cart-img">
<div class="cart-detail">
  <h2 class="cart-product-title">${productTitle}</h2>
  <span class="cart-price">${productTitle}</span>
  <div class="cart-quantity">
    <button id="decrement">-</button>
    <span class="number">1</span>
    <button id="increment">+</button>
  </div>
</div>
<i class="ri-delete-bin-line cart-remove"></i>
  `;
  cartContent.appendChild(cartBox);

  cartBox.querySelector(".cart-remove").addEventListener("click", ()=> {
    cartBox.remove();
  });
  cartBox.querySelector(".cart-quantity").addEventListener("click", event => {
  const numberElement = cartBox.querySelector(".number");
  const decrementButton = cartBox.querySelector("#decrement");
  let quantity = numberElement.textContent;

  if (event.target.id === "decrement" && quantity > 1) {
    quantity--;
    if (quantity === 1) {
      decrementButton.style.color = "#999";
    }
  } else if (event.target.id === "increment") {
    quantity++;
    decrementButton.style.color = "#333";
  }

  numberElement.textContent = quantity;
})
};
