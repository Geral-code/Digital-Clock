const date = document.getElementById("date"),
time = document.getElementById("time")

function getCurrentDate() {
    const currentDate = new Date();
    options = {
        weekday: 'short', year:'numeric', month: 'long', day: 'numeric'
    }
    date.innerHTML = currentDate.toLocaleDateString('es', options)

}
function getCurrentTime() {
    const currentDate = new Date(),
    hours = currentDate.getHours(),
    minutes = formatTime(currentDate.getMinutes()),
    seconds = formatTime(currentDate.getSeconds())
    formatHours = (((hours + 11) % 12 +1))
    format = (hours < 12) || (hours == 24) ? 'AM': 'PM'
    time.innerHTML = `${formatHours}:${minutes}:${seconds} <small>${format} </small>` 
    

}



// para que se actualice la hora se ocupa setInterval y se usa 1000 para que corran los seg.
setInterval(getCurrentTime, 1000)

// ahora el formato de los digitos cuando es 01 se muestra 1, se debe ajustar de la sgte. forma:
function formatTime(value) {
    return value < 10 ? `0${value}`: value
}


getCurrentDate()