let homediv = document.getElementById('homepage');
let guessdiv = document.getElementById('guesspage');
let greet = document.getElementById('wlctext');
document.getElementById('btn').addEventListener('click',()=>{
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    if(isNaN(start)||isNaN(end) || (start>=end)){
        alert("Enter valid range!!!");
        return;
    }
    let random_no = Math.floor(Math.random()*(end-start)+start);
    
    homediv.style.display="none";
    guessdiv.style.display="block";
    greet.textContent="Guess the number";
})
