
//load more about info

let extraAbout = document.getElementById("extraAbout");
let extraAboutLink =document.getElementById("read-more");
let extraAboutRemoveLink =document.getElementById("read-less");
function readmore(){
    if( window.getComputedStyle(extraAbout, null).getPropertyValue("display") === 'none'){
        extraAbout.style.display = 'block';
        extraAboutRemoveLink.style.display = "inline";
        extraAboutLink.style.display = 'none';
    }else {
        extraAbout.style.display = "none";
        extraAboutLink.style.display = 'inline';
        extraAboutRemoveLink.style.display = "none";
    }
}
//Logo Slider

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


//Filterable Image Gallery 

const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
       // deactivate existing active 'filter-item'
       filterContainer.querySelector(".active").classList.remove("active");
       // activate new 'filter-item'
       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});


//Pagination

const images=document.querySelector(".gallery-items").children;
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const page=document.querySelector(".page-num");
const maxItem=9;
let index=1;
 
 const pagination=Math.ceil(images.length/maxItem);
 console.log(pagination)

 prev.addEventListener("click",function(){
   index--;
   check();
   showItems();
 })
 next.addEventListener("click",function(){
     index++;
     check();
   showItems();  
 })

 function check(){
      if(index==pagination){
          next.classList.add("disabled");
      }
      else{
        next.classList.remove("disabled");	
      }

      if(index==1){
          prev.classList.add("disabled");
      }
      else{
        prev.classList.remove("disabled");	
      }
 }

 function showItems() {
      for(let i=0;i<images.length; i++){
          images[i].classList.remove("show");
          images[i].classList.add("hide");


         if(i>=(index*maxItem)-maxItem && i<index*maxItem){
            // if i greater than and equal to (index*maxItem)-maxItem;
           // means  (1*8)-8=0 if index=2 then (2*8)-8=8
         images[i].classList.remove("hide");
         images[i].classList.add("show");
         }
         page.innerHTML=index;
      }

          
 }

 window.onload=function(){
     showItems();
     check();
 }