let count = 0;

let CountEl = document.getElementById("count-el")
function increment(){
    count++;
    CountEl.textContent = count

}

function save(){
    console.log(count)
}