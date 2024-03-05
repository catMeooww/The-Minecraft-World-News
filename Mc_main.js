var r = 255;
var g = 255;
var b = 255;
function minecraft_menu(){
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    document.getElementById("minecraft_logo_text").style.visibility= "visible";
    for(i=0;i < document.getElementsByClassName("optionp").length;i++){
        document.getElementsByClassName("optionp").item(i).style.color = "rgb("+r+","+g+","+b+")";
        document.getElementsByClassName("optionp").item(i).style.visibility = "visible";
    }
    
}
function minecraft_close_menu(){
    document.getElementById("minecraft_logo_text").style.visibility= "hidden";
    for(i=0;i < document.getElementsByClassName("optionp").length;i++){
        document.getElementsByClassName("optionp").item(i).style.visibility = "hidden";
    }
}