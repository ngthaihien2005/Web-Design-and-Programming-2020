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
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line
    addItalianAndSonsMarker(map);
    addBellucisItalianMarker(map);
    addChairmanAndYipMarker(map);
    addAsianNoodleMarker(map);
    addJewelOfIndiaMarker(map);
    addBluGingerMarker(map);
}
// Add other functions below this line
function addItalianAndSonsMarker(map) {
    // Italian and Sons Marker
    var ItalianAndSons = new google.maps.LatLng(-35.274965, 149.132295);
    var markerItalianAndSon = new google.maps.Marker({
        position: ItalianAndSons,
    });

    markerItalianAndSon.setMap(map);

    var contentItalianAndSons =
        ' <h1>Italian and Sons</h1>' +
        ' <img src="../images/location/is_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano. Don&apos;t miss daily changing main dishes of the day such' +
        ' as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits. Australian Good Food Guide.</p>' +
        '<p><a href="http://italianandsons.com.au/" target="_blank">Click here</a> for the Italian and Son website</p>';

    var infoItalianAndSon = new google.maps.InfoWindow({
        content: contentItalianAndSons
    });

    google.maps.event.addListener(markerItalianAndSon, 'click', function () {
        infoItalianAndSon.open(map, markerItalianAndSon);
    });
}

function addBellucisItalianMarker(map) {
    // Bellucis Italian Marker
    var BellucisItalian = new google.maps.LatLng(-35.319609, 149.132398);
    var markerBellucisItalian = new google.maps.Marker({
        position: BellucisItalian,
    });

    markerBellucisItalian.setMap(map);

    var contentBellucisItalian =
        ' <h1>Belluci&apos;s Italian</h1>' +
        ' <img src="../images/location/bellucis_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>Belluci&apos;s demonstrates a new concept, a new food philosophy &ndash; the dawn of a new era in Canberra dining.Having been established more than 20 years ago, Belluci&apos;s fast became an iconic name in Canberra. To bring you the finest dishes, we&apos;ve gone back to traditional Italian routes, creating simple, rustic food.</p>' +
        '<p><a href="https://bellucis.com.au/home.php" target="_blank">Click here</a> for the for the Belluci&apos;s Italian website</p>';

    var infoBellucisItalian = new google.maps.InfoWindow({
        content: contentBellucisItalian
    });

    google.maps.event.addListener(markerBellucisItalian, 'click', function () {
        infoBellucisItalian.open(map, markerBellucisItalian);
    });
}

function addChairmanAndYipMarker(map) {
    // Chairman and Yip Marker
    var ChairmanAndYip = new google.maps.LatLng(-35.311552, 149.133933);
    var markerChairmanAndYip = new google.maps.Marker({
        position: ChairmanAndYip,
    });

    markerChairmanAndYip.setMap(map);

    var contentChairmanAndYip =
        ' <h1>Chairman & Yip</h1>' +
        ' <img src="../images/location/chairman_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>The Chairman & Yip has become one of Canberra&apos;s longest standing and most highly regarded institutions, having received numerous awards over the years, offering an ever consistent and professional quality of service for corporate dining, conferences and presentations.</p>' +
        '<p><a href="http://chairmangroup.com.au/chairmanyip/" target="_blank">Click here</a> for the Chairman &amp; Yip website</p>';

    var infoChairmanAndYip = new google.maps.InfoWindow({
        content: contentChairmanAndYip
    });

    google.maps.event.addListener(markerChairmanAndYip, 'click', function () {
        infoChairmanAndYip.open(map, markerChairmanAndYip);
    });
}

function addAsianNoodleMarker(map) {
    // Asian Noodle House Marker
    var AsianNoodle = new google.maps.LatLng(-35.250300, 149.136437);
    var markerAsianNoodle = new google.maps.Marker({
        position: AsianNoodle,
    });

    markerAsianNoodle.setMap(map);

    var contentAsianNoodle =
        ' <h1>Dickson Asian Noodle House</h1>' +
        ' <img src="../images/location/noodle_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine. The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away.Vibe FM</p>' +
        '<p><a href="https://www.facebook.com/pages/Dickson-Asian-Noodle-House/156690017692038" target="_blank">Click here</a> for the Dickson Asian Noodle House FB page</p>';

    var infoAsianNoodle = new google.maps.InfoWindow({
        content: contentAsianNoodle
    });

    google.maps.event.addListener(markerAsianNoodle, 'click', function () {
        infoAsianNoodle.open(map, markerAsianNoodle);
    });
}

