const toggles = document.querySelectorAll('.toggle')
const soda = document.querySelector('#soda')
const cola = document.querySelector('#cola')
const water = document.querySelector('#water')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(soda.checked && cola.checked && water.checked) {
        if(soda === theClickedOne) {
            water.checked = false
        }

        if(cola === theClickedOne) {
            soda.checked = false
        }

        if(water === theClickedOne) {
            cola.checked = false
        }
    }
}