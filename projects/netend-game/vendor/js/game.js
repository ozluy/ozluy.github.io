//variable declerations
var listOfSymbols = [],
    spinner = document.getElementById('spinner'),
    selectedSymbol = document.getElementById('symbolsDropdown'),
    symbol_element = document.getElementById('symbol_element'),
    winContainer = document.getElementById('won-message'),
    lostContainer = document.getElementById('lost-message'),
    audioSpin = document.getElementById('audio_spin'),
    audioWon = document.getElementById('audio_won'),
    audioLost = document.getElementById('audio_lost');

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
        symbol_element.className = "symbol";
        spinner.className = "enabled";
    };
    var selectedByMachine = listOfSymbols[random];
    if (selectedByMachine.name == selectedSymbolValue) {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);
        symbol_element.className = "symbol animated";
        symbol_element.alt = selectedByMachine.name;
        symbol_element.src = 'vendor/img/' + selectedByMachine.imgUrl;
        function showMessageWon() {
            winContainer.className = "active";
            audioWon.play();
        };
        setTimeout(showMessageWon, 1000);
        setTimeout(hideMessage, 4000);
    }
    else {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);
        symbol_element.className = "symbol animated";
        symbol_element.alt = selectedByMachine.name;
        symbol_element.src = 'vendor/img/' + selectedByMachine.imgUrl;
        function showMessageLost() {
            lostContainer.className = "active";
            audioLost.play();
        };
        setTimeout(showMessageLost, 1000);
        setTimeout(hideMessage, 4000);
    }
};
