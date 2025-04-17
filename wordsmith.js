const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
const checkBtn = document.querySelector('#checkBtn');

let score = 0;
checkBtn.addEventListener('click', () => {
    document.querySelector('#cup >i').textContent = score;
    score += 5;
    document.querySelector('#action').style.backgroundImage = `url('confetti.gif')`;
    const tid = setTimeout(() => {
        document.querySelector('#action').style.backgroundImage = 'none';
        clearTimeout(tid);
    }, 2000);
});
hintBtn.addEventListener('click', ()=> {
    // txt.textContent = 'I CHANGED YOU!!!!';
    writeTxt();
});
function writeTxt () {
    const text = 'to walk unsteadily, as like a baby';
    txt.textContent = '';
    let count = 0;
   const id= setInterval(() => {
        if (count === text.length - 1) clearInterval(id);
        txt.textContent += text[count];
        count++; //count++ keeps adding 1 to the value of count
    }, 100);
}
