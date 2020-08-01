const leftArm = document.getElementById("left_arm");
const rightArm = document.getElementById("right_arm");
const redBall = document.getElementById ("red_ball");
const introText = document.getElementsByClassName("intro_text");
const subText = document.getElementsByClassName("sub_text");
const large = window.matchMedia ("(min-width:1500px)");
const desktop = window.matchMedia("(max-width: 1366px)");
const tablet = window.matchMedia("(max-width: 768px)");
const phone = window.matchMedia("(max-width: 375px)");
$(document).ready(function()
{
  $('.slider').slick({
    slidesToShow:4,
    slidesToScroll:1,
    swipe:false,
    infinite:false,
    variableWidth:false,
      responsive:[
        { 
            breakpoint:1024,
            settings: {
                arrows:false,
                dots:true,
                slidesToScroll:2,
                swipe:true,
                slidesToShow:2,
                adaptiveHeight:false
            }
        },  
            { 
            breakpoint:768,
            settings: {
                arrows:false,
                dots:true,
                slidesToScroll:1,
                swipe:true,
                slidesToShow:1,
                adaptiveHeight:false
            }
      
        }
    ],
    });
}); 
/*Smooth scroll*/
$(function()  {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
       
        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        },1500);
    });   
});

$(document).ready(function headerAnimation(){
     if (desktop.matches) {
        setTimeout(function armsAppearMedium() {
            gsap.to("#left_arm", {left:"-3%",duration:3,ease:"power1" });
            gsap.to("#right_arm", {right:"1%",duration:3,ease:"power1"});   
        },5);
        setTimeout (function armsSlideMedium() {
            gsap.to("#left_arm", {left:"-6%",duration:2,y:10,ease:"power2" });
            gsap.to("#right_arm", {right:"-1%",duration:2,y:-48,ease:"power2"});  
        },3000);
        setTimeout (function redBallOpacity(){
            gsap.to("#redBall",{opacity:1,duration:3,})
        },3000);
        setTimeout (function textAnimation(){
            gsap.fromTo("#text", {y:-100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
        },5000);
        setTimeout (function subTextAnimation(){
            gsap.fromTo(".intro_subtext", {y:100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
        },6000);}
    if (tablet.matches) {
        setTimeout(function armsAppearTablet() {
            gsap.to("#left_arm", {left:"-9%",duration:3,ease:"power1" });
            gsap.to("#right_arm", {right:"-8%",duration:3,ease:"power1"});   
        },5);
        setTimeout (function armsSlideTablet() {
            gsap.to("#left_arm", {left:"-12%",duration:2,y:10,ease:"power2" });
            gsap.to("#right_arm", {right:"-12%",duration:2,y:-16,ease:"power2"});  
        },3000);
        setTimeout (function redBallOpacity(){
            gsap.to("#red_ball",{opacity:1,duration:3,})
        },3000);}
    if (large.matches) {
        setTimeout(function armsAppear() {
            gsap.to("#left_arm", {left:"-1%",duration:3,ease:"power1" });
            gsap.to("#right_arm", {right:".5%",duration:3,ease:"power1"});   
        },5);
        setTimeout (function armsSlide() {
            gsap.to("#left_arm", {left:"-4%",duration:2,y:6,ease:"power2" });
            gsap.to("#right_arm", {right:"-.5%",duration:2,y:-80,ease:"power2"});  
        },3000);
        setTimeout (function redBallOpacity(){
            gsap.to("#redBall",{opacity:1,duration:3,})
        },3000);
        setTimeout (function textAnimation(){
            gsap.fromTo("#text", {y:-100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
        },5000);
        setTimeout (function subTextAnimation(){
            gsap.fromTo(".intro_subtext", {y:100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
        },6000);}
        setTimeout (function arrowsAnimation(){
            gsap.fromTo ("#arrows", {y:-15},{y:0,duration:1,yoyo: true,repeat: -1,ease:"power2",opacity:1});
        },3000)
    if (phone.matches) {
        setTimeout(function armsAppear() {
            gsap.to("#left_arm", {left:"-8%",duration:3,ease:"power1" });
            gsap.to("#right_arm", {right:"-12%",duration:3,ease:"power1"});   
        },5);
        setTimeout (function armsSlide() {
            gsap.to("#left_arm", {left:"-11%",duration:2,y:8,ease:"power2" });
            gsap.to("#right_arm", {right:"-12%",duration:2,y:-12,ease:"power2"});  
        },3000);
        setTimeout (function redBallOpacity(){
            gsap.to("#redBall",{opacity:1,duration:3,})
            },3000);
        setTimeout (function textAnimation(){
            gsap.fromTo("#text", {y:-100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
        },5000);
        setTimeout (function subTextAnimation(){
            gsap.fromTo(".intro_subtext", {y:100,opacity:0},{y:0, duration:1,ease:"power1",opacity:1});
    },6000);}
});
