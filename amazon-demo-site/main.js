const navMenu = document.getElementById('nav-menu')
toggleMenu = document.getElementById('toggle-menu')
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show_menu')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show_menu')
})
// link-1

const navMenus = document.getElementById('nav-menu-1')
toggleMenus = document.getElementById('toggle-menu-1')
closeMenus = document.getElementById('close-menu-1')

toggleMenus.addEventListener('click', () => {
    navMenus.classList.toggle('show_menu_1')
})
closeMenus.addEventListener('click', () => {
    navMenus.classList.remove('show_menu_1')
})

const navMenua = document.getElementById('nav-menu-2')
      toggleMenua = document.getElementById('toggle-menu-2')
      closeMenua = document.getElementById('close-menu-2')

toggleMenus.addEventListener('click', () => {
    navMenua.classList.toggle('show_menu_2')
})
closeMenus.addEventListener('click', () => {
    navMenua.classList.remove('show_menu_2')
})