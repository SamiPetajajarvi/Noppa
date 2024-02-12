

function rollTheDice() { 
    setTimeout(function () {
     
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
        

        document.querySelector(".img").setAttribute("src", randomNumber1 + ".png"); 
        
        
    
    }, 50);
}




