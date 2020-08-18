
function dictionaryOne() {
    var porshe = {
        engine:"V8",
        color:"red",
        top:"convertable",
        trim:"sport",
        year:"2020",
        sound:"vroom"
    };
    delete porshe.trim;
    document.getElementById("dictionary").innerHTML = porshe.sound;
}