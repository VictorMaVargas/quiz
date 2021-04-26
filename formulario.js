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
        campeon: "barcelona"
    }
    let fut = event.target.elements.futbol.value;
    if(fut != respuestas.futbol){
        alert("Te has equivocado")
    }
    let camp = event.target.elements.campeon.value;
    if(camp != respuestas.campeon){
        alert("Te has equivocado")
    }

    if (respuestas.tresCopas()){
        console.log("ok");
    }else{
        console.log("fail");
    }
})




/* document.querySelector('form[name="dnd"]').addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(event.target.elements.inglaterra.value)
});
 */
