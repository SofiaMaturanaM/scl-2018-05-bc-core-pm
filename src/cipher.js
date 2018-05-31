window.cipher = {

    encode: (string, offset) => {
        // para obtener el string 
        let string = document.getElementById("encodeButton");
        // para obtener el offset
        let offset = parseInt.document.getElementById("numberOffset");
        //variable para retornar el mensaje
        let cipherText = "";

        // loop para codificar el mensaje
        for (i = 0; i < string.lenght; i++) {
            // para ubicar en valor ASCCI los caracteres ingresados
            let ingresedText = string.toCharCodeAt(i);

            if (ingresedText > 65)

        }
    }

    ,

    decode: (string, offset) => {
        let string = document.getElementById("decodeButton");
        let offset = parseInt.document.getElementById("numberOffset");

        // usar fromCharCode() para decodificar!!!!
    }
}