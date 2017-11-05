var imgArray = new Array()
image[0] = new Image()
image[0].src = "thermometer.jpg"
image[1] = new Image()
image[1].src = "building.jpg"
image[2] = new Image()
image[2].src = "greenbottles.jpg"
var timeoutX

function carousel(index){
    window.document.pic.src = image[index].src
    index++

    if (index >= image.length){
        index = 0
    }
    var slideshow = "carousel("+ index + ");"
    timeoutX = setTimeout(slideshow,2000);
}
