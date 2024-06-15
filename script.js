const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start-btn') 
const stopBtn = document.getElementById('stop-btn') 

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})
stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

function handledown(e){
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = "Key is Down"
}
function handleUp(e){
    logDiv.textContent = `Key ${e.key} pressed Up`;
    stateDiv.textContent = "Key is Up"
}