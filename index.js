let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")
function increment() {
    count++;
    countEl.innerText = count
}

function save() {
   
    let saveText = count + " - "
    saveEl.innerText += saveText //One way to write it
    //saveEl.textContent += saveText //Another way to write it. This will make it nicer
    count = 0
    countEl.innerText = count
    
    console.log(count)
}
