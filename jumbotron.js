//fixes javascript modulo bug, use x.mod(y) instead of x%y
Number.prototype.mod = function(n) {
return ((this%n)+n)%n;
}

var numPics=4;
var pictures=["resources/jumbotron.jpeg","resources/jumbotron2.jpeg",
              "resources/jumbotron3.jpeg","resources/jumbotron4.jpeg"];
var shadowVals=["#242424","#888888","#777777","#888888"];
var currentPic=0;
var transitionMode=0;
var transitionDone=true;

$(document).ready(function(){
   $(".right").click(function(){
        if(transitionDone){
            currentPic++;
        transitionMode++;
        if(transitionMode.mod(2)==1)
            transition1(currentPic.mod(numPics));
        else
            transition2(currentPic.mod(numPics));
       }
   });

   $(".left").click(function(){
       if(transitionDone){
            currentPic--;
        transitionMode++;
        if(transitionMode.mod(2)==1)
            transition1(currentPic.mod(numPics));
        else
            transition2(currentPic.mod(numPics));
       }
   }); 
});

$(window).resize(function(){
    //$("#otherJumbotron").css("width",$("#jumbotron").css("width"));
});

//transitions from Jumbotron to otherJumbotron, to image at index newImg of the pictures array
function transition1(newImg){
    transitionDone=false;
    $("#jumbotron").fadeOut("slow");
       $("#otherJumbotron").css("background-image","url("+pictures[newImg]+")").fadeIn("slow",function(){
           transitionDone=true;
            $(".left").css("box-shadow", "5px 5px 2px "+shadowVals[newImg]+"");
            $(".right").css("box-shadow", "-5px 5px 2px "+shadowVals[newImg]+"");
       });
}
//transitions from otherJumbotron to Jumbotron, to image at index newImg of the pictures array
function transition2(newImg){
    transitionDone=false;
    $("#otherJumbotron").fadeOut("slow");
    $("#jumbotron").css("background-image","url("+pictures[newImg]+")").fadeIn("slow",function(){
            transitionDone=true;
            $(".left").css("box-shadow", "5px 5px 2px "+shadowVals[newImg]+"");
            $(".right").css("box-shadow", "-5px 5px 2px "+shadowVals[newImg]+"");
       });
    
}

