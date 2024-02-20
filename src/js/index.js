const btns = document.querySelectorAll('button');
const reset = document.getElementById('reset-btn')
let countX = document.getElementById('X')
let count0 = document.getElementById('0')
let x = 0;
let O = 0;
let random;

function checkWinner(){
    if (
        ((btns[0].textContent === 'X' && btns[1].textContent === 'X' && btns[2].textContent === 'X') ||
        (btns[3].textContent === 'X' && btns[4].textContent === 'X' && btns[5].textContent === 'X') ||
        (btns[6].textContent === 'X' && btns[7].textContent === 'X' && btns[8].textContent === 'X')) || 
        ((btns[0].textContent === 'X' && btns[4].textContent === 'X' && btns[8].textContent==='X') ||
        (btns[2].textContent === 'X' && btns[4].textContent === 'X' && btns[6].textContent==='X') ||
        (btns[0].textContent === 'X' && btns[3].textContent === 'X' && btns[6].textContent==='X') ||
        (btns[2].textContent === 'X' && btns[5].textContent === 'X' && btns[8].textContent==='X'))
    ){

        x++
        countX.textContent = `${x}`;
        btns.forEach(btn => {
               if(btn.textContent === 'X'){
                   btn.textContent = ' '
               }
        })
        
    }
    else if (
        ((btns[0].textContent === '0' && btns[1].textContent === '0' && btns[2].textContent === '0') ||
        (btns[3].textContent === '0' && btns[4].textContent === '0' && btns[5].textContent === '0') ||
        (btns[6].textContent === '0' && btns[7].textContent === '0' && btns[8].textContent === '0')) || 
        ((btns[0].textContent === '0' && btns[4].textContent === '0' && btns[8].textContent==='0') ||
        (btns[2].textContent === '0' && btns[4].textContent === '0' && btns[6].textContent==='0') ||
        (btns[0].textContent === '0' && btns[3].textContent === '0' && btns[6].textContent==='0') ||
        (btns[2].textContent === '0' && btns[5].textContent === '0' && btns[8].textContent==='0'))
    ){
        O++
        count0.textContent = `${O}`
        btns.forEach(btn => {
            if(btn.textContent === '0'){
                btn.textContent = ' '
            }
     })

        
    }

}



btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        random = Math.floor(Math.random()*2) +1;
        switch(random){
            case 1:
                btn.textContent = 'X'
                break;
            case 2:
                btn.textContent = '0'
                break
        }
        checkWinner();
        
    });
});


reset.addEventListener('click', () =>{
    btns.forEach(btn => {
        btn.textContent = ' '
        reset.textContent = 'Reset'
        countX.textContent = '0';
        count0.textContent = '0';
    })
})

