var heads = ["moonhead.jpg", "goku.jpg", "lisahead.jpg", "otterhead.jpg", "dog.jpg", "trump.jpg"];
var torso = ["lisatorso.jpg", "misprints.jpg", "moontorso.jpg", "sherlocktorso.jpg", "tree.jpg"];
var legs = ["crocs.jpg", "lisalegs.jpg", "moonlegs.jpg", "octopus.jpg", "spongebob.jpg"];

$(".mybutton").click(function(){
        var randomhead = heads[Math.floor(Math.random()*heads.length)];
        $(".head").html("<img src='images/" + randomhead + "'>");

        var randomtorso = torso[Math.floor(Math.random()*torso.length)];
        $(".torso").html("<img src='images/" + randomtorso + "'>");

        var randomlegs = legs[Math.floor(Math.random()*legs.length)];
        $(".legs").html("<img src='images/" + randomlegs + "'>");
});         
            
            
            
            
            