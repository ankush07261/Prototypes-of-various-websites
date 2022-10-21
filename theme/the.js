const darkbutton = document.getElementById('dark');
const lightbutton = document.getElementById('light');
const solarbutton = document.getElementById('solar');
const body = document.getElementById('body');

darkbutton.onclick = () => {
    body.classList.replace('light', 'dark');
}
lightbutton.onclick = () => {
    body.classList.replace('dark', 'light');
}
/*solarbutton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar');
        solarbutton.style.cssText = --bg - solar: var(--yellow);
        solarbutton.innerText = 'solarize'
    } else {
        solarbutton.style.cssText = --bg - solar: white;
        body.classList.add('solar');
    }
}*/