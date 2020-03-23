let myPaths = document.querySelectorAll('path')

function setup(){
    
//    anime({
//        targets:myPaths,
//        translateX: 30
//    }) 
    
     for (var i = 0; i < myPaths.length; i++) {

        // for each path
        var pathEl = myPaths[i];

        // Set an offset along the path.
        var offset = anime.setDashoffset(pathEl);

        pathEl.setAttribute('stroke-dashoffset', offset);

        // Animation parameters
        let tmp = anime({
            targets: pathEl,
            strokeDashoffset: [offset, 0],
            duration: anime.random(1000, 3000),
            delay: anime.random(0, 2000),
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
            autoplay: false
        });

        tmp.play()
    }
}
  

function mousePressed(){
    anime({
        targets: document.querySelectorAll('image'),
        translateY: 150,
        scale: 0.55
    })
}



