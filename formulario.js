document.getElementById("dnd").addEventListener("submit",function(event){
    event.preventDefault();
    const respuestas = {
        tresCopas: function(){
            let arg= event.target.elements.arg.checked;
            let uru= event.target.elements.uru.checked;
            let fra= event.target.elements.fra.checked;
            let alm= event.target.elements.alm.checked;
            return (arg && uru && fra && !alm);
        },
        pichichi: function(){
            let gary= event.target.elements.gary.checked;
            let paul= event.target.elements.paul.checked;
            let best= event.target.elements.best.checked;
            let harry= event.target.elements.harry.checked;
            return (gary && harry && !paul && !best);
        },
        futbol: "inglaterra",
        campeon: "barcelona",
        temporada: "t56"
    }

    function returnRadioData(nodoField){
        //console.log(nodoField.length);
        let encontrado = false;
        let i = 0;
        while(i<nodoField.length && encontrado != true){
            if(nodoField[i].checked && nodoField[i].type=="radio"){
                console.log(nodoField[i]);
                encontrado = true;
            }
            console.log(i);
            i++;
        }
    }
    let todo = event.target.elements;
    let respUser = {

    }

    respUser.respuesta1="valor";


    for(let i=0;i<todo.length; i++){
        if(todo[i].type == "fieldset" ){
            let fldSetE= todo[i].elements 
            returnRadioData(fldSetE);
        }
        
    }
    /* 

    let fut = event.target.elements.futbol.value;
    let mensaje = "";

    if(fut != respuestas.futbol){
        mensaje += "Fallaste la primera pregunta \n"
    }
    if (!respuestas.tresCopas()){
        mensaje += "Fallaste la segunda pregunta \n";
    }
    let camp = event.target.elements.campeon.value;
    if(camp != respuestas.campeon){
        mensaje += "Fallaste la tercera pregunta \n";}
    if (!respuestas.pichichi()){
            mensaje += "Fallaste la cuarta pregunta \n";}
    let temp = event.target.elements.temp.value;
    if (temp != respuestas.temporada){
        mensaje += "Fallaste la quinta pregunta\n";
    }

    if (mensaje == ""){
        alert("Eres un campeón!!")
    }
    else {
     alert(mensaje);
    } */

    
})



/* document.getElementById("dnd").addEventListener("submit",function(event){
    event.preventDefault();
    const respuestas = {
        tresCopas: function(){
            let arg= event.target.elements.arg.checked;
            let uru= event.target.elements.uru.checked;
            let fra= event.target.elements.fra.checked;
            let alm= event.target.elements.alm.checked;
            return (arg && uru && fra && !alm);
        },
        pichichi: function(){
            let gary= event.target.elements.gary.checked;
            let paul= event.target.elements.paul.checked;
            let best= event.target.elements.best.checked;
            let harry= event.target.elements.harry.checked;
            return (gary && harry && !paul && !best);
        },
        futbol: "inglaterra",
        campeon: "barcelona",
        temporada: "t56"
    }
    let fut = event.target.elements.futbol.value;
    let camp = event.target.elements.campeon.value;
    let temp = event.target.elements.temp.value;
    let mensaje = "";
    if(fut != respuestas.futbol){
        let elong = event.target.elements.futbol;
        let padre = elong[elong.length - (elong.length - 1)].parentNode;
        console.log(padre);
        padre.setAttribute("style", "background-color:red;");
    }else{
        let elong = event.target.elements.futbol;
        let padre = elong[elong.length - (elong.length - 1)].parentNode;
        console.log(padre);
        padre.setAttribute("style", "background-color:green;");
    }
    if (!respuestas.tresCopas()){
        let elong = event.target.elements.arg.parentNode;
        elong.setAttribute("style", "background-color:red;");
    }else{
        let elong = event.target.elements.arg.parentNode;
        elong.setAttribute("style", "background-color:green;");
    }
/*
    if(camp != respuestas.campeon){
        mensaje += "Fallaste la tercera pregunta \n";}
    if (!respuestas.pichichi()){
            mensaje += "Fallaste la cuarta pregunta \n";}
    if (temp != respuestas.temporada){
        mensaje += "Fallaste la quinta pregunta\n";
    }
    if (mensaje == ""){
        alert("Eres un campeón!!")
    }
    else {
        alert(mensaje);
    } 
})

/* document.querySelector('form[name="dnd"]').addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(event.target.elements.inglaterra.value)
});
 */


/* document.querySelector('form[name="dnd"]').addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(event.target.elements.inglaterra.value)
});
 */