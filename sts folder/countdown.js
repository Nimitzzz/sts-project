const startingminiutes =60;
let time= startingminiutes*60;

const countdownwl= document.getElementById('countdown');
setInterval(updatecountdown,1000)
function updatecountdown(){
    const miniutes= Math.floor(time / 60);
    let seconds =time%60;
    seconds= seconds<10?'0'+seconds:seconds;

    countdownwl.innerHTML=`${miniutes}:${seconds}`;
    time--;
}
function nextBtn() {
    if (!document.getElementById('Radio1').checked && !document.getElementById('Radio2').checked) {
      document.getElementById('Radio1').required = true;
      document.getElementById('Radio2').required = true;
      document.getElementById('Radio3').required = true;
      document.getElementById('Radio4').required = true;
      document.getElementById('nextbutton').type = "submit";
    }
    else{
        alert("ANSWER RECIEVED");
    }
  }