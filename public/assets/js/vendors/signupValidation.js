
checkAllValid();

function nameValid(){
				const name = document.querySelector(".nameInput");
				const errDiv = document.querySelector(".nameErrDiv");
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

				checkAllValid();
	}
// nameValid();







	function emailValid(){
				const email = document.querySelector(".emailInput");
				const errDiv = document.querySelector(".emailErrDiv");
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

				checkAllValid();
	}
// emailValid();






	function phoneValid(){
				const phone = document.querySelector(".phoneInput");
				const errDiv = document.querySelector(".phoneErrDiv");
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

				checkAllValid();
	}
	// phoneValid();






		
	function genderValid(){
			const genderRadios = document.querySelectorAll('input[name="gender"]');
		    let selectedGender = "";

		    genderRadios.forEach(function(radio) {
		      if (radio.checked) {
		        selectedGender = radio.value;
		      }
		    });

		    const errDiv = document.querySelector('.genderErrDiv');

		    if (!selectedGender) {
		      errDiv.innerHTML = "<p>Please select your gender.</p>";
		      errDiv.classList.add("errMsg");
		    } else {
		      errDiv.innerHTML = "";
		     errDiv.classList.remove("errMsg");
		     
		    }

		    checkAllValid();
	}

// genderValid();




		function passwordValid(){
		const password = document.querySelector(".passwordInput");
		const errDiv = document.querySelector(".passwordErrDiv");
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
		checkAllValid();
	}
	// passwordValid();


// let isPassShow = false;
// const showPass = document.querySelector(".showPass");

// showPass.addEventListener("click",function(){
//     isPassShow = !isPassShow;
//    if(isPassShow){
//     document.querySelector(".showPass").innerHTML = "<i class='fa-solid fa-eye-slash'></i>";
//     document.querySelector(".passwordInput").type = "text";
//    }else{
//    	document.querySelector(".showPass").innerHTML = "<i class='fa-solid fa-eye'></i>";
//    	document.querySelector(".passwordInput").type = "password";
//    }
// });






		function locationValid(){
		
		const location = document.querySelector(".locationInput");
				const errDiv = document.querySelector(".locationErrDiv");
				if(location.value === "" || location.value === null){
		             errDiv.innerHTML = "<p>You must enter Location</p>";
		             location.classList.remove("sucrssInput");
		             errDiv.classList.add("errMsg");
		             location.classList.add("errInput");

				}else{
		              
		              const locationRegex = /^[a-zA-Z0-9,\/ -]{3,}$/;
		              if(locationRegex.test(location.value)){
		                    errDiv.innerHTML = "";
		                    errDiv.classList.remove("errMsg");
		                 location.classList.remove("errInput");
		                 location.classList.add("sucrssInput");
		                 
		              }else{
		              	 errDiv.innerHTML = "<p>Invalid Data</p>";
		              	 location.classList.remove("sucrssInput");
		                errDiv.classList.add("errMsg");
		                location.classList.add("errInput");
		              }
				}

				checkAllValid();
	}
// locationValid();





// 	function imageValid(){
// 		const fileInput = document.querySelector(".imageInput");
// 		const errDiv = document.querySelector(".imageErrDiv");

// 		const file = fileInput.files[0];

// 			if(!file){
// 				   errDiv.innerHTML = "<p>You must choose an image</p>";
// 	             errDiv.classList.add("errMsg");
// 			}else{
// 				      errDiv.innerHTML = "";
// 	              errDiv.classList.remove("errMsg");
	              
// 			}        
// 		checkAllValid();
// 	}
// imageValid();





function checkAllValid() {
  const nameValid = document.querySelector(".nameInput").classList.contains("sucrssInput");
  const emailValid = document.querySelector(".emailInput").classList.contains("sucrssInput");
  const phoneValid = document.querySelector(".phoneInput").classList.contains("sucrssInput");
  const genderChecked = document.querySelector('input[name="gender"]:checked') !== null;
  const passwordValid = document.querySelector(".passwordInput").classList.contains("sucrssInput");
  const locationValid = document.querySelector(".locationInput").classList.contains("sucrssInput");
//   const imageChosen = document.querySelector(".imageInput").files.length > 0;

  const allValid = nameValid && emailValid && phoneValid && genderChecked  && passwordValid && locationValid ;

  document.querySelector(".formbtn").disabled = !allValid;
}