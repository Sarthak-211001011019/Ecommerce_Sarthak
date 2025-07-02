

    document.querySelector('.editBtn').disabled = false;
    document.querySelector('.saveBtn').disabled = true;
    document.querySelector('.nameInp').disabled = true;
    document.querySelector('.emailInp').disabled = true;
    document.querySelector('.phoneInp').disabled = true;

document.querySelector('.editBtn').addEventListener("click",()=>{
    document.querySelector('.editBtn').disabled = true;
    document.querySelector('.saveBtn').disabled = false;
    document.querySelector('.nameInp').disabled = false;
    document.querySelector('.emailInp').disabled = false;
    document.querySelector('.phoneInp').disabled = false;
});


    document.querySelector('.picEdtBtn').disabled = true;
    document.querySelector('.picEdtInp').addEventListener("change",()=>{
         document.querySelector('.picEdtBtn').disabled = false;
    });


    checkAllNEPValid();
  function nameUpdateValid(){
				const name = document.querySelector(".nameUpdate");
				const errDiv = document.querySelector(".nameEditValErr");
				if(name.value === "" || name.value === null){
		             errDiv.innerHTML = "<p>You must enter name</p>";
		             name.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             name.classList.add("errInput");

				}else{
		              
		              const nameRegex = /^[a-zA-Z\s]{3,}$/;
		              if(nameRegex.test(name.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 name.classList.remove("errInput");
		                 name.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 name.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                name.classList.add("errInput");
		              }
				}

				checkAllNEPValid();
	}

     function emailUpdateValid(){
				const email = document.querySelector(".emailUpdate");
				const errDiv = document.querySelector(".emailEditValErr");
				if(email.value === "" || email.value === null){
		             errDiv.innerHTML = "<p>You must enter email</p>";
		             email.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             email.classList.add("errInput");

				}else{
		              
		              const emailRegex = /^[a-zA-Z0-9$#!%*&_.\s-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		              if(emailRegex.test(email.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 email.classList.remove("errInput");
		                 email.classList.add("sucrssInput");
		                
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 email.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                email.classList.add("errInput");
		              }
				}

				checkAllNEPValid();
	}



    function phoneUpdateValid(){
				const phone = document.querySelector(".phoneUpdate");
				const errDiv = document.querySelector(".phoneEditValErr");
				if(phone.value === "" || phone.value === null){
		             errDiv.innerHTML = "<p>You must enter phone</p>";
		             phone.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             phone.classList.add("errInput");

				}else{
		              
		              const phoneRegex = /^[6-9]+[0-9]{9,9}$/;
		              if(phoneRegex.test(phone.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 phone.classList.remove("errInput");
		                 phone.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 phone.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                phone.classList.add("errInput");
		              }
				}

				checkAllNEPValid();
	}


    function checkAllNEPValid() {
  const nameValid = document.querySelector(".nameUpdate").classList.contains("sucrssInput");
  const emailValid = document.querySelector(".emailUpdate").classList.contains("sucrssInput");
  const phoneValid = document.querySelector(".phoneUpdate").classList.contains("sucrssInput");

  const allValid = nameValid && emailValid && phoneValid;

  document.querySelector(".nepUpdateSaveBtn").disabled = !allValid;
}


    checkAllPassUpdateValid()

    function currPasswordValid(){
		const password = document.querySelector(".currPassEditVal");
		const errDiv = document.querySelector(".currPassEditValErr");
				if(password.value === "" || password.value === null){
		             errDiv.innerHTML = "<p>You must enter password</p>";
		             password.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             password.classList.add("errInput");

				}else{
		              
		              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z0-9!@#$%&*?]{8,16}$/;
		              if(passwordRegex.test(password.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 password.classList.remove("errInput");
		                 password.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 password.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                password.classList.add("errInput");
		              }
				}
		checkAllPassUpdateValid()
	}

    function newPasswordValid(){
		const password = document.querySelector(".newPassEditVal");
		const errDiv = document.querySelector(".newPassEditValErr");
				if(password.value === "" || password.value === null){
		             errDiv.innerHTML = "<p>You must enter password</p>";
		             password.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             password.classList.add("errInput");

				}else{
		              
		              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z0-9!@#$%&*?]{8,16}$/;
		              if(passwordRegex.test(password.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 password.classList.remove("errInput");
		                 password.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 password.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                password.classList.add("errInput");
		              }
				}
		checkAllPassUpdateValid()
	}



    function conPasswordValid(){
		const password = document.querySelector(".conPassEditVal");
		const errDiv = document.querySelector(".conPassEditValErr");
				if(password.value === "" || password.value === null){
		             errDiv.innerHTML = "<p>You must enter password</p>";
		             password.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             password.classList.add("errInput");

				}else{
		              
		              const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?])[A-Za-z0-9!@#$%&*?]{8,16}$/;
		              if(passwordRegex.test(password.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 password.classList.remove("errInput");
		                 password.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 password.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                password.classList.add("errInput");
		              }
				}
		checkAllPassUpdateValid();
	}



function checkAllPassUpdateValid() {
  const currPasswordValid = document.querySelector(".currPassEditVal").classList.contains("sucrssInput");
  const newPasswordValid = document.querySelector(".newPassEditVal").classList.contains("sucrssInput");
  const conPasswordValid = document.querySelector(".conPassEditVal").classList.contains("sucrssInput");

  const allValid =  currPasswordValid && newPasswordValid && conPasswordValid ;

  document.querySelector(".passUpdateSubBtn").disabled = !allValid;
}


// function checkAllValid() {
//   const nameValid = document.querySelector(".nameInput").classList.contains("sucrssInput");
//   const emailValid = document.querySelector(".emailInput").classList.contains("sucrssInput");
//   const phoneValid = document.querySelector(".phoneInput").classList.contains("sucrssInput");
//   const genderChecked = document.querySelector('input[name="gender"]:checked') !== null;
//   const passwordValid = document.querySelector(".passwordInput").classList.contains("sucrssInput");
//   const locationValid = document.querySelector(".locationInput").classList.contains("sucrssInput");
// //   const imageChosen = document.querySelector(".imageInput").files.length > 0;

//   const allValid = nameValid && emailValid && phoneValid && genderChecked  && passwordValid && locationValid ;

//   document.querySelector(".formbtn").disabled = !allValid;
// }
