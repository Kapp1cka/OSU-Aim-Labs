const point = document.getElementById("point");
const start = document.getElementById("start");

let pointInterval;
start.onclick = () => {
    startPointInterval();
    start.style.display = "none";
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
        movePoint(point, getRandNumber(100,600),getRandNumber(100,600))
    }, 700)
    
    
}
const getRandNumber = (minimum, maximum) =>Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
    }
}
const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}