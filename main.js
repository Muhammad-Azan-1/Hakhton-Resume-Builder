var container1 = document.querySelector(".container");
var container2 = document.querySelector(".container1");
var subit_btn = document.querySelector(".resumeGeneratbtn");
// Forms-Input
var names = document.querySelector(".name");
var designation = document.querySelector(".designation");
var email = document.querySelector(".email");
var Linkedin = document.querySelector(".Linkedin");
var github = document.querySelector(".github");
var locations = document.querySelector(".location");
var school = document.querySelector(".school");
var Degree = document.querySelector(".Degree");
var College = document.querySelector(".College");
var html = document.querySelector(".html");
var css = document.querySelector(".css");
var rjs = document.querySelector(".rjs");
var ty = document.querySelector(".ty");
var image_upload_path = document.querySelector(".image-upload"); // here we will get the file we choose to upload image
var aboutMe = document.querySelector(".aboutMe");
var yearOfSchool = document.querySelector(".yearOfSchool");
var yearOfCollege = document.querySelector(".yearOfCollege");
var ph = document.querySelector(".ph");
var insitution = document.querySelector(".insitution");
var experience = document.querySelector(".experience");
var btn = document.querySelector(".button");
var editbtn = document.querySelector("#go-back");
var downloadbtn = document.querySelector("#Download");
var Linkbtn = document.querySelector("#Linkbtn");
// !getting IMAGE
var image = document.querySelector(".img-box img");
// The change event in JavaScript is triggered when the value of an input, select, or textarea element changes and the user "commits" the change. This typically occurs when:
// When you select a new file in an <input type="file"> element, the change event is triggered. This is commonly used for tasks like displaying a preview of an
//image or video file that the user has selected.
//? when this event target we will create a url for the image that has chosen and put that url in src of img
image_upload_path.addEventListener("change", function (e) {
    var _a;
    var file = e.target;
    var path = (_a = file.files) === null || _a === void 0 ? void 0 : _a[0];
    if (path) {
        image.src = URL.createObjectURL(path); // The upper img varaible has a image init with a scr <img src="4843806.jpg" alt="Profile Picture"> so the url generated by this {img.src =  URL.createObjectURL(path)}  will added  inside
        //  this <img src="img.src" alt="Profile Picture">
        //   console.log(image.src);
    }
});
//!
//! on click Resume will be generated
subit_btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (names.value.trim() === "" ||
        designation.value.trim() === "" ||
        email.value.trim() === "" ||
        Linkedin.value.trim() === "" ||
        github.value.trim() === "" ||
        locations.value.trim() === "" ||
        school.value.trim() === "" ||
        Degree.value.trim() === "" ||
        College.value.trim() === "" ||
        html.value.trim() === "" ||
        css.value.trim() === "" ||
        rjs.value.trim() === "" ||
        ty.value.trim() === "" ||
        image_upload_path.value === "" ||
        aboutMe.value === "" ||
        yearOfCollege.value === "" ||
        yearOfSchool.value === "" ||
        ph.value === "" ||
        insitution.value === "") {
        alert("Please fill all the fields");
    }
    else {
        container2.classList.remove("hidden");
        btn.classList.remove("hidden2");
        container1.classList.add("hidden");
        document.body.style.backgroundColor = "#fefae0";
        container2.innerHTML = "\n  <div class=\"left-side\">\n            <div class=\"profiletext\">\n                <div class=\"img-box\">\n                    <img src=".concat(image.src, " alt=\"Profile Picture\">\n                </div>\n                <h2>").concat(names.value, "<br><span>").concat(designation.value, "</span></h2>\n            </div>\n            <div class=\"contact\">\n                <h3 class=\"title\">Contact Info</h3>\n                <ul>\n                    <li>\n                        <span class=\"icon\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i></span>\n                        <span class=\"text\">").concat(ph.value, "</span>\n                        <br>\n                    </li>\n                    <li>\n                        <span class=\"icon\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></span>\n                        <span class=\"text\">").concat(email.value, "</span>\n                        <br>\n                    </li>\n                    <li>\n                        <span class=\"icon\"><i class=\"fa fa-linkedin-square\" aria-hidden=\"true\"></i></span>\n                        <span class=\"text\"><a href=").concat(Linkedin.value, ">Linkedin</a></span>\n                        <br>\n                    </li>\n                    <li>\n                        <span class=\"icon\"><i class=\"fa fa-github-square\" aria-hidden=\"true\"></i></span>\n                        <span class=\"text\"><a\n                                href=").concat(github.value, ">GitHub</a></span>\n                        <br>\n                    </li>\n                    <li>\n                        <span class=\"icon\"> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></span>\n                        <span class=\"text\">").concat(locations.value, "</span>\n                        <br>\n                    </li>\n                </ul>\n            </div>\n\n            <!-- Education -->\n\n            <div class=\"contact Education\">\n                <h3 class=\"title\">Education</h3>\n                <ul>\n                    <li>\n                        <h5>").concat(yearOfSchool.value, "</h5>\n                        <h4>Matriculation</h4>\n                        <h4>School Name : ").concat(school.value, "</h4>\n                    </li>\n                    <li>\n                        <h5>2020 - 2022</h5>\n                        <h4>Intermediate</h4>\n                        <h4>College Name : ").concat(College.value, "</h4>\n                    </li>\n                    <li>\n                        <h5>2022 - 2023</h5>\n                        <h4>Gen AI, Web3.0, Metaverse </h4>\n                        <h4>Instituion name : ").concat(insitution.value, "</h4>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n\n\n        <div class=\"right-side\">\n\n            <div class=\"aboutme\">\n                <h2 class=\"title2\">About <span class=\"me\">Me</span></h2>\n                <p>").concat(aboutMe.value, "</p>\n            </div>\n\n            <!-- experience -->\n\n            <div class=\"experience\">\n                <h2 class=\"title2\">My <span class=\"me\"> Experience</span></h2>\n                <p>").concat(experience.value, "</p>\n            </div>\n\n\n            <!-- skills -->\n\n            <div class=\"skills\">\n                <h2 class=\"title2\">Professional <span class=\"me\">Skills</span></h2>\n                <div class=\"box\">\n                    <h4>HTML</h4>\n                    <div class=\"percentage\">\n                        <div style=\"width: ").concat(html.value, ";\"></div>\n                    </div>\n                </div>\n\n                <div class=\"box\">\n                    <h4>CSS</h4>\n                    <div class=\"percentage\">\n                        <div style=\"width: ").concat(css.value, ";\"></div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"box\">\n                <h4>Typescript</h4>\n                <div class=\"percentage\">\n                    <div style=\"width: ").concat(ty.value, ";\"></div>\n                </div>\n            </div>\n\n            <div class=\"box\">\n                <h4>React.js</h4>\n                <div class=\"percentage\">\n                    <div style=\"width: ").concat(rjs.value, ";\"></div>\n                </div>\n            </div>\n\n            \n            <h3 class=\"water-mark\">Resume builder by <span class=\"title\">Muhammad Azan</span></h3> ");
    }
});
//! Editable button for Resume
editbtn.addEventListener("click", function () {
    container2.classList.add("hidden");
    container1.classList.remove("hidden");
    btn.classList.add("hidden2");
    document.body.style.backgroundColor = "#2252b8";
});
downloadbtn.addEventListener("click", function () {
    if (typeof html2pdf === "undefined") {
        alert("ERORR: Html2Pdf library is not loaded");
    }
    else {
        var isSmallScreen = window.innerWidth < 850; // Adjust the width threshold as needed
        // Set PDF format based on screen size
        var pdfFormat = isSmallScreen ? [1025, 2200] : [1000, 1500]; // Small size for small screens, larger for larger screens
        var pdf_Formate = {
            margin: 0,
            filename: "Azan-resume-builder.pdf",
            image: { type: "jpeg", quality: 1.0 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: "px", format: pdfFormat, orientation: "portrait" },
        };
        html2pdf()
            .from(container2) // means downloaded  pdf comes from container2
            .set(pdf_Formate) // and the downloaded set according to this format
            .save();
    }
});
//! Shareable link button for resume
var params = new URLSearchParams({
    name: names.value,
    designation: designation.value,
    email: email.value,
    Linkedin: Linkedin.value,
    github: github.value,
    locations: locations.value,
    school: school.value,
    Degree: Degree.value,
    College: College.value,
    html: html.value,
    css: css.value,
    rjs: rjs.value,
    ty: ty.value,
    image: image.src,
    aboutMe: aboutMe.value,
    yearOfCollege: yearOfCollege.value,
    yearOfSchool: yearOfSchool.value,
    ph: ph.value,
    insitution: insitution.value,
    experience: experience.value,
});
var uniquePath = "".concat(window.location.origin, "? ").concat(params.toString()); //link generated for each user  on the bases of it's data
console.log(uniquePath);
Linkbtn.addEventListener("click", function () {
    navigator.clipboard.writeText(uniquePath).then(function () {
        alert("Link Copied successfully");
    });
    window.history.replaceState(null, "", "".concat(params.toString()));
});
//when user click on Linkbtn with the help of  window.Clipboard.writeText link automatically copied