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
const pan = document.querySelector('#panel');
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
//this formats a unix number into a human-readable date
const dob = new Date('06/28/2014'); //date format in JavaScript mm-dd-yyyy
pan.querySelector('#dob').textContent = Intl.DateTimeFormat('en-us', {dateStyle: 'full'}).format(dob);

//functions
// A function is a group of statements that does not run unless when called
function calculator () {
    console.log(2 + 4);
    console.log(10 - 5);
    console.log(10 / 2);
    console.log(3 * 3);
    console.log(5 % 3); //modulus (short form is mod): the r
}   
calculator()
function callConfetti () {
    /*
    const t = "ME";
    const u = "4";
    console.log(t - u);//concastenation: join strings together
    */
   const d = new Date("06/28/2014").getDate();
   const m = new Date("06/28/2014").getMonth();
   const today = Date.now();
   console.log(m);
   console.log(new Date(today).getDate())
   if (new Date(today).getDate() === d && new Date(today).getMonth() === m) {
    pan.classList.add('bgi');
   }
}
callConfetti();