// const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let cipherEncodeButton = document.getElementById("decodeButton");
let string = document.getElementById("boxTextencode");
let string2 = document.getElementById("textdecipher");
// para obtener el offset
let offset = document.getElementById("numberOffset");

document.getElementById('encodeButton').addEventListener('click', function() {
    document.getElementById('textdecipher').innerHTML = window.cipher.encode(string.value, parseInt(offset.value));

});



document.getElementById('decodeButton').addEventListener('click', function() {
    document.getElementById("textdecipher").innerHTML = window.cipher.decode(string2.value, parseInt(offset.value))
});