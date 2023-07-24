const panel = document.querySelectorAll('.panels')

panel.forEach((item) => {
  item.addEventListener('click', () => {
    removepanels()
    item.classList.add('active')
  })
})

function removepanels() {
  panel.forEach((i) => {
    i.classList.remove('active')
  })
}
