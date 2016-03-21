
//variable declerations
var listOfSymbols = [],
    spinner = document.getElementById('spinner'),
    selectedSymbol = document.getElementById('symbolsDropdown'),
    symbol_element = document.getElementById('symbol_element'),
    winContainer = document.getElementById('won-message'),
    lostContainer = document.getElementById('lost-message'),
    audioSpin = document.getElementById('audio_spin'),
    audioWon = document.getElementById('audio_won'),
    audioLost = document.getElementById('audio_lost'),
    canvas = document.getElementById('canvas'),
    image = new Image(),
    conText = canvas.getContext('2d');


//Ajax Promise
var getJSON = function (url) {
    console.log("Looding...");
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {

                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
};

//Promise Call
getJSON('vendor/data/symbols.json').then(function (data) {
    listOfSymbols = data.symbols;
    console.log("Symbols loaded!");
    spinner.className = "enabled";
    //Writing default text into canvas
    conText.font = "12px Arial";
    conText.textAlign = "center";
    conText.fillText("select a symbol and press spin", canvas.width / 2, canvas.height / 2);


}, function (status) {
    alert('Something went wrong!');
});

//Spin button click
var spin = function () {
    var buttonSpin = this;
    spinner.className = ""; //Prevents any clicks after clicked spin button until message(won/lost) disappear
    var random = Math.floor((Math.random() * 6));
    selectedSymbolValue = selectedSymbol.options[selectedSymbol.selectedIndex].value
    console.log(selectedSymbolValue);
    audioSpin.play();

    function hideMessage() {
        winContainer.className = "";
        lostContainer.className = "";
        audioWon.pause()
        audioWon.currentTime = 0;
        audioLost.pause()
        audioLost.currentTime = 0;
        spinner.className = "enabled";

    };
    var selectedByMachine = listOfSymbols[random];
    if (selectedByMachine.name == selectedSymbolValue) {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);


        image.src = 'vendor/img/' + selectedByMachine.imgUrl;
        image.onload = function () {
            var devider = 128, imgWidth = image.width, imgHeight = image.height;
            //This fucntion makes animation(zoom effect)
            function drawImage() {
                conText.clearRect(0, 0, canvas.width, canvas.height);
                conText.drawImage(image,
                canvas.width / 2 - imgWidth / devider * 1 / 2,//Here I tried to give zoom effect from center using width
                canvas.height / 2 - imgHeight / devider * 1 / 2,//Here I tried to give zoom effect from center using height
                imgWidth / devider,
                imgHeight / devider
           );
                console.log("devider: " + devider);
                devider = devider / 2;
            }
            setTimeout(drawImage, 125);
            setTimeout(drawImage, 250);
            setTimeout(drawImage, 375);
            setTimeout(drawImage, 500);
            setTimeout(drawImage, 625);
            setTimeout(drawImage, 750);
            setTimeout(drawImage, 875);
            setTimeout(drawImage, 1000);

        };
        function showMessageWon() {
            winContainer.className = "active";
            audioWon.play();
        };
        setTimeout(showMessageWon, 1000);
        setTimeout(hideMessage, 4000);
    }
    else {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);
        image.src = 'vendor/img/' + selectedByMachine.imgUrl;
        image.onload = function () {
            var devider = 128, imgWidth = image.width, imgHeight = image.height;            
            function drawImage() {
                conText.clearRect(0, 0, canvas.width, canvas.height);
                conText.drawImage(image,
                canvas.width / 2 - imgWidth / devider * 1 / 2,//Here I tried to give zoom effect from center using width
                canvas.height / 2 - imgHeight / devider * 1 / 2,//Here I tried to give zoom effect from center using height
                imgWidth / devider,
                imgHeight / devider
           );
                console.log("devider: " + devider);
                devider = devider / 2;
            }
            setTimeout(drawImage, 125);
            setTimeout(drawImage, 250);
            setTimeout(drawImage, 375);
            setTimeout(drawImage, 500);
            setTimeout(drawImage, 625);
            setTimeout(drawImage, 750);
            setTimeout(drawImage, 875);
            setTimeout(drawImage, 1000);

        };
        function showMessageLost() {
            lostContainer.className = "active";
            audioLost.play();
        };
        setTimeout(showMessageLost, 1000);
        setTimeout(hideMessage, 4000);
    }
};

