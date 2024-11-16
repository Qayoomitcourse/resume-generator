// get reference from html
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills")
        .value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3><b>Personal Details</b></h3>\n<p><b>Name:</b> ".concat(name, "</p>\n<p><b>Email:</b> ").concat(email, "</p>\n<p><b>Phone:</b> ").concat(phone, "</p>\n<h3><b>Education</b></h3>\n<p><b>Education:</b> ").concat(education, "</p>\n<h3><b>Experience</b> </h3>\n<p><b>Experience:</b>").concat(experience, "</p>\n<h3><b>Skills</b></h3>\n<p><b>Skills:</b> ").concat(skills, "</p>\n  ");
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume field display is misisng");
    }
});
