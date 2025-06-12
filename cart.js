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

const addToCart = productBox => {
  const productImgScr =productBox.querySelector("").src;
  const productTitle =productBox.querySelector("").textContent;
  const productPrice =productBox.querySelector("").textContent;

  const cartBox=document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML=``;
};
