import slideshow from "./slideshow.js";

function Run() {
  let navbar_items = document.querySelectorAll(".navbar-item");
  slideshow();

  // active menu item when clicked
  for (let i = 0; i < navbar_items.length; i++) {
    navbar_items[i].addEventListener("click", (item) => {
      for (let i = 0; i < navbar_items.length; i++) navbar_items[i].classList.remove("active");

      if (item.target.tagName == "A") item.target.parentElement.classList.add("active");
      else item.target.classList.add("active");
    });
  }
}

Run();
