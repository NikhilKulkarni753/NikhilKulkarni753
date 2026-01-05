function sendmail(e){
    e.preventDefault(); // stop page reload

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_b5rwlnn", "template_nx3ni6h", params)
    .then(function () {
        alert("Email sent successfully ✅");
        document.querySelector("form").reset();
    })
}