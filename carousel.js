var ul = $(".carousel ul")
var image_count = ul.children().length
var image_width_percent = 100.0 / image_count

//visible image index
var image_index = 0

//looping variables, turns 4 images into 6 to create illusion of looping
var first_image = ul.find("li:first-child")
var last_image = ul.find("li:last-child")
last_image.clone().prependTo(ul)
first_image.clone().appendTo(ul)

// For Each over li elements and their CSS left positions are set according to their indexes.
ul.find("li").each(function (index) {
    var left_margin_percent = (image_width_percent * index) + "%";
    $(this).css({"left": left_margin_percent});
    $(this).css({width: (100 / image_count) + "%"});
})

//margin linked to image index, subtracts -100% (plus additional 100% for the prepended/appended images) for looping
function image(new_slide_index) {
    var margin_left_pc = (new_slide_index * (-100) - 100) + "%"


    ul.animate({"margin-left": margin_left_pc}, 400, function () {

        // If image index is below 0 through the looping, it goes back to index 0 = first image
        if (new_slide_index < 0) {
            ul.css("margin-left", ((image_count) * (-100)) + "%")
            new_slide_index = image_count - 1
        }
        // If image index is above current index (next image) slider moves forward it forward
        else if (new_slide_index >= image_count) {
            ul.css("margin-left", "-100%")
            new_slide_index = 0
        }

        image_index = new_slide_index

    })
}

ul.css("margin-left", "-100%")

// Listen for click of prev button and lower image index
$(".carousel .prev").click(function () {
    image(image_index - 1)
})

// Listen for click of next button and raise image index
$(".carousel .next").click(function () {
    image(image_index + 1)
})

