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
    boton = document.getElementById("insertar");
    tablaContenido = document.getElementById("cuerpoTabla");

    insertaFila("1","1","1");
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
        //borrar.innerHTML = " X ";
        borrar.onclick = function()
        {
            var fila = this.parentNode.parentNode;
            fila.parentNode.removeChild(fila);
        }

        td4.appendChild(borrar);

        var editar=document.createElement("span");
        editar.className = "boton modificar";
        //editar.innerHTML = " M ";
        editar.onclick = function()
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


    const cabeceras = document.querySelectorAll("th");

    for (let i = 0; i < cabeceras.length; i++)
    {
        cabeceras[i].mayorAMenor = true;
    }

    cabeceras[0].ondblclick = function()
    {
        var vector = [];
    
        var tBody = this.parentNode.parentNode.nextElementSibling;
    
        var filas = tBody.children;
    
        for (let i = 0; i < filas.length; i++)
        {
            vector.push(filas[i]);
        }
        if(this.mayorAMenor)
        {
            vector.sort(function(a,b){return a.children[0].innerHTML.localeCompare(b.children[0].innerHTML)});
        }
        else
        {
            vector.sort(function(a,b){return b.children[0].innerHTML.localeCompare(a.children[0].innerHTML)});
        }
        this.mayorAMenor = !this.mayorAMenor;
    
        for (let i = 0; i < vector.length; i++)
        {
            tBody.appendChild(vector[i]);
        }
    }
    
    cabeceras[1].ondblclick = function()
    {
        var vector = [];
    
        var tBody = this.parentNode.parentNode.nextElementSibling;
    
        var filas = tBody.children;
    
        for (let i = 0; i < filas.length; i++)
        {
            vector.push(filas[i]);
        }
        if(this.mayorAMenor)
        {
            vector.sort(function(a,b){return a.children[1].innerHTML.localeCompare(b.children[1].innerHTML)});
        }
        else
        {
            vector.sort(function(a,b){return b.children[1].innerHTML.localeCompare(a.children[1].innerHTML)});
        }
        this.mayorAMenor = !this.mayorAMenor;
    
        for (let i = 0; i < vector.length; i++)
        {
            tBody.appendChild(vector[i]);
        }
    }
    
    cabeceras[2].ondblclick = function()
    {
        var vector = [];
    
        var tBody = this.parentNode.parentNode.nextElementSibling;
    
        var filas = tBody.children;
    
        for (let i = 0; i < filas.length; i++)
        {
            vector.push(filas[i]);
        }
        if(this.mayorAMenor)
        {
            vector.sort(function(a,b){return parseInt(a.children[2].innerHTML)<parseInt(b.children[2].innerHTML)});
        }
        else
        {
            vector.sort(function(a,b){return parseInt(b.children[2].innerHTML)<parseInt(a.children[2].innerHTML)});
        }
        this.mayorAMenor = !this.mayorAMenor;
    
        for (let i = 0; i < vector.length; i++)
        {
            tBody.appendChild(vector[i]);
        }
    }

})
// Parece haber un problema con el sorting algorithm