document.querySelector('form[name="dnd"]').addEventListener("submit", (event) => {
    event.preventDefault()

    console.log(event.target.elements.inglaterra.value)
});

