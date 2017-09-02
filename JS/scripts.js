
    var nombre, apellido, nrdocumento, tpdocumento, telefono, email;
    var productos = ["Tj Visa", "Tj MasterCard", "Caja de Ahorro", "Caja Corriente"];

   
    do {
        var nombre=prompt("Ingresar nombre");
    } while (nombre == "");
    
    do {
        var apellido=prompt("Ingresar apellido");
    } while (nombre == "");

    do {
        var tpdocumento=prompt("Tipo Documento");
    } while (nombre == "");

    do {
    var nrdocumento=prompt("Nro Documento");
    } while (isNaN(nrdocumento));
    
    do {
    var telefono=prompt("Ingresar Telefono");
    } while (isNaN(telefono));

    do {
        var email=prompt("Ingresar email");
    } while (nombre == "");


    function mostrarclienteyproductos() {
        document.getElementById("lblNombre").innerHTML = nombre; 
        document.getElementById("lblApellido").innerHTML = apellido; 
        document.getElementById("lblTipDoc").innerHTML = tpdocumento; 
        document.getElementById("lblNroDocumento").innerHTML = nrdocumento; 
        document.getElementById("lblTelefono").innerHTML = telefono; 
        document.getElementById("lblEmail").innerHTML = email; 
        document.getElementById("tblProductos").innerHTML = productos; 
        
        }

