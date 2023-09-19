const slider = document.querySelector(".slider")

const leftArrow = document.querySelector(".left")
const rightArrow = document.querySelector(".right")


var index = 0

rightArrow.addEventListener("click", () =>{

    if(index < 2){
        index += 1;
        slider.style.transform = 'translate('+ (index) * -33.3 +'%)';
    }
    else{
        index = 0
        slider.style.transform = 'translate(0%)';
    }
});

leftArrow.addEventListener("click", () =>{

    if(index > 0){
        index -= 1;
        slider.style.transform = 'translate('+ (index) * -33.3 +'%)';
    }
    else{
        index = 2
        slider.style.transform = 'translate(-66%)';
    }
});