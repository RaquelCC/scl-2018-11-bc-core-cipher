window.onload = () => {

    
    
    const rootDiv = document.getElementById("root");
    
    const pantallaCifradoDiv = document.getElementById("pantallaCifrado");
    
    const botonComenzar = document.getElementById("comenzar");
    
    botonComenzar.addEventListener("click", ()=> {
        rootDiv.style.display = "none";
        pantallaCifradoDiv.style.display = "inline-block";
    })
    
    const botonCipher = document.getElementById("cipher");
    
    botonCipher.addEventListener("click", () => {
        let texto = document.getElementById("texto").value;
        let offset = document.getElementById("offset").value;
        document.getElementById("pantallaResultado").innerHTML = window.cipher.encode(offset, texto);
        document.getElementById("pantallaResultado").style.display = "inline-block";
        document.getElementById("regresarInicio").style.display = "inline-block";
    });
    
    const botonDecipher = document.getElementById("decipher");
    
    botonDecipher.addEventListener("click", () => {
        let texto = document.getElementById("texto").value;
        let offset = document.getElementById("offset").value;
        document.getElementById("pantallaResultado").innerHTML = window.cipher.decode(offset, texto);
        document.getElementById("pantallaResultado").style.display = "inline-block";
        document.getElementById("regresarInicio").style.display = "inline-block";
    })

    const botonInicio = document.getElementById("inicio");
    botonInicio.addEventListener("click", () => {
        document.location = "index.html";
    })


}