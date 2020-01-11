function updateDate(){
    var lastMod = document.lastModified;
    document.getElementById("footer").innerHTML= "&copy; Riley Slik" + lastMod;
}

updateDate();
