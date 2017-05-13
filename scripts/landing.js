// our JavaScript will go here
    var pointsArray = document.getElementsByClassName('point');
    //variable below is from an adjustment for assignment-9
    //var revealPoint = function(point) {
      //              point.style.opacity = 1; 
        //            point.style.transform = "scaleX(1) translateY(0)"; 
          //          point.style.msTransform = "scaleX(1) translateY(0)"; 
            //        point.style.WebkitTransform = "scaleX(1) translateY(0)"; 
    //};
    
    var animatePoints = function(points) {
                 //forEach(points, revealPoint);
                 var revealPoint = function(index) {
                    points[index].style.opacity = 1; 
                    points[index].style.transform = "scaleX(1) translateY(0)"; 
                    points[index].style.msTransform = "scaleX(1) translateY(0)"; 
                    points[index].style.WebkitTransform = "scaleX(1) translateY(0)"; 
    };
             
            // Just 'deleted' this for loop to input the forEach block from utilities.js    
            for (var i = 0; i < points.length; i++) {
                    revealPoint(i); 
                }
            }; 
    
    window.onload = function() { 
        // Automatically animate the points on a tall screen where scrolling can't trigger the animation (the if statement below is for connection to utilities.js)
            //if (window.innerHeight > 950) { 
              //  animatePoints(pointsArray); 
            //}
        //These variables are connected to the if statement **(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance)->
        var sellingPoints = document.getElementsByClassName('selling-points')[0];
        var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; 
        
        window.addEventListener('scroll', function(event) {
                    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                    //if(pointsArray[0].getBoundingClientRect().top <= 500)    
                        animatePoints(pointsArray); 
                    }
                                });
    }