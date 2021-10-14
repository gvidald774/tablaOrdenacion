function validaDNI(dni)
{
    let numero = dni.substring(0,8);
    let letra = dni.substring(8,9);

    let patron = /^\d{8}[A-Z]$/;

    let resultado = false;

    if(patron.exec(dni))
    {
        if(letra == "TRWAGMYFPDXBNJZSQVHLCKE".substring(numero%23,numero%23+1))
        {
            resultado = true;
        }
    }

    return resultado;
}

function validaFormulario()
{
    var resultado = true;
    let dni = document.forms["formulario"]["dni"];
    if (dni.value == "" || !validaDNI(dni.value))
    {
        dni.style.borderColor = "red";
        resultado = false;
    }
    else
    {
        dni.style.borderColor = "green";
    }

    let nombre = document.forms["formulario"]["nombre"];
    if (nombre.value == "")
    {
        nombre.style.borderColor = "red";
        resultado = false;
    }
    else
    {
        nombre.style.borderColor = "green";
    }

    let edad = document.forms["formulario"]["edad"];
    if (edad.value == "" || edad.value < 0)
    {
        edad.style.borderColor = "red";
        resultado = false;
    }
    else
    {
        edad.style.borderColor = "green";
    }

    return resultado;
}

window.addEventListener("load",function()
{
    debugger;
    boton = document.getElementById("insertar");
    tablaContenido = document.getElementById("cuerpoTabla");

    boton.onclick = function(event)
    {
        event.preventDefault();

        if(validaFormulario())
        {
            dni = document.forms["formulario"]["dni"];
            nombre = document.forms["formulario"]["nombre"];
            edad = document.forms["formulario"]["edad"];

            // Vamos a ver si lo limpiamos

            insertaFila(dni.value, nombre.value, edad.value);

            /*let botonBorrado = document.createElement("input");
            botonBorrado.value = "X";
            botonBorrado.type = "Button";
            botonBorrado.className = "botonBorrado";

            let filaTabla = document.createElement("tr");
            
            let celdaTabla1 = document.createElement("td");
            celdaTabla1.innerHTML = dni.value;
            let celdaTabla2 = document.createElement("td");
            celdaTabla2.innerHTML = nombre.value;
            let celdaTabla3 = document.createElement("td");
            celdaTabla3.innerHTML = edad.value;
            let celdaTabla4 = document.createElement("td");
        

            celdaTabla4.appendChild(botonBorrado);

            filaTabla.appendChild(celdaTabla1);
            filaTabla.appendChild(celdaTabla2);
            filaTabla.appendChild(celdaTabla3);
            filaTabla.appendChild(celdaTabla4);

            tablaContenido.appendChild(filaTabla);
            dni.value = "";
            nombre.value = "";
            edad.value = "";

            dni.focus();

            var botonesDeBorrado = document.querySelectorAll(".botonBorrado");

            for (let i = 0; i < botonesDeBorrado.length; i++)
            {
                botonesDeBorrado[i].addEventListener("click",function()
                {
                    let fila = this.parentNode.parentNode;
                    fila.parentNode.removeChild(fila);
                })
            }

            let botonModif = document.createElement("input");
            botonModif.value = "V";
            botonModif.type = "button";
            botonModif.className = "botonModif";

            celdaTabla4.appendChild(botonModif);*/
        }

        dni.value = "";
        nombre.value = "";
        edad.value = "";

        dni.focus();
    }

    function insertaFila(dni,nombre,edad) // Y esto luego lo pones en vez del churro que tienes arriba. Y hay que poner el respuestas.every en la validación (?)
    {
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");

        td1.innerHTML = dni;
        td2.innerHTML = nombre;
        td3.innerHTML = edad;

        // Necesitamos un botón input type imagen, para pincharlo y tal.
        var borrar=document.createElement("span");
        borrar.className = "boton borrar";
        borrar.innerHTML = "X";
        borrar.onclick = function()
        {
            var fila = this.parentNode.parentNode;
            fila.parentNode.removeChild(fila);
        }

        td4.appendChild(borrar);

        var editar=document.createElement("span");
        editar.className = "boton editar";
        borrar.innerHTML = "Y";
        borrar.onclick = function()
        {
            var fila = this.parentNode.parentNode;
            alert("NOO SE PUEDE EDITAAAR");
        }

        td4.appendChild(editar);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tablaContenido.appendChild(tr);
    }

})