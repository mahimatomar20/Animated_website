

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});




function boxAnimation(){
    var box = document.querySelector("#video-box")
 var exploretag = document.querySelector("#explore")
 box.addEventListener("mouseenter", function(){
    
   /* exploretag.style.opacity = 1
    exploretag.style.scale = 1
    */
    gsap.to(exploretag, {
        scale: 1,
        opacity: 1,
      })
    
 })

 box.addEventListener("mouseleave", function(){
    gsap.to(exploretag, {
        scale: 0,
        opacity: 0,
      })
 })

 box.addEventListener("mousemove", function(dets){
    gsap.to(exploretag,{
        left:dets.x,
        top:dets.y
    })
 })
}

boxAnimation()

function load(){
    gsap.from("#page1 h1",{
        y:90,
        opacity:0,
        delay: 0.5,
        duration: 0.8,
        Stragger:0.2  
      })

      gsap.from("#page1 #video-box",{
        y:90,
        opacity:0,
        delay: 1,
        duration: 0.8,
         
      })
       
       
}
load()

document.addEventListener("mousemove", function(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
  })
})

document.querySelector("#element1").addEventListener("mouseenter",function(){
  gsap.to("#cursor" , {
    transform: 'translate(-50% , -50%) scale(1)'
  })
})

document.querySelector("#element1").addEventListener("mouseleave",function(){
  gsap.to("#cursor" , {
    transform: 'translate(-50% , -50%) scale(0)'
  })
})