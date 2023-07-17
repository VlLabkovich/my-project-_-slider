// Creating variables buttons and image, and find their id
var showPrevBtn = document.getElementById('show-prev-btn')
var showNextBtn = document.getElementById('show-next-btn')
var imgSlider = document.getElementById('img-slider')

// Append event on click mouse and start functions
showPrevBtn.addEventListener('click', onButtonPrevClick)
showPrevBtn.addEventListener('mouseover', onMouseOverPrevBtn)
showPrevBtn.addEventListener('mouseout', onMouseOutPrevBtn)

showNextBtn.addEventListener('click', onButtonNextClick)
showNextBtn.addEventListener('mouseover', onMouseOverNextBtn)
showNextBtn.addEventListener('mouseout', onMouseOutNextBtn)



// Creating array images
var imagesUrl = []
imagesUrl.push('https://avatars.mds.yandex.net/i?id=d4fd8046e6929871ad99e516fb3a7319cfd51d01-9152550-images-thumbs&n=13')
imagesUrl.push('https://avatars.mds.yandex.net/i?id=769792721341dbf0d077055d0e0af5ca2b5343e3-9041585-images-thumbs&n=13')
imagesUrl.push('https://avatars.mds.yandex.net/i?id=ffddc837c87c97ad1c0c1309d4942eb4aa1b6ae7-5858292-images-thumbs&n=13')
imagesUrl.push('https://avatars.mds.yandex.net/i?id=e1b0cb46ef2c55c8d4b73156e463003f-4946047-images-thumbs&n=13')
imagesUrl.push('https://avatars.mds.yandex.net/i?id=2a00000179f904da99133b9dd3a4d0ea631c-4080474-images-thumbs&n=13')

// Creating origin image for array
var currentImageArray = 0
showPrevBtn.disabled = true
imgSlider.src = imagesUrl[currentImageArray]

// Creating function for pressing on prev button 
function onButtonPrevClick() {
    currentImageArray--;
    if (currentImageArray === 0) {
        showPrevBtn.disabled = true
    } 
    if (currentImageArray < (imagesUrl.length) || currentImageArray === 0 ) {
        showNextBtn.disabled = false
    }
    imgSlider.src = imagesUrl[currentImageArray]
}

// Creating function for pressing on next button 
function onButtonNextClick() {
    currentImageArray++;

    if (currentImageArray === (imagesUrl.length - 1)){
        showNextBtn.disabled = true
    }

    if (currentImageArray > 0) {
        showPrevBtn.disabled = false
    }
    imgSlider.src = imagesUrl[currentImageArray]
}

// color button PREV
function onMouseOverPrevBtn() {
    var getPrevBtn = document.getElementById('show-prev-btn')
    getPrevBtn.className =  'show-new-btn'

    var getNextBtn = document.getElementById('show-next-btn')
    getNextBtn.className =  'show-next-btn'

}

function onMouseOutPrevBtn() {
    var getPrevBtn = document.getElementById('show-prev-btn')
    getPrevBtn.className =  'show-prev-btn'
}

// color button NEXT
function onMouseOverNextBtn() {
    var getNextBtn = document.getElementById('show-next-btn')
    getNextBtn.className =  'show-new-btn'

    var getPrevBtn = document.getElementById('show-prev-btn')
    getPrevBtn.className =  'show-prev-btn'

}

function onMouseOutNextBtn() {
    var getNextBtn = document.getElementById('show-next-btn')
    getNextBtn.className =  'show-next-btn'
}

