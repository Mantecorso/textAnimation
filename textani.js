// NO consigo que funcione


/*     var video = document.getElementById("videohumo");

    video.addEventListener("canplay", function() {
        setTimeout(function() { video.play();}, 5000);
    }); */

window.addEventListener('load', function() {
    
    setTimeout(function(){
        document.getElementById("videohumo").play();
      }, 5000);
})
