
let hideButton = document.querySelector(".hide-btn")
let hideDiv = document.querySelector(".hide-div")


function revealContent() {
   
    if (hideDiv.classList.contains("hide-div")) {
        hideDiv.classList.remove("hide-div");
        hideButton.innerHTML = 'Show less';
    } else {
        hideDiv.classList.add('hide-div');
        hideButton.innerHTML = 'Show more';
    }
}

