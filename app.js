




let ressult = document.getElementById('ressult');
let openI = document.getElementById('openI');

  function delet(){
    let chat = window.prompt('Enter your result: ');
    let finalResult = Number(chat);
  
    if ( finalResult >= 90 &&  finalResult <= 100 ) {
        ressult.innerText='You Got golden';
      }else if( finalResult >= 80 && finalResult <= 89){
        ressult.innerText='You Got a Plush';
      }else if(finalResult >= 70 && finalResult <= 79){
        ressult.innerText='You Got A Grade';
      }else if(finalResult >= 60 && finalResult <= 69){
        ressult.innerText='You Got A -';
      }else if(finalResult >= 50 && finalResult <= 59){
        ressult.innerText='You Got B Grade';
      }else if(finalResult >= 40 && finalResult <= 49){
        ressult.innerText='You Got C Grade';
      }else if (finalResult >= 33 && finalResult <= 39){
        ressult.innerText='You Got D Grade';
      }else if(finalResult == "" || finalResult == null){
        ressult.innerText='You did not put Number';
      }else if (finalResult >= 1 && finalResult <= 32){
        ressult.innerText='You Got F Grade';
      }else{
        ressult.innerText='You should enter Number under 100';
      }

  }
 

