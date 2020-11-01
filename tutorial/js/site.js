//For google map
// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line
    addCanberraCentreMarker(map);
    addCanberraMuseumGallery(map);
}
// Add other functions below this line
function addCanberraCentreMarker(map) {
    // Canberra Centre
    var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
    var markerCanberraCentre = new google.maps.Marker({
        position: canberraCentre,
    });

    markerCanberraCentre.setMap(map);

    var infoCanberraCentre = new google.maps.InfoWindow({
        content: "Canberra Centre"
    });

    google.maps.event.addListener(markerCanberraCentre, 'click', function () {
        infoCanberraCentre.open(map, markerCanberraCentre);
    });
}

function addCanberraMuseumGallery(map) {
    // Canberra Museum and Gallery
    var canberraMuseumGallery =
        new google.maps.LatLng(-35.2818211, 149.1289204);
    var markerCanberraMuseumGallery = new google.maps.Marker({
        position: canberraMuseumGallery,
    });

    markerCanberraMuseumGallery.setMap(map);

    var contentCanberraMuseumGallery =
        ' <h1>Canberra Museum and Gallery</h1>' +
        ' <img src="../images/CBRMuseumGallery.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p><b>Canberra Museum and Gallery</b> is an art gallery ' +
        'and museum in Canberra, the capital of Australia. ' +
        'It is located on London Circuit, in Civic in ' +
        'the centre of the city. The gallery was opened ' +
        'on 13 February, 1998.<br>' +
        '<a href="https://en.wikipedia.org/wiki/Canberra_' +
        'Museum_and_Gallery">Wikipedia</a>' +
        ' </p>';

    var infoCanberraMuseumGallery = new google.maps.InfoWindow({
        content: contentCanberraMuseumGallery
    });

    google.maps.event.addListener(markerCanberraMuseumGallery, 'click',
        function () {
            infoCanberraMuseumGallery.open(map, markerCanberraMuseumGallery);
        });
}
// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap); 










// JavaScript source code
function changeHtmlContent() {
    var content =
        "<h2>What is HTML?</h2>" +
        "<p>HTML is a markup language for describing web documents.</p>" +
        "<ul>" +
        "<li>HTML stands for Hyper Text Markup Language</li>" +
        "<li>A markup language is a set of markup tags</li>" +
        "<li>HTML documents are described by HTML tags</li>" +
        "<li>Each HTML tag describes different document content</li>" +
        "</ul>" +
        "<p>www.w3schools.com</p>";

    document.getElementById("mydiv").innerHTML = content;
    //document.getElementById("mydiv").style = "color:blue; background-color:lightgrey;";
    document.getElementById("mydiv").className = "btn-primary";
}

function makeTextLarger(obj) {
    obj.style.fontSize = "30px";
}

function makeTextSmaller(obj) {
    obj.style.fontSize = "10px";
}

var w = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var h = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

// The browser window (the browser viewport) is NOT including toolbars and scrollbars.
document.getElementById("wndw").innerHTML = "Browser viewport window width: " + w + ", height: " + h + ".";
// The screen.width property returns the width of the visitor's screen in pixels.
document.getElementById("scrn").innerHTML = "Screen width: " + screen.width + ", screen height: " + screen.height;
// The screen.availWidth property returns the width of the visitor's screen, in
// pixels, minus interface features like the Windows Taskbar.
document.getElementById("avail").innerHTML = "Available Screen Width: " + screen.availWidth + "px";
// Display the href (URL) of the current page:
document.getElementById("url").innerHTML = "Page location is " + window.location.href;
// Display the name of the host:
document.getElementById("hst").innerHTML = "Page hostname is " + window.location.hostname;
// Display the path name of the current URL
document.getElementById("pth").innerHTML = "Page path is " + window.location.pathname;

// Load a new document
function loadGoogle() {
    window.location.assign("http://www.google.com.au")
}

// An alert box is used to make sure information comes through to the user
function alertFunc() {
    alert("Hello, World!");
}

// A confirm box is used if you want the user to verify or accept something
function confirmFunc() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("cnfrm").innerHTML = txt;
}

// A prompt box is often used for user to input a value before entering a page.
function promptFunc() {
    var txt;
    var mark = prompt("Enter your mark", "00");
    if (mark == null || mark == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Your mark is " + mark;
    }
    document.getElementById("prmpt").innerHTML = txt;
}

function makeImgBlurr(obj) {
    obj.style.opacity = "0.7";
}

function makeImgNotBlurr(obj) {
    obj.style.opacity = "1";
    document.getElementById("bgimage").style.backgroundImage = "";
}
function ImgClicked(obj) {
    obj.style.opacity = "0.7";
    document.getElementById("bgimage").style.backgroundSize = "100%";
    document.getElementById("bgimage").style.backgroundImage = obj.style.backgroundImage;
}
