document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("jobApplicationForm");
    const submissionMessage = document.getElementById("submissionMessage");

    form.addEventListener("submit", function (event) {
        const fullName = form.elements["fullName"].value;
        const email = form.elements["email"].value;
        const phone = form.elements["phone"].value;
        const resume = form.elements["resume"].value;

        if (!validateFullName(fullName)) {
            alert("Please enter a valid full name.");
            event.preventDefault();
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number (XXX-XXX-XXXX).");
            event.preventDefault();
        }

        if (!validateResume(resume)) {
            alert("Please upload a PDF, DOC, or DOCX file for the resume.");
            event.preventDefault();
        }

        // If all validations pass, show the submission message
        if (validateFullName(fullName) && validateEmail(email) && validatePhone(phone) && validateResume(resume)) {
            submissionMessage.innerText = "Form submitted successfully!";
            submissionMessage.style.display = "block";
            form.reset(); // Optional: Reset the form after submission
        }
    });

    function validateFullName(name) {
        return /^[a-zA-Z\s]+$/.test(name);
    }

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function validatePhone(phone) {
        return /^\d{3}-\d{3}-\d{4}$/.test(phone);
    }

    function validateResume(resume) {
        return /\.(pdf|doc|docx)$/.test(resume);
    }
});
