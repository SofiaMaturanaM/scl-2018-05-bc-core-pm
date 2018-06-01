window.cipher = {

    encode: (string, offset) => {
        // para obtener el string 

        //variable para retornar el mensaje
        let cipherText = "";

        // loop para codificar el mensaje
        for (let i = 0; i < string.length; i++) {

            string = string.toUpperCase();

            let toASCCI = string.charCodeAt(i);

            let position = (toASCCI - 65 + offset) % 26 + 65;

            let fromASCCI = String.fromCharCode(position);
            cipherText += fromASCCI;
        }
        return cipherText;

    },

    decode: (string, offset) => {

        let decipherText = "";

        for (let j = 0; j < string.length; j++) {

            string = string.toUpperCase();

            let toASCCI = string.charCodeAt(j);

            let position = (toASCCI + 65 - offset) % 26 + 65;

            let fromASCCI = String.fromCharCode(position);
            decipherText += fromASCCI;
        }
        return decipherText;


    }
}