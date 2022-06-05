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

// Fix conflict between key navigation and form (problem with keydown)
// document.addEventListener('keydown', (e) => {
//     e.preventDefault()
//     if(e.code === 'ArrowLeft'){slideLeft()};
//     if(e.code === 'ArrowRight'){slideRight()};
// })


// ---------------------------------------------------------------------------------



let clientX, clientY;

containerProject.addEventListener('touchstart', (e) => {
  // Cache the client X/Y coordinates
  clientX = e.touches[0].clientX;
  clientY = e.touches[0].clientY;

//   console.log(clientX);
//   console.log(clientY);
}, false);

containerProject.addEventListener('touchend', (e) => {
  let deltaX, deltaY;

  // Compute the change in X and Y coordinates.
  // The first touch point in the changedTouches
  // list is the touch point that was just removed from the surface.
  deltaX = e.changedTouches[0].clientX - clientX;
  deltaY = e.changedTouches[0].clientY - clientY;

  console.log(clientX);
  console.log(deltaX);
  if(clientX < deltaX && deltaX !== 0){
      slideRight();
  }
  else if(clientX > deltaX && deltaX !== 0){
      slideLeft();
  } 

//   console.log(deltaX);
//   console.log(deltaY);

  // Process the data ...
}, false);


