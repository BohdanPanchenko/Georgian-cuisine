// BURGER
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("open");
  menu.classList.toggle("open");
  document.body.classList.toggle("locked");
});
menu.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("menu__link")) {
    burger.classList.remove("open");
    menu.classList.remove("open");
    document.body.classList.remove("locked");
  }
});
// SLIDER
let bigSlider, smallSlider;
addBigSlider();
addSmallSlider();
function addBigSlider() {
  if (window.innerWidth > 595 && !bigSlider) {
    bigSlider = new Swiper(".slider__swiper.swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 5,
      centeredSlides: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
  }
}
function addSmallSlider() {
  const sliderElement = document.querySelector(".gallery__slider.swiper");
  if (window.innerWidth <= 424 && !smallSlider) {
    smallSlider = new Swiper(".gallery__slider.swiper", {
      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  if (smallSlider && window.innerWidth > 424) {
    sliderElement.classList.add("swiper_disabled");
    smallSlider.disable();
  } else if (smallSlider && window.innerWidth <= 424) {
    smallSlider.enable();
    sliderElement.classList.remove("swiper_disabled");
  }
}
window.addEventListener("resize", () => {
  addBigSlider();
  addSmallSlider();
  if (window.innerWidth < 768) {
    closePreview(false);
  }
  if (window.innerWidth > 424) {
  }
});

// IMAGE PREVIEW
const gallery = document.querySelector(".gallery__images");
const preview = document.querySelector(".preview");
gallery.addEventListener("click", imagePreviewHandler);

function imagePreviewHandler(e) {
  const target = e.target;
  if (target.hasAttribute("src")) {
    openPreview(target.src);
  }
}
preview.addEventListener("click", closePreview);
function openPreview(src) {
  preview.style.display = "flex";
  preview.querySelector("img").setAttribute("src", src);
  document.body.classList.add("locked");
}
function closePreview(e) {
  const target = e ? e.target : false;
  if (!e || !target.hasAttribute("src")) {
    preview.classList.add("preview_out");
    document.body.classList.remove("locked");

    setTimeout(() => {
      preview.style.display = "none";
      preview.classList.remove("preview_out");
    }, 500);
  }
}

// MODAL-MENU

const modalMenu = document.querySelector(".modal-menu");
const swiperWrapper = document.querySelector(".menu-section .swiper-wrapper");

swiperWrapper.addEventListener("click", openMenuHandler);

function openMenuHandler(e) {
  console.log(e.target);
  const target = e.target;
  if (target.classList.contains("menu-item__button")) {
    modalMenu.style.display = "block";
    document.body.classList.add("locked");
  }
}

modalMenu.addEventListener("click", closeMenuHandler);

function closeMenuHandler(e) {
  const target = e.target;
  if (target.classList.contains("modal-menu__back-btn")) {
    modalMenu.scrollTo({
      top: 0,
    });
    modalMenu.style.display = "none";
    // setTimeout(() => {
    //   modalMenu.style.display = "none";
    // }, 900);

    document.body.classList.remove("locked");
  }
}
