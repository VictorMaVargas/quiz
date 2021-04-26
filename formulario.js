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
    }

    
})




/* document.querySelector('form[name="dnd"]').addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(event.target.elements.inglaterra.value)
});
 */
