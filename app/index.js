
let counter = 0; 

const increment = () =>{
    
    if(counter < 20){
        counter++;
        const counterElement = document.getElementsByClassName("counter")[0];
        counterElement.textContent = counter; 
        const infoCssButton = document.getElementsByClassName("infoButton")[0];
        infoCssButton.classList.add('hide'); 

    }else if(counter >20){
       const infoCssButton = document.getElementsByClassName("infoButton")[0];
       infoCssButton.classList.remove('hide'); 
    }
}

const decrement = () =>{
    
    if(counter > 0){
        counter--;
        const counterElement = document.getElementsByClassName("counter")[0];
        counterElement.textContent = counter; 
    }
}

const restart = () =>{
    counter = 0; 
    const counterElement = document.getElementsByClassName("counter")[0];
    counterElement.textContent = counter; 
}

