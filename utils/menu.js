navicon.addEventListener('click', () =>{
    navicon.classList.toggle('open');
    nav.classList.toggle('hidden');
} )

navOptions.forEach(navOption => {
    navOption.addEventListener('click', (e) => {
        nav.classList.add('hidden')
        if(nav.classList.contains('hidden') && navicon.classList.contains('open')){
            navicon.classList.toggle('open');
        }
    })
})



