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

const navMenua = document.getElementById('nav-menu-2')
const toggleMenua = document.getElementById('toggle-menu-2')
const closeMenua = document.getElementById('close-menu-2')

toggleMenua.addEventListener('click', () => {
    navMenua.classList.toggle('show_menu_2')
})
closeMenua.addEventListener('click', () => {
    navMenua.classList.remove('show_menu_2')
})
