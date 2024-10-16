
const getRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min + 1) + min);
}
const rains = document.querySelectorAll(".rain");

rains.forEach(rain=>{
    const rainDelay = getRandomNumber(200,1000);
    rain.style = `--i:${rainDelay}ms;`;
})