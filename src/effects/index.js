export const toggleMenu = (button, container, links) => {
  button.current.classList.toggle('closeMenu')
  if (button.current.classList.contains('closeMenu')) {
    container.forEach(element => element.classList.toggle('shrinkMenu'))
    links.forEach(link=> {
      link.children[0].children[1].style.scale = 1
      link.style.width = 'auto'
    });
  } else {
    container.forEach(element => element.classList.toggle('shrinkMenu'))
    links.forEach(link => {
      link.children[0].children[1].style.scale = 0
      link.style.width = '40px'
  })
  }
}
