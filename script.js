const rotateIcon360 = document.getElementById('rotateIcon')
const closeButton = document.getElementById('x')
const couch = document.getElementById('couch')
const couchRotation = document.getElementById('couchRotation')

rotateIcon360.addEventListener('click', function () {
  closeButton.style.display = 'flex'
  couchRotation.style.display = 'flex'
  rotateIcon360.style.display = 'none'
  couch.style.display = 'none'
})

closeButton.addEventListener('click', function () {
  closeButton.style.display = 'none'
  couchRotation.style.display = 'none'
  rotateIcon360.style.display = 'flex'
  couch.style.display = 'flex'
})
