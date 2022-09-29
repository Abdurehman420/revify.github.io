const opens  = document.querySelector('.open');

const closes = document.querySelector('.close');
const nav = document.querySelector('.mobNavi');


  opens.addEventListener('click', ()=>{


    nav.classList.add('open');
    
    
    })

 


closes.addEventListener('click', ()=>{


nav.classList.remove('open');

})