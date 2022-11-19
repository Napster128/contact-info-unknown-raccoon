let page = document.querySelector('.page')
page.classList.add('dark-theme')
let theme_button = document.querySelector('.theme-button')
theme_button.onclick = function () {
  page.classList.toggle('dark-theme')
}
