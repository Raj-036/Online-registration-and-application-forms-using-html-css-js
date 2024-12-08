document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("applicationForm");

    form.addEventListener("submit", function (e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const gender = document.getElementById("gender").value;

        if (!name || !email || !phone || !dob || !gender) {
            e.preventDefault();
            alert("Please fill out all required fields.");
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            e.preventDefault();
            alert("Please enter a valid email address.");
            return;
        }
        const confirmSubmission = confirm("Are you sure you want to submit the form?");
        if (!confirmSubmission) {
            e.preventDefault();
        }
    });
});