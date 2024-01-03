document.querySelector(".lft").addEventListener("mousemove", function(){
    document.querySelector(".float-lft").style.borderRadius = "50%"
    document.querySelector(".float-lft").style.left = "40%"
    document.querySelector(".card").style.left = "30%"
    document.querySelector(".card").style.transform = "rotateY(-50deg) translate(-50%, 0%)"
    document.querySelector(".card").style.rotate = "-5deg"


    
})

document.querySelector(".lft").addEventListener("mouseleave", function(){
    document.querySelector(".float-lft").style.borderRadius = "20%"
    document.querySelector(".float-lft").style.left = "100%"
    document.querySelector(".card").style.left = "50%"
    document.querySelector(".card").style.transform = "rotateY(0deg) translate(-50%, 0%)"
    document.querySelector(".card").style.rotate = "0deg"


    
})

document.querySelector(".rght").addEventListener("mousemove", function(){
    document.querySelector(".float-rght").style.borderRadius = "50%"
    document.querySelector(".float-rght").style.right = "40%"
    document.querySelector(".card").style.left = "60%"
    document.querySelector(".card").style.transform = "rotateY(40deg) translate(-50%, 0%)"
    document.querySelector(".card").style.rotate = "5deg"


    
})

document.querySelector(".rght").addEventListener("mouseleave", function(){
    document.querySelector(".float-rght").style.borderRadius = "20%"
    document.querySelector(".float-rght").style.right = "100%"
    document.querySelector(".card").style.left = "50%"
    document.querySelector(".card").style.transform = "rotateY(0deg) translate(-50%, 0%)"
    document.querySelector(".card").style.rotate = "0deg"


    
})


// document.querySelector(".rght").addEventListener("mousemove", function(){
//     document.querySelector(".float-rght").style.borderRadius = "50%"
//     document.querySelector(".float-rght").style.right = "40%"
//     document.querySelector(".card").style.left = "70%"
//     document.querySelector(".card").style.transform = "rotateY(50deg) translate(-50%, 0%)"
//     document.querySelector(".card").style.rotate = "5deg"


    
// })

// document.querySelector(".rght").addEventListener("mouseleave", function(){
//     document.querySelector(".float-rght").style.borderRadius = "20%"
//     document.querySelector(".float-rght").style.right = "100%"
//     document.querySelector(".card").style.left = "50%"
//     document.querySelector(".card").style.transform = "rotateY(0deg) translate(-50%, 0%)"
//     document.querySelector(".card").style.rotate = "0deg"

// })


hjiokkhf