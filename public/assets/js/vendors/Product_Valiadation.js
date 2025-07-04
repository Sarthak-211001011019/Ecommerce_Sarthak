document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addProductForm");

    form.addEventListener("submit", function (e) {
        let isValid = true;

        // Clear all previous errors
        document.querySelectorAll('.nameErrDiv, .descErrDiv, .priceErrDiv, .qtyErrDiv, .ImgErrDiv').forEach(div => {
            div.innerText = '';
            div.classList.remove('error-text');
        });

        form.querySelectorAll('input, textarea, select').forEach(el => {
            el.classList.remove('input-error');
        });

        const nameInput = form.querySelector('input[name="P_Name"]');
        const descInput = form.querySelector('textarea[name="P_Desc"]');
        const priceInput = form.querySelector('input[name="P_Price"]');
        const qtyInput = form.querySelector('input[name="P_Qty"]');
        const imageInput = form.querySelector('input[name="P_Image"]');

        // === Product Name ===
        if (nameInput.value.trim() === "") {
            const err = document.querySelector('.nameErrDiv');
            err.innerText = "Product name is required.";
            err.classList.add('error-text');
            nameInput.classList.add('input-error');
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            const err = document.querySelector('.nameErrDiv');
            err.innerText = "Product name must be at least 3 characters.";
            err.classList.add('error-text');
            nameInput.classList.add('input-error');
            isValid = false;
        }

        // === Product Description ===
        if (descInput.value.trim() === "") {
            const err = document.querySelector('.descErrDiv');
            err.innerText = "Product description is required.";
            err.classList.add('error-text');
            descInput.classList.add('input-error');
            isValid = false;
        } else if (descInput.value.trim().length < 10) {
            const err = document.querySelector('.descErrDiv');
            err.innerText = "Product description must be at least 10 characters.";
            err.classList.add('error-text');
            descInput.classList.add('input-error');
            isValid = false;
        }

        // === Product Price ===
        const priceValue = parseFloat(priceInput.value);
        if (priceInput.value.trim() === "") {
            const err = document.querySelector('.priceErrDiv');
            err.innerText = "Enter a valid product price.";
            err.classList.add('error-text');
            priceInput.classList.add('input-error');
            isValid = false;
        } else if (isNaN(priceValue) || priceValue <= 100) {
            const err = document.querySelector('.priceErrDiv');
            err.innerText = "Product price must be greater than 100.";
            err.classList.add('error-text');
            priceInput.classList.add('input-error');
            isValid = false;
        }

        // === Quantity ===
        const qty = parseInt(qtyInput.value);
        if (isNaN(qty) || qty < 10) {
            const err = document.querySelector('.qtyErrDiv');
            err.innerText = "Minimum quantity should be 10.";
            err.classList.add('error-text');
            qtyInput.classList.add('input-error');
            isValid = false;
        }

        // === Image ===
        const file = imageInput.files[0];
        if (!file) {
            const err = document.querySelector('.ImgErrDiv');
            err.innerText = "Please upload a product image.";
            err.classList.add('error-text');
            imageInput.classList.add('input-error');
            isValid = false;
        } else {
            const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
            if (!validTypes.includes(file.type)) {
                const err = document.querySelector('.ImgErrDiv');
                err.innerText = "Only JPG, JPEG, PNG, or WEBP files are allowed.";
                err.classList.add('error-text');
                imageInput.classList.add('input-error');
                isValid = false;
            }
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
