const btn_min = document.querySelector('.buttonMin')
const btn_sec = document.querySelector('.buttonSec')


var _timeMain = {
    limmit: 14, // minutes
    v_mode: 60 // seconds
}

function alterTime() {
    _Time = setInterval(() => {
        _timeMain.v_mode--
        if (_timeMain.v_mode == 0){
            if (_timeMain.limmit == 0){
                clearInterval(_Time)
            }else {
                _timeMain.limmit--
                _timeMain.v_mode = 60
            }
        }

        if (Number.parseInt(_timeMain.limmit) < 10){
            btn_min.innerHTML = '0' + Number.parseInt(_timeMain.limmit)
        }else {
            btn_min.innerHTML = Number.parseInt(_timeMain.limmit)
        }

        if (Number.parseInt(_timeMain.v_mode) < 10){
            btn_sec.innerHTML = '0' + _timeMain.v_mode
        }else {
            btn_sec.innerHTML = _timeMain.v_mode
        }
        setCookie()
    }, 1000);
}


function setCookie() {
    d = `${_timeMain.limmit}:${_timeMain.v_mode}`
    localStorage.setItem('time', d)
}


async function getTimeCookie(){
    let data = localStorage.getItem('time')
    return data
}


async function start() {
    let c = await getTimeCookie()
    if (!c) {
        localStorage.setItem('time', '14:60')
    }
    try{
        _timeMain.limmit = c.split(':')[0]
        _timeMain.v_mode = c.split(':')[1]
    }catch(e){
        localStorage.setItem('time', '14:60')
        let c = await getTimeCookie()
        _timeMain.limmit = c.split(':')[0]
        _timeMain.v_mode = c.split(':')[1]
    }

    if (_timeMain.limmit > 0 || _timeMain.v_mode > 0) {
        alterTime()
    }
}

start()

function z___restartAll() {
    localStorage.clear()
}



/* promp exit */
var prompt_data = 0
var time_start = 30

var promptINter = setInterval(() => {
    prompt_data++
    if (prompt_data >= time_start) {
        clearInterval(promptINter)
    }
}, 1000);


document.body.addEventListener('mousemove', exitF)
async function exitF(e) {
    let pro = localStorage.getItem('prompt')
    if (!pro){
        if (e.y <= 20 && prompt_data >= time_start) {
            promoStart()
            localStorage.setItem('prompt', true)
        }
    }
}


function promoStart(){
    document.body.style.overflow = 'hidden'
    let promo = document.querySelector('.promo')
    promo.style.display = 'flex'
}


function closePrompt() {
    let promo = document.querySelector('.promo')
    document.body.style.overflow = 'initial'
    promo.style.display = 'none'
}


/* speekMe */


function anual(){
    let anoT = new Date()
    let ano = document.querySelector('.ano')
    ano.innerText = anoT.getFullYear()
}

anual()