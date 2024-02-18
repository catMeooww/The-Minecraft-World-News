function minecraft_menu(){
    document.getElementById("minecraft_logo_text").style.visibility= "visible";
    for(i=0;i < document.getElementsByClassName("optionp").length;i++){
        document.getElementsByClassName("optionp").item(i).style.visibility = "visible";
    }
    
}
function minecraft_close_menu(){
    document.getElementById("minecraft_logo_text").style.visibility= "hidden";
    for(i=0;i < document.getElementsByClassName("optionp").length;i++){
        document.getElementsByClassName("optionp").item(i).style.visibility = "hidden";
    }
}