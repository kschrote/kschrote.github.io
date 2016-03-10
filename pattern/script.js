var heads = ["moonhead.jpg", "goku.jpg", "lisahead.jpg", "otterhead.jpg", "dog.jpg", "trump.jpg"];
var torso = ["lisatorso.jpg", "misprints.jpg", "moontorso.jpg", "sherlocktorso.jpg", "tree.jpg"];
var legs = ["crocs.jpg", "lisalegs.jpg", "moonlegs.jpg", "octopus.jpg", "spongebob.jpg"];

$(".mybutton").click(function(){
        console.log("clicked");
        var randomhead = heads[Math.floor(Math.random()*heads.length)];
        var randomtorso = torso[Math.floor(Math.random()*torso.length)];
        var randomlegs = legs[Math.floor(Math.random()*legs.length)];
        $(".stage").html("");
        $(".stage").append("<img class='head' src='images/" + randomhead + "'>");

        $(".stage").append("<img class='torso' src='images/" + randomtorso + "'>");

        $(".stage").append("<img class='legs' src='images/" + randomlegs + "'>");
});         
            
            
            
            
            