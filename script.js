let body = document.querySelector("body");
// Cart Popup

let cart_pop = document.getElementById("cart_popup");
let cart_pop_btn = document.getElementById("show_cart");
cart_pop_btn.addEventListener("click", pop_cart);

function pop_cart() {
  if (
    cart_pop.style.top === "100%" &&
    cart_pop.style.opacity === "1" &&
    body.clientWidth <= "426"
  ) {
    cart_pop.style.top = "-300%";
    cart_pop.style.opacity = "0";
    cart_pop_btn.classList.remove("active");
  } else if (cart_pop.style.top === "100%" && cart_pop.style.opacity === "1") {
    cart_pop.style.top = "-100%";
    cart_pop.style.opacity = "0";
    cart_pop_btn.classList.remove("active");
  } else {
    cart_pop.style.top = "100%";
    cart_pop.style.opacity = "1";
    cart_pop_btn.classList.add("active");
  }
}

// Cart Delete
let product_remove = document.getElementById("cart_remove_1");
let cartAll = document.querySelectorAll("delete_carticon").parentElement;
let cart = document.getElementById("cart_remove_1").parentElement;
let checkoutBtn = document.getElementById("checkout_btn");

product_remove.addEventListener("click", () => {
  document.getElementById("cart_1").style.left = "-150%";
  checkoutBtn.style.opacity = "0";
  document.getElementById("cart_quantity_indicator").style.opacity = "0";
  setTimeout(() => {
    cart.remove();
    document.getElementById("cart_empty").style.display = "flex";
    document.getElementById("cart_quantity_indicator").remove();
    checkoutBtn.parentNode.removeChild(checkoutBtn);
  }, 300);
});

// Cart Quantity
let plus = document.getElementById("product_plus");
let minus = document.getElementById("product_minus");
let indicator = document.getElementById("quantity_indicator");
plus.addEventListener("click", add);
minus.addEventListener("click", remove);
let i = 0;
let a = indicator.innerHTML;
function add() {
  if (i < 5) {
    ++i;
    indicator.innerHTML = i;
  }
}
function remove() {
  if (i > 0) {
    --i;
    indicator.innerHTML = i;
  }
}

// lightbox toggle
let lightbox_toggle = document.getElementById("product_img");
let close = document.getElementById("close_icon");
let hide_box = document.querySelector(".main_lightbox");
let overlay_content = document.querySelector(".main_lightbox #lightbox_inner");

lightbox_toggle.addEventListener("click", lightbox);
close.addEventListener("click", close_lightbox);

function lightbox() {
  body.style.overflow = "hidden";
  hide_box.style.zIndex = "2";
  hide_box.style.opacity = "1";
  setTimeout(() => {
    overlay_content.style.opacity = "1";
  }, 300);
}

function close_lightbox() {
  body.style.overflow = "auto";
  hide_box.style.zIndex = "-1";
  hide_box.style.opacity = "0";
  setTimeout(() => {
    overlay_content.style.opacity = "0";
  }, 300);
}

// Thumbnails
let thumbnail = document.getElementsByClassName("thumbnails");
let prod_img = document.querySelectorAll(".product_main_img");
let box_prod_img = document.getElementsByClassName("box_product_main_img");

for (let b = 0; b < prod_img.length; b++) {
  prod_img[0].style.display = "block";
}

if (hide_box.style.opacity === "1") {
  thumbnail[4].className += " active";
}

for (let a = 0; a < thumbnail.length; a++) {
  thumbnail[a].addEventListener("click", () => {
    if (getComputedStyle(hide_box).opacity === "0") {
      for (let b = 0; b < prod_img.length; b++) {
        prod_img[b].style.display = "none";
        prod_img[a].style.display = "block";
      }
    } else {
      // box_prod_img[c].style.display = "none"
      
    }
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    thumbnail[a].className += " active";
  });
}

// Carousel
let slidesContain;
let light_slide;
let pbtn;
let nbtn;
if (body.clientWidth > "426") {
  slidesContain = ".main_lightbox #slides-container";
  light_slide = ".main_lightbox .slide";
  pbtn = ".main_lightbox #slide-arrow-prev";
  nbtn = ".main_lightbox #slide-arrow-next";
} else {
  slidesContain = "#slides-container";
  light_slide = ".slide";
  pbtn = "#slide-arrow-prev";
  nbtn = "#slide-arrow-next";
}
const slidesContainer = document.querySelector(slidesContain);
const slide = document.querySelector(light_slide);
const prevButton = document.querySelector(pbtn);
const nextButton = document.querySelector(nbtn);

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// Mobile Navbar

let mobile_toggle = document.querySelector(".menu_icon");
let mobile_toggle_close = document.querySelector(".menu_close_icon");

mobile_toggle.addEventListener("click", () => {
  body.style.overflow = "hidden";
  document.querySelector(".mobile_navbar").style.left = "0";
  setTimeout(() => {
    document.querySelector(".mobile_navbar").style.backgroundColor =
      "var(--color-lightbox)";
  }, 370);
});

mobile_toggle_close.addEventListener("click", () => {
  body.style.overflow = "auto";
  document.querySelector(".mobile_navbar").style.backgroundColor =
    "transparent";
  setTimeout(() => {
    document.querySelector(".mobile_navbar").style.left = "-100%";
  }, 280);
});
