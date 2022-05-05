const name = 'Shreya Singh'
const title = 'UX/UI Designer | Frontend Web Developer'
const mail = 'shreyabisht785@gmail.com'

document.getElementById('title').innerText = name
document.getElementById('name').innerText = name
document.getElementById('brief-intro').innerText = title
document.getElementById(
  'mail'
).innerHTML = `<a href="mailto:${mail}" class="btn">${mail}</a>`

/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }
}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector('.back-to-top')
let isBackToTopRendered = false

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? 'visible' : 'hidden'
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0
  backToTopButton.style.transform = isBackToTopRendered
    ? 'scale(1)'
    : 'scale(0)'
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true
    alterStyles(isBackToTopRendered)
  } else {
    isBackToTopRendered = false
    alterStyles(isBackToTopRendered)
  }
})
