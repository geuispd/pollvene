var url = "https://picsoung.typeform.com/to/QXS2h1#utm_source=tf-embed-cookies" // NOTE: Replace with your typeform URL

const embedElement = document.querySelector('.target-dom-node') // NOTE: `.target-dom-node` is the target DOM element from your website or web app

var displayed = getCookie("displayed_typeform"); //
if (displayed){
  embedElement.innerHTML="<h2>Maaf, anda sudah melakukan voting!</h2>"
} else if(!displayed && displayed === "") {
  setCookie("displayed_typeform", true, 365);
  showEmbed();
}

function showEmbed(){ // call this function to display the embed typeform
  window.typeformEmbed.makeWidget(
    embedElement,
    url, 
    {
      hideHeaders: true,
      hideFooter: true,
    }
  )
}

// Cookie manipulation
// From https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) { 
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}