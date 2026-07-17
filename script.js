
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

    currentTimer = pomodoro
})

shortBreak.addEventListener('click', () => {
    hideAll()

    short.style.display = "block"

    shortBreak.classList.add('active')
    session.classList.remove('active')
    longBreak.classList.remove('active')

    currentTimer = short
})

longBreak.addEventListener('click', () => {
    hideAll()

    long.style.display = "block"

    longBreak.classList.add('active')
    shortBreak.classList.remove('active')
    session.classList.remove('active')

    currentTimer = long
})


startBtn.addEventListener('click', () => {
    if(currentTimer) {
        startTimer(currentTimer)
        timerMessage.style.display = "none"
    } else {
        timerMessage.style.display = "block"
    }
})

function startTimer (timerDisplay) {
    if (myInterval) {
        clearInterval(myInterval)
    }

    timerDuration = timerDisplay.getAttribute('data-duration').split(":")[0]

    let durationInMilliseconds = timerDuration * 60 * 1000
    let endTimestamp = Date.now() + durationInMilliseconds

    myInterval = setInterval(() => {
        const timeRemaining = new Date(endTimestamp - Date.now())

        if(timeRemaining < 0) {
            clearInterval(myInterval)
            timerDisplay.textContent = "00:00"

            const alarm = new Audio("")
            alarm.play()
        } else {
            const minutes = Math.floor(timeRemaining / 60000)
            const seconds = ((timeRemaining % 60000) / 1000).toFixed(0)
            const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`

            timerDisplay.textContent = formattedTime
        }

    }, 1000);
}


stopBtn.addEventListener('click', () => {
    if (currentTimer) {
        clearInterval(myInterval)
    }
})