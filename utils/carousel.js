const slideLeft = (project) => {
    let projects = Array.from(document.querySelectorAll('article'));
    let nextProject; 
    projects.forEach(project => {

            if(project.classList.contains('hidden') == false){
                // Récupération de l'index de l'article affiché
                let currentProjectIndex = projects.indexOf(project)
                // Masquage de la box actuelle
                project.classList.add('hidden')
                
                // La box suivante a un index supérieur à la box actuelle
                nextProject = currentProjectIndex +1;
            //    console.log(nextProject)
               return nextProject
            }
        })  
        // Si l'index de ma box suivante est inférieure à la longeur de mon tableau
        if(nextProject < projects.length){
            // Alors je démasque la prochaine box
            projects[nextProject].classList.remove('hidden');
        }
        else{
            // Sinon je reviens à la première box => Permet de créer un carousel
            // console.log(projects[0])
            projects[0].classList.remove('hidden');
            
        }

}
const slideRight = (project) => {
    let projects = Array.from(document.querySelectorAll('article'));
    let nextProject; 
    projects.forEach(project => {

            if(project.classList.contains('hidden') == false){
                // Récupération de l'index de l'article affiché
                let currentProjectIndex = projects.indexOf(project)
                // Masquage de la box actuelle
                project.classList.add('hidden')
                
                // La box suivante a un index supérieur à la box actuelle
                nextProject = currentProjectIndex -1;
            //    console.log(nextProject)
               return nextProject
            }
        })  
        // Si l'index de ma box suivante est inférieure à la longeur de mon tableau
        if(nextProject < projects.length && nextProject > -1){
            // Alors je démasque la prochaine box
            projects[nextProject].classList.remove('hidden');
        }
        else{
            // Sinon je reviens à la première box => Permet de créer un carousel
            let lastElement = projects.length-1;
            projects[lastElement].classList.remove('hidden');
            
        }

}

chevronLeft.addEventListener('click', (e) => { 
    e.preventDefault();
    slideLeft() 
})
chevronRight.addEventListener('click', (e) => {
    e.preventDefault();
    slideRight();
})
document.addEventListener('keydown', (e) => {
    e.preventDefault()
    if(e.code === 'ArrowLeft'){slideLeft()};
    if(e.code === 'ArrowRight'){slideRight()};
})


    

