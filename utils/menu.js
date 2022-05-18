

console.log(btnMenu.children);


btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    if(!btnMenu.firstElementChild.classList.contains('button-cross-up') && !btnMenu.lastElementChild.classList.contains('button-cross-down')){
        menuToCross()
    }
    else{
        btnMenu.firstElementChild.classList.remove('button-cross-up');
        btnMenu.lastElementChild.classList.remove('button-cross-down');
    }  
})


const menuToCross = () => {
    btnMenu.firstElementChild.classList.add('button-cross-up');
    btnMenu.lastElementChild.classList.add('button-cross-down');
}

navicon.addEventListener('click', () =>{
    navicon.classList.toggle('open');
} )