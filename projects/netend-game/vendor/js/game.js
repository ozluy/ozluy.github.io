var listOfSymbols = [],
    spinner = document.getElementById('spinner'),
    selectedSymbol = document.getElementById('symbolsDropdown'),
    symbolContainer = document.getElementById('symbolParent');

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

getJSON('vendor/data/symbols.json').then(function (data) {
    listOfSymbols = data.symbols;
    console.log("Symbols loaded!");
    spinner.className = "enabled";

}, function (status) {
    alert('Something went wrong!');
});
var winContainer = document.getElementById('won-message');
var lostContainer = document.getElementById('lost-message');
var audioWon = document.getElementById('audio_won');
var audioLost = document.getElementById('audio_lost');
var spin = function () {
    var random = Math.floor((Math.random() * 6));
    selectedSymbolValue = selectedSymbol.options[selectedSymbol.selectedIndex].value
    console.log(selectedSymbolValue);

    function hideMessage() {
        winContainer.className = "";
        lostContainer.className = "";
        audioWon.pause()
        audioWon.currentTime = 0;
        audioLost.pause()
        audioLost.currentTime = 0;
    };
    var selectedByMachine = listOfSymbols[random];
    if (selectedByMachine.name == selectedSymbolValue) {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);
        symbolContainer.innerHTML = '<img class="symbol animated" alt="' + selectedByMachine.name + '" src="vendor/img/' + selectedByMachine.imgUrl + '" />';
        function showMessageWon() {
            winContainer.className = "active";
            audioWon.play();
        };
        setTimeout(showMessageWon, 500);
        setTimeout(hideMessage, 3500);
    }
    else {
        console.log("machine: " + selectedByMachine.name + ", your select:" + selectedSymbolValue);
        symbolContainer.innerHTML = '<img class="symbol animated" alt="' + selectedByMachine.name + '" src="vendor/img/' + selectedByMachine.imgUrl + '" />';
        function showMessageLost() {
            lostContainer.className = "active";
            audioLost.play();
        };
        setTimeout(showMessageLost, 500);
        setTimeout(hideMessage, 3500);
    }
};
