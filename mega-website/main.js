// sub-menu links-1
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
subMenu.classList.toggle("open-menu");
}

// sub-menu links-2
let subMenua = document.getElementById("subMenua");

function toggleMenua(){
subMenua.classList.toggle("open-menu-1");
}
// sub-menue links-3
let subMenub = document.getElementById("subMenub");

function toggleMenub(){
subMenub.classList.toggle("open-menu");
}

// sub-menue links-4
let subMenuc = document.getElementById("subMenuc");

function toggleMenuc(){
subMenuc.classList.toggle("open-menu");
}

// main content img-scroll 
let span = document.getElementsByTagName('span');
let product = document.getElementsByClassName('product');
let product_page = Math.ceil(product.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// mobile view
let mobile_view = window.matchMedia("(max-width: 786px)");
if (mobile_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = ()=> {
    l = l + movePer;
    if (product == l) {l = 0}
    for (const i of product) {
        if (l > maxMove) {l = l- movePer;}
        i.style.left = '_' + l + '%';
    }
}

span[l].onclick = ()=> {right_mover();}
