const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
  
  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear