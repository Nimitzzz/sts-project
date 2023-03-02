const usinput =  document.querySelector('#huey');
const msg =  document.querySelector('.msg');
const msg2 =  document.querySelector('.msg2');
mainform.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(usinput.value ===""){
        msg.innerHTML="CHOOSE ANSWER";
        setTimeout(() => msg.remove(),3000);
        alert("CHOOSE ANSWER");
    }
}