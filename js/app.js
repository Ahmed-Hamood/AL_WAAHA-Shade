import ourProducts from "./ourProducts.js";
import slideshow from "./slideshow.js";

function Run() {
  let navbar_items = document.querySelectorAll(".navbar-item");
  let product_list_links = document.querySelectorAll(".product-list-link");
  let view_group_content = document.querySelectorAll(".view-group-content");

  let products_list_container = document.querySelector(".products-list-container");
  let products_view_items_container = document.querySelector(".products-view-items-container");

  let back_btn = document.querySelector(".products-view-back-content");

  let main_product_title_mb = document.querySelector(".product-mb-title");
  let main_product_text = document.querySelector(".product-main-title-mb");

  let mb_menu_btn = document.querySelector(".mb-menu-btn");
  let close_sidebar_btn = document.querySelector(".close-sidebar-btn");

  let mb_sidebar_menu_items = document.querySelectorAll(".mb_menu-item");
  let blank_content_loading = document.querySelector(".blank-content-loading");
  let aboutUs_txt_animation = true;

  slideshow();
  ourProducts();

  document.body.setAttribute("loading-status", "true");
  setTimeout(() => {
    document.body.setAttribute("loading-status", "false");
    setTimeout(() => {
      document.body.setAttribute("loading-status", "close");
    }, 500);
  }, 3000);

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

  // mobile menu items
  for (let i = 0; i < mb_sidebar_menu_items.length; i++) {
    mb_sidebar_menu_items[i].addEventListener("click", (item) => {
      let getNav = item.target.getAttribute("link-ref");
      let addOffset = 60;

      for (let i = 0; i < mb_sidebar_menu_items.length; i++) mb_sidebar_menu_items[i].classList.remove("active");

      // item.target.classList.add("active");

      if (getNav == "main") addOffset = 0;
      window.scrollTo(0, document.getElementById(getNav).offsetTop - addOffset);

      document.querySelector(".blank-content-sidebar").classList.remove("show");
      mb_menu_btn.classList.remove("hide");
      document.body.removeAttribute("blank-content-sidebar-open");
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

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 550) {
        this.document.body.classList.add("header-min");
        window.moveTo(0, 0);
      } else {
        this.document.body.classList.remove("header-min");
      }

      if (window.scrollY > 600) {
        if (aboutUs_txt_animation) {
          this.document.querySelector(".aboutUs-content").classList.add("animation");
          aboutUs_txt_animation = false;
        }
      }
    },
    { passive: true }
  );

  // active mobile menu btn
  // -----------------------------

  mb_menu_btn.addEventListener("click", () => {
    document.body.setAttribute("blank-content-sidebar-open", "");
    document.querySelector(".blank-content-sidebar").classList.add("show");
    mb_menu_btn.classList.add("hide");
  });

  close_sidebar_btn.addEventListener("click", () => {
    document.querySelector(".blank-content-sidebar").classList.remove("show");
    mb_menu_btn.classList.remove("hide");
    document.body.removeAttribute("blank-content-sidebar-open");
  });
}

Run();
