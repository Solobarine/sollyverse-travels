export const toggle_menu = (hamburger_parent, nav, e) => {
    const children = Array.from(hamburger_parent.current.children)
    if (e.target.classList.contains('menu_open')) {
        nav.current.classList.add('header_menu_open')
    } else {
        nav.current.classList.remove('header_menu_open')
    }

    children.forEach(child => {
        if (child === e.target) {
            child.classList.add('menu_toggle_hide')
        } else {
            child.classList.remove('menu_toggle_hide')
        }
    })
}