const refs = {
    form: document.querySelector('.login-form'),
};
// console.log(refs.form)
refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);
 if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "" ) {
     alert('Введіть данні')
    } else {
     const formData = new FormData(event.currentTarget);
      formData.forEach((value, name) => {
        console.log(name);
        console.log(value);
        
    });
    event.currentTarget.elements.email.value = "";
    event.currentTarget.elements.password.value = "";
   console.log(formData);
  }
    
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((value, name) => {
    //     console.log(name);
    //     console.log(value);
    // });
    // event.currentTarget.elements.email.value = "";
    // event.currentTarget.elements.password.value = "";

    // console.log(formData);
    
}
