// Mobile version navigation-bar
const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('toggle-menu')
const closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})
// link-1

const navMenus = document.getElementById('nav-menu-1')
const toggleMenus = document.getElementById('toggle-menu-1')
const closeMenus = document.getElementById('close-menu-1')

toggleMenus.addEventListener('click', () => {
    navMenus.classList.toggle('show_menu_1')
})
closeMenus.addEventListener('click', () => {
    navMenus.classList.remove('show_menu_1')
})
// link-2
const navMenua = document.getElementById('nav-menu-2')
const toggleMenua = document.getElementById('toggle-menu-2')
const closeMenua = document.getElementById('close-menu-2')

toggleMenua.addEventListener('click', () => {
    navMenua.classList.toggle('show_menu_2')
})
closeMenua.addEventListener('click', () => {
    navMenua.classList.remove('show_menu_2')
})
// link-3
const navMenub = document.getElementById('nav-menu-3')
const toggleMenub = document.getElementById('toggle-menu-3')
const closeMenub = document.getElementById('close-menu-3')

toggleMenub.addEventListener('click', () => {
    navMenub.classList.toggle('show_menu_3')
})
closeMenub.addEventListener('click', () => {
    navMenub.classList.remove('show_menu_3')
})

// link-4
const navMenuc = document.getElementById('nav-menu-4')
const toggleMenuc = document.getElementById('toggle-menu-4')
const closeMenuc = document.getElementById('close-menu-4')

toggleMenuc.addEventListener('click', () => {
    navMenuc.classList.toggle('show_menu_4')
})
closeMenuc.addEventListener('click', () => {
    navMenuc.classList.remove('show_menu_4')
})

// link-5
const navMenud = document.getElementById('nav-menu-5')
const toggleMenud = document.getElementById('toggle-menu-5')
const closeMenud = document.getElementById('close-menu-5')

toggleMenud.addEventListener('click', () => {
    navMenud.classList.toggle('show_menu_5')
})
closeMenud.addEventListener('click', () => {
    navMenud.classList.remove('show_menu_5')
})

// link-6
const navMenue = document.getElementById('nav-menu-6')
const toggleMenue = document.getElementById('toggle-menu-6')
const closeMenue = document.getElementById('close-menu-6')

toggleMenue.addEventListener('click', () => {
    navMenue.classList.toggle('show_menu_6')
})
closeMenue.addEventListener('click', () => {
    navMenue.classList.remove('show_menu_6')
})

// link-7
const navMenuf = document.getElementById('nav-menu-7')
const toggleMenuf = document.getElementById('toggle-menu-7')
const closeMenuf = document.getElementById('close-menu-7')

toggleMenuf.addEventListener('click', () => {
    navMenuf.classList.toggle('show_menu_7')
})
closeMenuf.addEventListener('click', () => {
    navMenuf.classList.remove('show_menu_7')
})

// link-8
const navMenug = document.getElementById('nav-menu-8')
const toggleMenug = document.getElementById('toggle-menu-8')
const closeMenug = document.getElementById('close-menu-8')

toggleMenug.addEventListener('click', () => {
    navMenug.classList.toggle('show_menu_8')
})
closeMenug.addEventListener('click', () => {
    navMenug.classList.remove('show_menu_8')
})

// link-9
const navMenuh = document.getElementById('nav-menu-9')
const toggleMenuh = document.getElementById('toggle-menu-9')
const closeMenuh = document.getElementById('close-menu-9')

toggleMenuh.addEventListener('click', () => {
    navMenuh.classList.toggle('show_menu_9')
})
closeMenuh.addEventListener('click', () => {
    navMenuh.classList.remove('show_menu_9')
})

// link-10
const navMenuj = document.getElementById('nav-menu-10')
const toggleMenuj = document.getElementById('toggle-menu-10')
const closeMenuj = document.getElementById('close-menu-10')

toggleMenuj.addEventListener('click', () => {
    navMenuj.classList.toggle('show_menu_10')
})
closeMenuj.addEventListener('click', () => {
    navMenuj.classList.remove('show_menu_10')
})

// link-11
const navMenui = document.getElementById('nav-menu-11')
const toggleMenui = document.getElementById('toggle-menu-11')
const closeMenui = document.getElementById('close-menu-11')

toggleMenui.addEventListener('click', () => {
    navMenui.classList.toggle('show_menu_11')
})
closeMenui.addEventListener('click', () => {
    navMenui.classList.remove('show_menu_11')
})

//Mobile version navigation end here

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);