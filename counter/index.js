let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function IncrementByClick() {
    count = count + 1
    countEl.textContent = count
}

function SaveByClick() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
}