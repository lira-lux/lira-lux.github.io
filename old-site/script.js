window.onload = function(){
    const anchors = document.querySelectorAll('a[href*="#section"]');
for(let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
window.onscroll = function(){
    let scrollElem = document.getElementById('scroll-Top');
    if(self.pageYOffset > 800){
        scrollElem.style.opacity = '1';
    }else {
        scrollElem.style.opacity = '0';
    }
}
}