function addJewelOfIndiaMarker(map) {
    // Jewel of India Marker
    var JewelOfIndia = new google.maps.LatLng(-35.320577, 149.132825);
    var markerJewelOfIndia = new google.maps.Marker({
        position: JewelOfIndia,
    });

    markerJewelOfIndia.setMap(map);

    var contentJewelOfIndia =
        ' <h1>Jewel Of India</h1>' +
        ' <img src="../images/location/jewel_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>Finding a balance between dishes inspired by authentic recipes and creating a modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth-watering feast. Australian Good Food Guide.</p>' +
        '<p><a href="http://www.jewelofindia.com.au/" target="_blank">Click here</a> for the Jewel of India website</p>';

    var infoJewelOfIndia= new google.maps.InfoWindow({
        content: contentJewelOfIndia
    });

    google.maps.event.addListener(markerJewelOfIndia, 'click', function () {
        infoJewelOfIndia.open(map, markerJewelOfIndia);
    });
}

function addBluGingerMarker(map) {
    // Blu Ginger Marker
    var BluGinger = new google.maps.LatLng(-35.276996, 149.131959);
    var markerBluGinger = new google.maps.Marker({
        position: BluGinger,
    });

    markerBluGinger.setMap(map);

    var contentBluGinger =
        ' <h1>Blu Ginger</h1>' +
        ' <img src="../images/location/bluginger_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        '<p>At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent, to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you.</p>' +
        '<p><a href="http://www.bluginger.com.au/" target="_blank">Click here</a> for the Blu Ginger website</p>';

    var infoBluGinger = new google.maps.InfoWindow({
        content: contentBluGinger
    });

    google.maps.event.addListener(markerBluGinger, 'click', function () {
        infoBluGinger.open(map, markerBluGinger);
    });
}
// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap); 

function changeHtmlContent1() {
    var content =
        "<h2 class=" + "niconne2" +">Cheap Eats</h2>" +
        "<h3>Asian Noodle House</h3>" +
        "<p>When it comes to value for money, you can do a lot worse than fill up on a big bowl of laksa. It&apos;s cheap, the servings are gigantic and while a great laksa is always preferable to a mediocre one, even substandard laksa tends to taste okay.</p>" +
        "<img src=" + "images/carousel/dicksonnoodle_car.jpeg" + ">" +
        "<h3>Blu Ginger</h3>" +
        "<p>Blu Ginger goes through great pains to pick the freshest, locally-sourced produce and combine it with imported, and authentic, spices from the sub-continent.</p>" +
        "<img src=" + "images/carousel/bluginger_car.jpg" + ">"
        ;

    document.getElementById("prices-article").innerHTML = content;
}
function changeHtmlContent2() {
    var content =
        "<h2 class="+"niconne2"+"> Mid Range</h2> " +
        "<h3>Belluci's Italian</h3>" +
        "<p>Great ambiance, excellent service absolutely delicious food.</p>" +
        "<img src=" + "images/carousel/bellucis.jpg" + ">" +
        "<h3>Jewel of India</h3>" +
        "<p>The unique signature of a place and its people &ndash; Cuisine &ndash; tells us about a culture, people and lifestyles like no other! </p>" +
        "<img src=" + "images/carousel/jewel_car.jpg" + ">";

    document.getElementById("prices-article").innerHTML = content;
}
function changeHtmlContent3() {
    var content =
        "<h2 class=" + "niconne2" +">Fine Dining</h2>" +
        "<h3>Chairman and Yip</h3>" +
        "<p>The Chairman & Yip is an iconic Canberra institution, operating for over 20 years. Centrally located in the Hotel Realm precinct in Barton, we serve modern Pan-Asian cuisine in spacious and elegant surrounds, with private dining rooms and a fully-enclosed balcony garden.</p>" +
        "<img src=" + "images/carousel/chairman_car.jpeg" + ">" +
        "<h3>Italian and Sons</h3>" +
        "<p>Forget flying to Italy and head to Canberra&apos;s bustling Italian and Sons instead for a night of authentic food and superb wine. The wine list is a slick inventory of Italian wine from key regions, plus the odd French and Australian addition.</p>" +
        "<img src=" + "images/carousel/itandsons_car.jpg" + ">";

    document.getElementById("prices-article").innerHTML = content;
}
function makeTextLarger(obj) {
    obj.style.fontSize = "30px";
}

function makeTextSmaller(obj) {
    obj.style.fontSize = "20px";
}
