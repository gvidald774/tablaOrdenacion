String.prototype.esDNI=function()
{
    var respuesta = false;
    var partes = /^(\d{8})[A-Z]$/.exec(this.toUpperCase());
    if (partes && partes.length==3)
    {
        respuesta = "TRWAGMYFPDXBNMZSQVHLCKE"[partes[1]%23]==partes[2];
    }
    return respuesta;
};