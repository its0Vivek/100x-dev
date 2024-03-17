let hours;
let min;
let sec;

function clock() {
    hours = new Date().getHours();
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    console.log(`${hours}:${min}:${sec}`)

}

setInterval(clock, 1000)
// output- HH:MM::SS (Eg. 13:45:23)




function clock2() {
    hours = new Date().getHours();
    let ampm
    if (hours >= 12) {
        ampm = 'pm'
    } else {
        ampm = 'am'
    }

    if (hours === 0) hours = 12;
    min = new Date().getMinutes();
    sec = new Date().getSeconds();
    console.log(`${hours}:${min}:${sec} ${ampm}`);
}

setInterval(clock2, 1000)
// output-- HH:MM::SS AM/PM (Eg 01:45:23 PM)