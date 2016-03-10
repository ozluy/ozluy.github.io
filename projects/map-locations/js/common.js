var obj;

$.ajaxSetup({
    async: false
});

$.getJSON("/projects/map-locations/data/locations.json", function (json) {
    obj = json;
});


$.ajaxSetup({
    async: true
});
var branches = [];

//Initialize the branches for first view of maps
var locationsArray = obj.locations;
counter = 0;
for (var a in licationsArray) {
    for (var b in licationsArray[a].branches) {
        branches[counter] = [licationsArray[a].branches[b].city, parseFloat(licationsArray[a].branches[b].locationLat), parseFloat(licationsArray[a].branches[b].locationLng), parseFloat(b)];
        counter++;
    }
}
//Fill the city choose list
$(document).ready(function () {
    for (var a in licationsArray) {
        $('#countryList').append($('<option>').text(licationsArray[a].countryName).attr('value', a));
    }
})



function updateCities() {
    if ($("#countryList").val() == "chooseCountry") {

        $('#cityList').attr('disabled', true);
    }
    else {
        $('#cityList').removeAttr('disabled');
        $('#cityList').empty().append('<option value="chooseCity">Choose City...</option>');
        for (var b in licationsArray[$("#countryList").val()].branches) {
            $('#cityList').append($('<option>').text(licationsArray[$("#countryList").val()].branches[b].city).attr('value', b));
        }
    }
}
function updateMap() {
    if ($("#cityList").val() != "chooseCity") {
        $("#address").empty().text(licationsArray[$("#countryList").val()].branches[$("#cityList").val()].address);

        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: 13,
            scrollwheel: false,
            center: { lat: parseFloat(licationsArray[$("#countryList").val()].branches[$("#cityList").val()].locationLat), lng: parseFloat(licationsArray[$("#countryList").val()].branches[$("#cityList").val()].locationLng) + 0.01 }
        });
        setMarkers(map);
    }
}


google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: { lat: parseFloat("41.047031"), lng: parseFloat("29.033183") + 0.01 },
        scrollwheel: false
    });
    setMarkers(map);
}

function setMarkers(map) {
    var image = {
        url: '/projects/map-locations/img/map-marker.png',
        size: new google.maps.Size(90, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < branches.length; i++) {
        var branch = branches[i];
        var marker = new google.maps.Marker({
            position: { lat: branch[1], lng: branch[2] },
            map: map,
            icon: image,
            shape: shape,
            title: branch[0],
            zIndex: branch[3]
        });
    }
}

