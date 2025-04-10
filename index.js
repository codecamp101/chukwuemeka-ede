/* this changes the text inside of an element
document.querySelector('#user > b').textContent = 'David';
document.querySelector('#user > i').textContent = '?'
*/
// this is an array of numbers
// [1,2,'cmputer',4]
// const c = 'A very long sentence , 500 words long. Really!!!!!'
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input');
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pan = document.querySelector('#panel')
//this unmasks the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
// this masks the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
});
//this submits the password with the form
fm.addEventListener('submit',(e) => {
    e.preventDefault(); //this will stop the page from reloading
    const pd= 'chedm3';
    if (pd == ipt.value){
        user.remove();
        fm.remove();
        output.textContent = 'signing you in...';
        const timeoutID = setTimeout(() => {
            output.remove();
            pop.showPopover()
            clearTimeout(timeoutID)
        }, 3000);
        
    } else {
        output.textContent = 'wrong password'
    }
})
//this shows/hides the #panel  
start.addEventListener('click', () => {
    pan.classList.toggle('on');
})