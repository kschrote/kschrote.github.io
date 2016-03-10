var heads = ["cow.jpg","dog.jpg", "trump.jpg", "moonhead.jpg", "goku.jpg", "lisahead.jpg", "otterhead.jpg"];

var randoming = [Math.floor(Math.random()*heads.length)];
            
         $(".mybutton").click(function randohead(){
             var randomimg = heads[Math.floor(Math.random()*heads.length)];
    
             $(".head").html("<img src='images/" + randomimg + "'>");
             console.log()
            });