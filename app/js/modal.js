const modal = () => {
  const modalContainer = document.querySelector('#modal-container')
  const modalImg = document.querySelector('#modal-img')
  const img = document.querySelectorAll('.image')
  const closeBtn = document.getElementsByClassName("close")[0]

  if (img) {
    img.forEach(image => {
      image.addEventListener('click', () => {
        modalContainer.style.display = "block"
        modalImg.src = image.src;
      })
    });
  }

  closeBtn.addEventListener('click', () => {
    modalContainer.style.display = "none"
  })
}