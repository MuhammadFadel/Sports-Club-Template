// Get the modal
                                var modal = document.getElementById('myModal');

                                // Get the <span> element that closes the modal
                                var span = document.getElementsByClassName("close")[0];

                                // When the user clicks on <span> (x), close the modal
                                span.onclick = function() { 
                                    modal.style.display = "none";
                                }

                                // Get all images and insert the clicked image inside the modal
                                // Get the content of the image description and insert it inside the modal image caption
                                var images = document.getElementsByTagName('img');
                                var modalImg = document.getElementById("img01");
                                var captionText = document.getElementById("caption");
                                var i;
                                for (i = 0; i < images.length; i++) {
                                   images[i].onclick = function(){
                                       modal.style.display = "block";
                                       modalImg.src = this.src;
                                       modalImg.alt = this.alt;
                                       captionText.innerHTML = this.nextElementSibling.innerHTML;
                                   }
                                }

//this is for gallery show 
/********************************************************************************************************/

/* this is for disable right click in mouse */

var message="Sorry this is not allowed!";
///////////////////////////////////
function clickIE() {if (document.all) {alert(message);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {alert(message);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false")
// --> 

/********************************************************************************************/


/* this is to prevent copy the photo */

var clickmessage="sorry this is not allowed"

function disableclick(e) {
if (document.all) {
if (event.button==2||event.button==3) {
if (event.srcElement.tagName=="IMG"){
alert(clickmessage);
return false;
}
}
}
if (document.layers) {
if (e.which == 3) {
alert(clickmessage);
return false;
}
}
}

function associateimages(){
for(i=0;i<document.images.length;i++)
document.images[i].onmousedown=disableclick;
}

if (document.all)
document.onmousedown=disableclick
else if (document.layers)
associateimages()

/************************************************************************/





