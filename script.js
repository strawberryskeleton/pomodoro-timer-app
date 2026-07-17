
const pomodoro = document.getElementById('pomodoro-timer')
const timers = document.querySelectorAll('.timer-display')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const timerMessage = document.getElementById('timer-message')
const btn = document.querySelector('.btn')

const short = document.getElementById('short-timer')
const long = document.getElementById('long-timer')
const session = document.getElementById('pomodoro-session')
const shortBreak = document.getElementById('short-break')
const longBreak = document.getElementById('long-break')

// console.log("running")

let currentTimer = null
let myInterval = null

function showDefaultTimer () {
    pomodoro.style.display = "block"
    short.style.display = "none"
    long.style.display = "none"
}

showDefaultTimer()

function hideAll () {
    timers.forEach((timer) => {
        timer.style.display = "none"
    })
}

session.addEventListener('click', () => {
    hideAll()

    pomodoro.style.display = "block"

    session.classList.add('active')
    shortBreak.classList.remove('active')
    longBreak.classList.remove('active')
})

shortBreak.addEventListener('click', () => {
    hideAll()

    short.style.display = "block"

    shortBreak.classList.add('active')
    session.classList.remove('active')
    longBreak.classList.remove('active')
})

longBreak.addEventListener('click', () => {
    hideAll()

    long.style.display = "block"

    longBreak.classList.add('active')
    shortBreak.classList.remove('active')
    session.classList.remove('active')
})