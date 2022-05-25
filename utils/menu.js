// Function for button animation
// const menuToCross = () => {
//     btnMenu.firstElementChild.classList.add('button-cross-up');
//     btnMenu.lastElementChild.classList.add('button-cross-down');
// }

navicon.addEventListener('click', () =>{
    navicon.classList.toggle('open');
    nav.classList.toggle('hidden');
} )

navOptions.forEach(navOption => {
    navOption.addEventListener('click', (e) => {
        e.preventDefault();
        nav.classList.add('hidden')
        if(nav.classList.contains('hidden') && navicon.classList.contains('open')){
            navicon.classList.toggle('open');
        }
    })
})



