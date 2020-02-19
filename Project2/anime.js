// By CSS class
anime({
    targets: '.txt',
    translateX: 390
});

//  By Element ID
let anyName = document.getElementById("id_1")
anime({
    targets: anyName,
    translateX: 290,
    easing: 'easeInOutQuad'
});

// by element Tag
let drawings = document.querySelectorAll("svg")
anime({
    targets: drawings,
    translateX: 290,
    easing: 'easeInQuad'
});

// By query selector
let rows = document.querySelectorAll(".txt2")
anime({
    targets: rows,
    translateX: 290,
    easing: 'easeOutQuad'
});

// By query selector
let myRows = document.querySelectorAll(".row1")
anime({
    targets: myRows,
    translateX: 290,
    easing: 'easeOutQuad'
});


// TRANSFORMATIONS
let transform = document.querySelectorAll(".box3")
anime({
    targets: transform,
    translateX: 490,
    skew: 40,
    scale: 1.2,
    easing: 'easeInOutQuad'
});

// PROPERTIES ICON 
let props = document.querySelectorAll(".image")
anime({
    targets: props,
    translateX: {
        value: 390,
        duration: 800
    },
    rotate: {
        value: 60,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 250 // All properties except 'scale' inherit 250ms delay
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//green box
let animation = anime({
  targets: 'div',
  translateX: 100,
  borderRadius: 50,
  duration: 2000,
  easing: 'linear',
  direction: 'alternate'
});    
