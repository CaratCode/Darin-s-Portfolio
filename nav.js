
function Tab(idString,url){
    this.id= idString;
    this.location= url;
    this.animationDone=true;
    this.readyToClose=false;
    var tab=this;
    $(tab.id).click(function(){
       window.location.href= tab.location; 
    });
    
    $(tab.id).mouseenter(function(){
       if(tab.animationDone){
           tab.animationDone=false;
          // $("#bar").css("background-color",$(tab.id).css("background-color"));
           $(tab.id).animate({height: "75px"},function(){tab.animationDone=true;if(tab.readyToClose) close(tab);});
       } 
    });
    $(tab.id).mouseleave(function(){
       if(tab.animationDone)
           close(tab);
        else
            tab.readyToClose=true;
    });
    
}

$(document).ready(function(){
    var RedTab = new Tab("#RedTab","index.html");
    var YellowTab= new Tab("#YellowTab","about.html");
    var GreenTab = new Tab("#GreenTab","portfolio.html");
    var BlueTab = new Tab("#BlueTab","contact.html");
});

function close(tab){
    if(tab.animationDone){
    tab.animationDone=false;
    $(tab.id).animate({height: "53px"},function(){tab.animationDone=true;tab.readyToClose=false;});
    }
}

