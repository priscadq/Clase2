
    var nombre, apellido, nrdocumento, tpdocumento, telefono, email;
    var productos = ["Tj Visa", "Tj MasterCard", "Caja de Ahorro", "Caja Corriente"];

   
/*
    function mostrarclienteyproductos() {


        do {
            var nombre=prompt("Ingresar nombre");
            ocument.getElementById("lblNombre").innerHTML = nombre;

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

        document.getElementById("lblNombre").innerHTML = nombre; 
        document.getElementById("lblApellido").innerHTML = apellido; 
        document.getElementById("lblTipDoc").innerHTML = tpdocumento; 
        document.getElementById("lblNroDocumento").innerHTML = nrdocumento; 
        document.getElementById("lblTelefono").innerHTML = telefono; 
        document.getElementById("lblEmail").innerHTML = email; 
        
        
    }
*/



var Persona = function (_nombre, _apellido) {
    this.Nombre = _nombre;
    this.Apellido = _apellido;
    
}

var Cliente = function (_nombre, _apellido, _nroDocumento, _tpDocumento, _telefono, _email) {
    this.NroDocumento = _nroDocumento;
    this.TpDocumento = _tpDocumento;
    this.Telefono = _telefono;
    this.Email = _email;

    this.personab = Persona;
    this.personab(_nombre, _apellido);
    
}


function mostrar() {
    
     document.getElementById("lblNombre").innerHTML = c.Nombre; 
     document.getElementById("lblApellido").innerHTML = c.Apellido; 
     document.getElementById("lblTipDoc").innerHTML = c.TpDocumento; 
     document.getElementById("lblNroDocumento").innerHTML = c.NroDocumento; 
     document.getElementById("lblTelefono").innerHTML = c.Telefono; 
     document.getElementById("lblEmail").innerHTML = c.Email; 
 }

 var c = new Cliente("Ale","Diaz","323232","dni","33333","gmail")


//Cliente.prototype.construtor = Persona ();

    /*
function getinfo() {
        do {
            var nombre=prompt("Ingresar nombre");
            ocument.getElementById("lblNombre").innerHTML = nombre;

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
    }




testfunction(idDiv){
    console.log("ID DIV:" )
} */

function showProductos(){
   // var prods = getProductosPorFila();
    var getProductosPorFila = function() {
        var columnas = "";
        for (var i = 0; i < productos.length; i++ ) {
            columnas = columnas + "<td>" + productos[i] + "</td>";
        }
        filas= "<tr>" + columnas + "</tr>";
        return filas;

    }

    document.getElementById("tblProductos").innerHTML = getProductosPorFila();

}

function getProductosPorFila(){
    var filas = "";
    for (var i = 0; i < productos.length; i++ ) {
        filas = filas + "<tr><td>" + productos[i] + "</td></tr>";
    }
    return filas;
}






