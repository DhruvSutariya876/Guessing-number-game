let homediv = document.getElementById('homepage');
let guessdiv = document.getElementById('guesspage');
let greet = document.getElementById('wlctext');
let no_guess=0;
let random_no;
document.getElementById('btn').addEventListener('click', () => {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    if (isNaN(start) || isNaN(end) || (start >= end)) {
        alert("Enter valid range!!!");
        return;
    }
    random_no = Math.floor(Math.random() * (end - start+1) + start);

    homediv.style.display = "none";
    guessdiv.style.display = "block";
    greet.textContent = "Guess the number";
})
document.getElementById('guessed').addEventListener('click', checkGuessNo);
document.getElementById('restart').addEventListener('click', () => {
    location.reload();
});
function checkGuessNo() {
    const user_guess = parseInt(document.getElementById('userguess').value);
    let result = document.getElementById('result');
    no_guess++;
    if (user_guess === random_no) {
        result.textContent = "🎉 Correct! You guessed the number! in " + no_guess + " attempts";
        document.getElementById('userguess').style.display="none";
    } else if (user_guess > random_no) {
        result.textContent = "📉 Too high! Try again.";
    } else {
        result.textContent = "📉 Too Low! Try again.";
    }


}
