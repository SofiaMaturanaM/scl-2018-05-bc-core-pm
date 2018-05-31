window.cipher = {

    encode: (string, offset) => {
        // para obtener el string 
        string = document.getElementById("boxText");
        // para obtener el offset
        offset = parseInt(document.getElementById("numberOffset"));
        //variable para retornar el mensaje
        let cipherText = "";
        // loop para codificar el mensaje
        for (i = 0; i < string.lenght; i++) {

            // para ubicar en valor ASCCI los caracteres ingresados
            // let ingresedText = string.CharCodeAt(i);

            // condicional para codificar caracteres en mayúscula
            if (ingresedText >= 65 && ingresedText <= 90) {
                cipherText += string.fromCharCode((ingresedText - 65 + offset) % 26 + 65)

                // condicional para caracteres en minúscula   
                // } else if (ingresedText >= 97 && ingresedText <= 122) {
                //     ciphertext += string.fromCharCode((ingresedText - 97 + offset) % 26 + 97)

                // condicional para considerar los espacios
                // } else(ingresedText == 32); {
                //     ciphertext += string.fromCharCode((ingresedText - 32 + offset) % 26 + 32)

                // }
            }
            return console.log(cipherText)

        }


        // ,

        decode: (string, offset) => {
            string = document.getElementById("decodeButton");
            offset = parseInt.document.getElementById("numberOffset");

            // usar fromCharCode() para decodificar!!!!
        }
    }

}