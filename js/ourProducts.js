

export default function ourProducts() { 

  let view_items = document.querySelectorAll(".view-more-content p")


  view_items.forEach(el => {

    el.addEventListener("click", (ev) => {

      let getItem = ev.target.parentElement
      console.log(getItem);

      // if(ev.target)

    })
  })


}