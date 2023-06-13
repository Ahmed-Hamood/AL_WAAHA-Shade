import slideshow from "./slideshow.js";

function Run() {

  let body_element = document.querySelector("body");

  let navbar_items = document.querySelectorAll(".navbar-item");
  let product_list_links = document.querySelectorAll(".product-list-link");
  let view_group_content = document.querySelectorAll(".view-group-content");

  let products_list_container = document.querySelector(".products-list-container");
  let products_view_items_container = document.querySelector(".products-view-items-container");

  let back_btn = document.querySelector(".products-view-back-content");

  slideshow();

  // active menu item when clicked
  for (let i = 0; i < navbar_items.length; i++) {
    navbar_items[i].addEventListener("click", (item) => {
      for (let i = 0; i < navbar_items.length; i++) navbar_items[i].classList.remove("active");

      if (item.target.tagName == "A") item.target.parentElement.classList.add("active");
      else item.target.classList.add("active");
    });
  }

  if (window.innerWidth <= 855) {
    for (let i = 0; i < product_list_links.length; i++) product_list_links[i].classList.remove("active");
  }
  // active product list links when clicked, and view products elements
  for (let i = 0; i < product_list_links.length; i++) {
    product_list_links[i].addEventListener("click", (item) => {
      let selected_item = item.target.getAttribute("product_name");

      for (let i = 0; i < product_list_links.length; i++) product_list_links[i].classList.remove("active");

      item.target.classList.add("active");

      view_group_content.forEach((ele) => {
        ele.classList.remove("active");
      });

      if (window.innerWidth <= 855) {
        products_list_container.classList.add("no-display");
        products_view_items_container.classList.add("active");
        back_btn.classList.add("active");
      } else {
        products_view_items_container.classList.remove("no-display");
      }

      view_group_content.forEach((el) => {
        if (selected_item == el.getAttribute("group_name")) {
          el.classList.add("active");
        }
      });
    });
  }

  // #################################
  // Mobile
  // #################################

  // back btn active

  back_btn.addEventListener("click", (ev) => {
    products_list_container.classList.remove("no-display");
    products_view_items_container.classList.remove("active");
    back_btn.classList.remove("active");

    for (let i = 0; i < product_list_links.length; i++) product_list_links[i].classList.remove("active");
  });


  // ---------------------
  let HorPos = null

  body_element.addEventListener(
    "scroll",
    event => {
     HorPos = event.target.scrollTop
    
    //  if (window.innerWidth < 400) {
      if (HorPos >= 330) {
         alert("ffff")
      } else {
         alert("ffff")
      }
    //  }
    },
    { passive: true }
  )
}

Run();
