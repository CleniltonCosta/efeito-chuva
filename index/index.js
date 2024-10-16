
const getRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min + 1) + min);
}
const rains = document.querySelectorAll(".rain");

rains.forEach(rain=>{
    rain.style = `--rain-delay:${getRandomNumber(0, 1000)}ms`;
})