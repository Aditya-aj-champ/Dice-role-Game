const  h1 = document.querySelector('h1');
ludogame = ()=>{
    const player1 = Math.floor(Math.random()*6) + 1;
    const playerdice = `Dice img/dice-${player1}.png`;
        
        document.getElementById('cheek').setAttribute('src',playerdice);
    
        const player2 = Math.floor(Math.random()*6) + 1;
        const playerdice2 = `Dice img/dice-${player2}.png`;
            
            document.getElementById('cheek2').setAttribute('src',playerdice2);   
    if (player1>player2) {
        h1.innerHTML= "You won :) ";
    } 
    else if(player1<player2){
        h1.innerHTML="System Won!"

    }  
    else{
       h1.innerHTML= " Game Draw" 
    }     
}