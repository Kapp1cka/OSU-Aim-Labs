const point = document.getElementById("point");
const start = document.getElementById("start");
const timeInfo = document.getElementById("timeInfo");

let pointInterval;


start.onclick = () => {
    startPointInterval();
    start.style.display = "none";
    timeInfo.style.display = "block";
}
const movePoint = (element, x,y) => {
    element.style.top = `${y}px`;
    element.style.left = `${x}px`;
    
}
const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);
    pointInterval = setInterval(()=>{
        setSize(point, getRandNumber(40,90))
        movePoint(point, getRandNumber(parseFloat(point.style.width),window.innerWidth - parseFloat(point.style.width)),getRandNumber(parseFloat(point.style.width),window.innerHeight - parseFloat(point.style.width)))
    }, 700)
    
    
}
const getRandNumber = (minimum, maximum) =>Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let timeStart = 0;

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
        if (timeStart == 0) {
            timeStart = performance.now();
        } else {
            let timeEnd = performance.now()
            let result = timeEnd - timeStart;
            timeStart = performance.now()
            timeInfo.innerText = `Time: ${Math.round(result)}ms`;
        }
        movePoint(element, getRandNumber(0,window.innerWidth),getRandNumber(0,window.innerHeight))
    }
}
const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}

console.log()