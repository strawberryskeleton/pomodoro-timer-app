
const pomodoro = document.getElementById('pomodoro-timer')
const timers = document.getElementById('timer-display')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const timerMessage = document.getElementById('timer-message')
const btn = document.querySelector('.btn')

const short = document.getElementById('short-timer')
const long = document.getElementById('long-timer')
const session = document.getElementById('pomodoro-session')
const shortBreak = document.getElementById('short-break')
const longBreak = document.getElementById('long-break')


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