//fixes javascript modulo bug, use x.mod(y) instead of x%y
Number.prototype.mod = function(n) {
return ((this%n)+n)%n;
}

var numPics=27;
var titles=["Green Eggs and Ham","ESRI Logo","Basketball","Red Tulip","Shamrock","Walmart Logo","Me","On Cloud Nine","Nintendo DS","Giant Panda","Gold Honda Pilot","Edelweiss","Mary Poppins","The Sound of Music","Shirley Temple","Alice in Wonderland","The Very Hungry Caterpillar","Chinese New Year 2017","Yoshinoya Logo","Cloudy with a Chance of Meatballs","Groundhog Day 2017","Double Six Domino","Yellow Grapefruit-2","Sweet Rose","Happy Valentine's Day","Sweet 16","Purple Tulip"];
var pictures=[];
for(var i=0; i<numPics; i++) pictures.push("resources/"+titles[i]+".jpeg");
var shadowVals=["#242424","#888888","#777777","#242424"];
var currentPic=0;
var transitionMode=0;
var transitionDone=true;

$(document).ready(function(){
    createThumbnails();
    $("#"+currentPic).addClass("selected");
    $(".thumb").click(function(){
        var id= this.id;
        if(currentPic!=parseInt(id)){
            currentPic=parseInt(id);
            changePic("#"+id);
        }
    });
    
    $(".thumb").mouseenter(function(){
        $("#"+this.id).animate({top:"-=20px"},250,function(){
            $("#"+this.id).animate({top:"+=20px"},250);
        });
        //$("#"+this.id).addClass("selected");
    });
     $(".thumb").mouseleave(function(){
         //if(this.id!=currentPic)
           // $("#"+this.id).removeClass("selected");
         /*if(!thumbClicked){
            $("#"+this.id).animate({top:"+=20px"},250);
         }
          thumbClicked=false;*/
    });
    
    
   $(".right").click(function(){
       if(transitionDone){
            currentPic++;
            changePic("#"+currentPic.mod(numPics));
       }
   });

   $(".left").click(function(){
       if(transitionDone){
        currentPic--;
        changePic("#"+currentPic.mod(numPics));
       }
   }); 
});

function changePic(id){
    markSelected(id);
    transitionMode++;
       if(transitionMode.mod(2)==1)
        transition1(currentPic.mod(numPics));
       else
        transition2(currentPic.mod(numPics));
}

function markSelected(id){
    $(".thumb").removeClass("selected");
    $(id).addClass("selected");
}
//transitions from slidesho1 to slideshow2, to image at index newImg of the pictures array
function transition1(newImg){
    transitionDone=false;
    $(".slideshow1").fadeOut("slow");
       $(".slideshow2").attr("src",pictures[newImg]).fadeIn("slow",function(){
            $(".left").css("box-shadow", "5px 5px 2px "+shadowVals[newImg]+"");
            $(".right").css("box-shadow", "-5px 5px 2px "+shadowVals[newImg]+"");
            transitionDone=true;
       });
    $(".slideText h6").text((newImg+1)+"/27");
    $(".slideText h4").text(titles[newImg]);
}
//transitions from slideshow2 to slideshow1, to image at index newImg of the pictures array
function transition2(newImg){
    transitionDone=false;
    $(".slideshow2").fadeOut("slow");
    $(".slideshow1").attr("src",pictures[newImg]).fadeIn("slow",function(){
            $(".left").css("box-shadow", "5px 5px 2px "+shadowVals[newImg]+"");
            $(".right").css("box-shadow", "-5px 5px 2px "+shadowVals[newImg]+"");
            transitionDone=true;
       });
    $(".slideText h6").text((newImg+1)+"/27");
    $(".slideText h4").text(titles[newImg]);
    
}

function createThumbnails(){
    for(var i=0; i < numPics; i++){
        var thumb = $("<img>").attr("id",i).attr("class","thumb").attr("src",pictures[i]);
        $(".thumbContainer").append(thumb);
    }
}


