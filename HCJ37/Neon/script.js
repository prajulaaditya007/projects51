const container = document.getElementById('container');
const colors = ['#0CECDD','#FFF338','#C400FF','#B5FFD9','#88FFF7','#F0D9E7','#480032','#FFFFC7','#26001B','#28DF99','#F17808','#851DE0','#FF0000',];

const SQUARES = 2508;

for (let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random()* colors.length)]
}