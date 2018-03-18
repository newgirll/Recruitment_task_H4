document.addEventListener("DOMContentLoaded", function(){
    const eye = document.querySelectorAll(".box__list__item--eye");
    const weight = document.querySelectorAll(".box__list__item--weight");


    for(var i = 0; i < eye.length; i++) {
        if(typeof eye[i] !== "undefined"){
            eye[i].addEventListener("mouseover", function(){
                this.setAttribute("src", "./public/images/okohover.png");
            })
            eye[i].addEventListener("mouseleave", function(){
                this.setAttribute("src", "./public/images/oko.png");
            })
        }
    }

    for(var i = 0; i < weight.length; i++) {
        if(typeof weight[i] !== "undefined"){
            weight[i].addEventListener("mouseover", function(){
                this.setAttribute("src", "./public/images/wagahover.png");
            })
            weight[i].addEventListener("mouseleave", function(){
                this.setAttribute("src", "./public/images/waga.png");
            })
        }
    }

    
})