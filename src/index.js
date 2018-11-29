window.onload = () => {

    
    
    const rootDiv = document.getElementById("root");
    
    const pantallaCifradoDiv = document.getElementById("pantallaCifrado");
    
    const botonComenzar = document.getElementById("comenzar");
    
    botonComenzar.addEventListener("click", ()=> {
        rootDiv.style.display = "none";
        pantallaCifradoDiv.style.display = "inline-block";
        document.getElementById("pantallaResultado").style.display = "inline-block";
        document.getElementById("offsetYOtros").style.display = "inline-block";

    })
    
    const botonCipher = document.getElementById("cipher");
    
    botonCipher.addEventListener("click", () => {
        let texto = document.getElementById("textoACifrar").value;
        let offset = document.getElementById("offset").value;
        offset = Number(offset);
        if (Number.isNaN(offset) || !offset) {
        alert('Debes ingresar un número en el offset.');
        return;
        }
        document.getElementById("textoADescifrar").value = cipher.encode(offset, texto);
        // document.getElementById("regresarInicio").style.display = "inline-block";
    });
    
    const botonDecipher = document.getElementById("decipher");
    
    botonDecipher.addEventListener("click", () => {
        let texto = document.getElementById("textoADescifrar").value;
        let offset = document.getElementById("offset").value;
        offset = Number(offset);
        if (Number.isNaN(offset) || !offset) {
        alert('Debes ingresar un número en el offset.');
        }
        document.getElementById("textoACifrar").value = cipher.decode(offset, texto);
        // document.getElementById("regresarInicio").style.display = "inline-block";
    })

    // const botonInicio = document.getElementById("inicio");
    // botonInicio.addEventListener("click", () => {
    //     document.location = "index.html";
    // })


}