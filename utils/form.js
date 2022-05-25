// Add security verification for inputs

const emailVerification = () => {

    if(email.value == null || email.value == "" || email.value.match(regexEmail) == false){
  
      console.log("Veuillez entrer un email valide");
    
      email.closest(".formData").setAttribute("data-error-visible", true);
      email.closest(".formData").setAttribute("data-error", "Veuillez entrer un email valide (ex : johndoe@gmail.com).")
      email.value="";
      
      return false;
    }
     else{
      email.closest(".formData").setAttribute("data-error-visible", false);
      email.value === ""
      return true;
     }
  }


  const textAreaVerification = () => {
      if(textArea.value == null || textArea.value == "" || textArea.textContent.length <= 0){
        console.log('Problem with your message')
        textArea.closest(".formData").setAttribute("data-error-visible", true);
        textArea.closest(".formData").setAttribute("data-error", "Veuillez entrer un email valide (ex : johndoe@gmail.com).")
        textArea.value="";

        return false
      }
      else{
        textArea.closest(".formData").setAttribute("data-error-visible", false);
        textArea.value ===""
        return true;
      }
  }


  const formVerification = () => {
    if(emailVerification() === false || textAreaVerification() === false){
        form.addEventListener('submit', (e) => {
            e.preventDefault();
         
          })
    } else{
        console.log('Good job!')
    }
  }
