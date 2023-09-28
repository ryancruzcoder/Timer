const spanTime = document.getElementById("time")
let time = new Date(0)
time.setHours( time.getHours() + 3)
let iniciado = false
let pausado = false
let zerado = false
const abaCronometro = document.getElementsByClassName("aba cronometro")[0]
const abaTimer = document.getElementsByClassName("aba timer")[0]
const btnZerar = document.getElementsByClassName("bts-acoes zerar")[0]
const divInfoTimer = document.getElementById("info-timer")
let intervalID

function zeroRight(n){
    return n >= 10 ? n : `0${n}`
}


function escreverHora(){
    let hou = zeroRight(time.getHours())
    let min = zeroRight(time.getMinutes())
    let sec = zeroRight(time.getSeconds())
    spanTime.innerText = `${hou}:${min}:${sec}`
}

function iniciar(){
    if (divInfoTimer.style.display === "block"){
        let horasInformada = document.getElementById("info-timer-horas")
        let minutosInformada = document.getElementById("info-timer-minutos")
        let segundosInformada = document.getElementById("info-timer-segundos")
        time.setHours(parseInt(horasInformada.value))
        time.setMinutes(parseInt(minutosInformada.value))
        time.setSeconds(parseInt(segundosInformada.value))
        [pausado, iniciado, zerado] = [false, true, false]
        intervalID = setInterval(function(){
                escreverHora()
                time.setSeconds(time.getSeconds() - 1)
            }, 1000)
        } else if (!iniciado){
            [pausado, iniciado, zerado] = [false, true, false]
            intervalID = setInterval(function(){
                escreverHora()
                time.setSeconds(time.getSeconds() + 1)
            }, 1000)
    }
    
}

function pausar(){
    [pausado, iniciado, zerado] = [true, false, false]
    clearInterval(intervalID)
}

function zerar(){
    [pausado, iniciado, zerado] = [false, false, true]
    clearInterval(intervalID)
    time = new Date(0)
    time.setHours( time.getHours() + 3)
    escreverHora()
}

function timer(){
    clearInterval(intervalID)
    time = new Date(0)
    time.setHours( time.getHours() + 3)
    escreverHora()
    abaTimer.style.borderBottom = "2px solid white"
    abaCronometro.style.borderBottom = "2px solid #000767"
    btnZerar.style.display = "none"
    divInfoTimer.style.display = "block"
}

function cronometro(){
    clearInterval(intervalID)
    time = new Date(0)
    time.setHours( time.getHours() + 3)
    escreverHora()
    abaCronometro.style.borderBottom = "2px solid white"
    abaTimer.style.borderBottom = "2px solid #000767"
    btnZerar.style.display = "block"
    divInfoTimer.style.display = "none"
}