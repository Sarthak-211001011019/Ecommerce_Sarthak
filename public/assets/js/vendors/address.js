//  let isDisplay = false;
//  document.querySelector(".showHideEditForm").style.display = "none";
// document.querySelector(".addEditBtn").addEventListener("click",()=>{
//    isDisplay = !isDisplay;

//    if(isDisplay){
//     document.querySelector(".showHideEditForm").style.display = "block";
// }else{
//     document.querySelector(".showHideEditForm").style.display = "none";
// }

// });
const allForms = document.querySelectorAll(".showHideEditForm");
allForms.forEach(form => form.style.display = "none");

document.querySelectorAll(".addEditBtn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const allForms = document.querySelectorAll(".showHideEditForm");

        // Optional: hide all forms first (if only one should be open)
        allForms.forEach(form => form.style.display = "none");

        // Toggle the matched form
        const form = allForms[index];
        if (form.style.display === "block") {
            form.style.display = "none";
        } else {
            form.style.display = "block";
        }
    });
});


 document.querySelector(".primayAdrsEditForm").style.display = "none";
let isEditDiv = true;
document.querySelector(".primaryaddEditBtn").addEventListener("click",()=>{
    isEditDiv = !isEditDiv;
    if(isEditDiv){
        document.querySelector(".primayAdrsEditForm").style.display = "none";
    }else{
        document.querySelector(".primayAdrsEditForm").style.display = "block";
    }
})