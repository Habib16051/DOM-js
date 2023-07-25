// window.onscroll = () => {
//     console.log("scrolled")
// }

let scroller = 0;
window.addEventListener("scroll", ()=>{
    let NewScroller = window.scrollYOffset || document.documentElement.scrollTop;
    if(NewScroller > scroller){
        console.log("scroll is down");  
    }else{
        console.log("scroll is up");
    }
    scroller = NewScroller;
});