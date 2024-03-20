const redColor = document.querySelector('.red')
const grayColor = document.querySelector('.gray')
const blackColor = document.querySelector('#black')
const imageCard = document.querySelector('.imageContainer')
const cartButton = document.getElementById('button')
const feedbackButton = document.querySelector('#feedback')


//Cambiando a color rojo
redColor.addEventListener('click', function(){
  imageCard.style.backgroundImage = 'url(./assets/car_red1.png)'
  cartButton.style.backgroundColor = 'red'
})

//Cambiando a color gray
grayColor.addEventListener('click', function(){
  imageCard.style.backgroundImage = 'url(./assets/car_gray1.webp)'
  cartButton.style.backgroundColor = 'gray'
})


//Cambiando a color black
blackColor.addEventListener('click', function(){
  imageCard.style.backgroundImage = 'url(./assets/car_black1.webp)'
  cartButton.style.backgroundColor = 'black'
})

//Crear una etiqueta h3, agregar una clase, un texto y lo vamos a incrustar en el html
const etiquetah3 = document.createElement('h3');
etiquetah3.className = 'tag';
etiquetah3.textContent = 'Car'

const containerDescription = document.querySelector('.description')
const cardh2 = document.querySelector('h2')


containerDescription.insertBefore(etiquetah3, cardh2)

cartButton.addEventListener('click', function(){
  cartButton.style.display = 'none'
  feedbackButton.style.display = 'block'
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {y: 1}
  })

})

feedbackButton.addEventListener('click', function(){
  feedbackButton.style.display = 'none'
  cartButton.style.display = 'block'
})

