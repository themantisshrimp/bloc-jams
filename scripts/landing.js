// our JavaScript will go here
    var pointsArray = document.getElementsByClassName('point');

    var revealPoint = function(point) {
                    point.style.opacity = 1; 
                    point.style.transform = "scaleX(1) translateY(0)"; 
                    point.style.msTransform = "scaleX(1) translateY(0)"; 
                    point.style.WebkitTransform = "scaleX(1) translateY(0)"; 
    };
    
    var animatePoints = function(points) {
                 forEach(points, revealPoint);
                
             
            // Just 'deleted' this for loop to input the forEach block from utilities.js    
           // for (var i = 0; i < points.length; i++) {
             //       revealPoint(i); 
               // }
            }; 
    
    window.onload = function() { 
        // Automatically animate the points on a tall screen where scrolling can't trigger the animation
            if (window.innerHeight > 950) { 
                animatePoints(pointsArray); 
            }
        //Not sure where this code came from...->
        //var sellingPoints = document.getElementsByClassName('selling-points')[0];
        //var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200; 
        
        window.addEventListener('scroll', function(event) {
                    //if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) 
                    if(pointsArray[0].getBoundingClientRect().top <= 500)    {
                        animatePoints(pointsArray); 
                    }
                                });
    }
    