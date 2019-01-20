function clippingPhoto() { //to close and open the lens
  const opturatorsWrapper = document.querySelector('.subLens4')
  opturatorsWrapper.classList.add('closed')

  window.setTimeout(() => {
    opturatorsWrapper.classList.remove('closed')
  }, 300)
}

function majImgPortrait() { //random pictures 
  var tabSrcImg = new Array("./images/portrait.jpg",
    "./images/portrait2.jpg",
    "./images/portrait3.jpg",
    "./images/portrait1.jpg",
    "./images/portrait4.jpg",
    " ./images/portrait5.jpg",
    " ./images/portrait6.jpg",
    " ./images/portrait7.jpg"  )

  var randomNumber = Math.floor((Math.random() * tabSrcImg.length) + 0);
  document.querySelector('.polaroidPhoto').setAttribute('src', tabSrcImg[randomNumber])
  console.log(tabSrcImg[randomNumber])
}

window.onload = function () {
  const triggerCam = document.querySelector('.wrapperTriggerCam')
  const redLight = document.querySelector('.redLight')
  const whiteFlash = document.querySelector('.whiteFlash')
  const photoBox = document.querySelector('.photoBox')
  const polaroidWrapper = document.querySelector('.polaroidWrapper')
  const btnTakePhoto = document.querySelector('.btnTakePhoto')
  const btnHeart = document.querySelector('.btnHeart')

  
  btnTakePhoto.classList.add('visible')   
  window.setTimeout(() => {
    btnTakePhoto.classList.add('animated') // animation of the button 
  }, 1000) // time in milliseconde before the animation start 

  btnTakePhoto.onclick = () => {
    
     btnTakePhoto.classList.remove('visible') // when we click on the button it's disappears
    photoBox.style.display = "block" // the camera become an element block 
    window.setTimeout(() => {
      photoBox.classList.add('visible') // the camera appears
    }, 100)
  }

  btnHeart.onclick = () => {
    polaroidWrapper.classList.add('disappearing') // when we click on the heart button the animation start

    window.setTimeout(() => {
      polaroidWrapper.classList.remove('appearing')// then we remove the polaroid picture 
      polaroidWrapper.classList.remove('disappearing') //
      btnHeart.classList.remove('visible')//
    }, 1000)
  }

  triggerCam.onclick = () => {
   
    majImgPortrait()

    // 1 Abaissement du btn
    triggerCam.classList.add('pushed') // to click on the button 
    
    redLight.classList.add('redLightActivated') // activated the red ligth  
    
    window.setTimeout(() => {
      whiteFlash.style.display = "block" // the flash become a block element
      whiteFlash.style.opacity = 0.8 // it's opacity 
      clippingPhoto()
      redLight.classList.remove('redLightActivated') // the animation of the red light stop 

        window.setTimeout(() => {
        whiteFlash.style.opacity = 0 

        window.setTimeout(() => {
          whiteFlash.style.display = "none" // white flash disappears

          /* Showing polaroid photo */
          polaroidWrapper.classList.add('appearing') // polaroid photo appears
          window.setTimeout(() => {
            btnHeart.classList.add('visible') // also the button heart 
          }, 1000)

        }, 300)

      }, 300)

    }, 3000)

    window.setTimeout(() => {
      triggerCam.classList.remove('pushed') // raise the button that take the picture 
    }, 300)


  }

}