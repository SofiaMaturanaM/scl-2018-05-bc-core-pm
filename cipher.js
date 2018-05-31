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

            // condicional para codificar caracteres en mayúscula
            if (ingresedText >= 65 && ingresedText <= 90) {
                cipherText += string.fromCharCode(ingresedText - 65 + offset)

                // condicional para caracteres en minúscula   
            } else if (ingresedText >= 97 && ingresedText <= 122) {
                ciphertext += string.fromCharCode(ingresedText - 97 + offset)

                // condicional para considerar los espacios
            } else(ingresedText == 32); {
                ciphertext += string.fromCharCode(ingresedText - 32 + offset)

            }
            return cipherText
        }
    }


    ,

    decode: (string, offset) => {
        let string = document.getElementById("decodeButton");
        let offset = parseInt.document.getElementById("numberOffset");

        // usar fromCharCode() para decodificar!!!!
    }
}