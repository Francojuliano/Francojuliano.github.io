








function listarNombre () {
    
    var valor = document.getElementById("nombres").value;
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(valor);
    newDiv.appendChild(newContent); 
    
  
    
    var currentDiv = document.getElementById("col4");
    document.getElementById("listaNombres").insertBefore(newDiv, currentDiv);
}

function listarPlata () {
    
    var dinero = document.getElementById("dinero").value;
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("$"+dinero);
    newDiv.appendChild(newContent); 
    newDiv.setAttribute("id","subtotal")
  
   
    var currentDiv = document.getElementById("col4");
    document.getElementById("listaDinero").insertBefore(newDiv, currentDiv);
}

const subtotal = [];

function todo(){
    if (subtotal.length >= 7){
        alert("No puedes agregar mas personas!");
        return;
    
    }
    listarPlata();
    listarNombre();
    
    subtotal.push(Number(document.getElementById("dinero").value));
    let total = 0;

    for (let i = 0; i < subtotal.length; i++) {
    total += subtotal[i];
    }    
    document.getElementById("totalDinero").innerText = "$" + total.toFixed(2);
    n=subtotal.length;
    document.getElementById("individualDinero").innerText = "$" + (total.toFixed(2)/n).toFixed(2);

    



   
   


}
document.getElementById("boton").onclick = todo;



