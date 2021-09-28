const screens = document.querySelectorAll('.screen');
const choose_snack_btns = document.querySelectorAll('.choose-snack-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_snack = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_snack_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_snack = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createsnack, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createsnack() {
    const snack = document.createElement('div')
    snack.classList.add('snack')
    const { x, y } = getRandomLocation()
    snack.style.top = `${y}px`
    snack.style.left = `${x}px`
    snack.innerHTML = `<img src="${selected_snack.src}" alt="${selected_snack.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    snack.addEventListener('click', catchsnack)

    game_container.appendChild(snack)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchsnack() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addsnacks()
}

function addsnacks() {
    setTimeout(createsnack, 1000)
    setTimeout(createsnack, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}