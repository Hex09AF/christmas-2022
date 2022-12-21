gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
        trigger: ".fixed-item",
        start: "top top",
        end: "10% center",
        scrub: true,
    }
}).to(".guide", {
    opacity: 0,
    display: 'none'
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".fixed-item",
        start: "top top",
        end: "bottom 25%",
        scrub: true,
    }
})
    .from(".leaf-1", {
        scale: 0
    })
    .from(".leaf-2", {
        scale: 0
    })
    .from(".leaf-2-a", {
        scale: 0
    })
    .from(".leaf-1-a", {
        scale: 0
    })
    .from(".leaf-2-b", {
        scale: 0
    })
    .from(".leaf-2-c", {
        scale: 0
    })
    .from(".leaf-3", {
        scale: 0
    })
    .from(".leaf-2-d", {
        scale: 0
    })
    .from(".item-1", {
        y: innerHeight,
    })
    .from(".item-2", {
        y: innerHeight,
    })
    .from(".item-3", {
        y: innerHeight,
    })
    .from(".item-4", {
        y: innerHeight,
    })
    .from(".item-5", {
        y: innerHeight,
    })
    .from(".item-6", {
        y: innerHeight,
    })

var scrollGuide = document.getElementById("scroll-guide");
var body = document.getElementById("root");
scrollGuide.addEventListener("click", function (e) {
    e.preventDefault();
    window.scroll({
        top: 800,
        left: 0,
        behavior: 'smooth'
    });
})