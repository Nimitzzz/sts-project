const mainform = document.querySelector('#form');
const usinput =  document.querySelector('#username');
const psinput = document.querySelector('#password');
const msg =  document.querySelector('.msg');
const msg2 =  document.querySelector('.msg2');

mainform.addEventListener('submit', onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(usinput.value ==="" || psinput.value===""){
        msg.innerHTML="Please enter all fields";
        setTimeout(() => msg.remove(),3000);
    }else{
        msg2.classList.add('.msg2');
        msg2.innerHTML="Success!"
        console.log("Success!");
        window.location.href = "projextsts.html";
    }
}