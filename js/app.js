import ourProducts from "./ourProducts.js";
import slideshow from "./slideshow.js";

function Run() {
  let body_element = document.querySelector(".body-container");

  let navbar_items = document.querySelectorAll(".navbar-item");
  let product_list_links = document.querySelectorAll(".product-list-link");
  let view_group_content = document.querySelectorAll(".view-group-content");

  let products_list_container = document.querySelector(".products-list-container");
  let products_view_items_container = document.querySelector(".products-view-items-container");

  let back_btn = document.querySelector(".products-view-back-content");

  let main_product_title_mb = document.querySelector(".product-mb-title");
  let main_product_text = document.querySelector(".product-main-title-mb");

  let mb_menu_btn = document.querySelector(".mb-menu-btn");

  slideshow();
  ourProducts()

  // active menu item when clicked
  for (let i = 0; i < navbar_items.length; i++) {
    navbar_items[i].addEventListener("click", (item) => {
      let getNav = item.target.getAttribute("link-ref");
      let addOffset = 220;

      for (let i = 0; i < navbar_items.length; i++) navbar_items[i].classList.remove("active");

      item.target.classList.add("active");

      if (getNav == "main") addOffset = 0;
      window.scrollTo(0, document.getElementById(getNav).offsetTop - addOffset);
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

      // hide all products group view content
      view_group_content.forEach((el) => el.classList.remove("active"));

      // select group name by product link selection
      view_group_content.forEach((el) => {
        if (selected_item == el.getAttribute("group_name")) el.classList.add("active");
      });

      if (window.innerWidth <= 1060) {
        products_list_container.classList.remove("mb-active");
        products_list_container.classList.add("no-display");

        products_view_items_container.classList.remove("no-display");
        products_view_items_container.classList.add("mb-active");

        back_btn.classList.add("mb-active");

        main_product_title_mb.classList.remove("hide");
        main_product_title_mb.classList.add("show");
        main_product_text.textContent = item.target.textContent;
      }
    });
  }

  // #################################
  // Mobile
  // #################################

  // back to products list links btn active

  back_btn.addEventListener("click", () => {
    products_list_container.classList.remove("no-display");
    products_list_container.classList.add("mb-active");

    products_view_items_container.classList.add("no-display");
    products_view_items_container.classList.remove("mb-active");

    back_btn.classList.remove("mb-active");

    main_product_title_mb.classList.remove("show");
    main_product_title_mb.classList.add("hide");

    window.scrollTo(0, document.getElementById("product-view").offsetTop - 220);

    for (let i = 0; i < product_list_links.length; i++) product_list_links[i].classList.remove("active");
  });

  // minimize header when scroll
  // -----------------------------

  window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
      this.document.body.classList.add("header-min");
    } else {
      this.document.body.classList.remove("header-min");
    }
  }, { passive: true });

  // active mobile menu btn
  // -----------------------------

  mb_menu_btn.addEventListener("click", () => {
    document.body.setAttribute("blank-content-open","")
    document.querySelector(".blank-content").classList.add("show")
    mb_menu_btn.classList.add("hide")
  })


}

Run();
