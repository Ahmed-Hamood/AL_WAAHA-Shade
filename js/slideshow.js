let slideshow_images = [
  "./img/slide_show/img1.jpg",
  "./img/slide_show/img2.jpg",
  "./img/slide_show/img3.jpg",
  "./img/slide_show/img4.jpg",
  "./img/slide_show/img5.jpg",
];

export default function slideshow() {
  let slideIndex = 1;
  let _slideIndex = 0;
  let autoSlideIsActive = true;
  let slides = null;
  let dots = null;
  let prev_el = document.querySelector(".prev");
  let next_el = document.querySelector(".next");

  let slide_content = document.querySelector(".slideshow-items-content");
  let dots_content = document.querySelector(".dots-content");

  let plusSlides = (n) => {
    autoSlideIsActive = false;
    showSlides((slideIndex += n));
  };

  let currentSlide = (n) => {
    autoSlideIsActive = false;
    showSlides((slideIndex = n));
  };

  let showSlides = (n) => {
    let i;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  let EnableAutoShowSlides = () => {
    let i;

    if (!autoSlideIsActive) return;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    _slideIndex++;

    if (_slideIndex > slides.length) {
      _slideIndex = 1;
    }

    slides[_slideIndex - 1].style.display = "block";
    dots[_slideIndex - 1].className += " active";

    // setTimeout(EnableAutoShowSlides, 2000);
  };

  let InsertImagesIntoMainSlide = () => {
    slideshow_images.forEach((img) => {
      slide_content.insertAdjacentHTML(
        "afterbegin",
        `
          <div class="slide-item fade">
            <img src="${img}" alt="" />
          </div>
        `
      );

      dots_content.innerHTML += '<span class="dot"></span>';
    });

    slides = document.getElementsByClassName("slide-item");
    dots = document.getElementsByClassName("dot");

    runAllListeners();
  };

  let runAllListeners = () => {
    document.querySelectorAll(".dot").forEach((element, index) => {
      element.addEventListener("click", () => {
        currentSlide(++index);
      });
    });

    prev_el.addEventListener("click", () => {
      plusSlides(-1);
    });

    next_el.addEventListener("click", () => {
      plusSlides(1);
    });
  };

  InsertImagesIntoMainSlide();
  EnableAutoShowSlides();
  showSlides(slideIndex);
}
