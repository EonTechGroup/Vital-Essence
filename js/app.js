document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    var openIcon = document.getElementById('menu-open-icon');
    var closeIcon = document.getElementById('menu-close-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Phone: ", phone);
        console.log("Message: ", message);

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };
        console.log(templateParams)

        emailjs.send("service_f3at31j", "template_b114szp", templateParams)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Message sent successfully!");
                form.reset();
            }, function(error) {
                console.error("FAILED...", error);
                alert("Failed to send the message. Please try again.");
                form.reset();
            });
    });
});
