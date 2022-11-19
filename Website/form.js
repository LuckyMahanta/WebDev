function printError(eleId, hintMsg) {
    document.getElementById(eleId).innerHTML = hintMsg;
}

function validateForm() {
    console.log("Submit");
    var form = document.getElementById("myform")
    var name = form.name.value;
    var email = form.email.value;
    var number = form.number.value;
    var gender = form.gender.value;
    var qualification = form.qualification.value;
    var course = form.course.value;
    var country = form.country.value;

    var nameErr = true;
    var mobileErr = true;
    var emailErr = true;
    var genderErr = true;
    var qualificationErr = true;
    var courseErr = true;
    var countryErr = true;

    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }


    if (number == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(number) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        if (!email.includes("@")) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if (qualification == "") {
        printError("qualificationErr", "Please select your qualification");
    } else {
        printError("qualificationErr", "");
        qualificationErr = false;
    }

    if (course == "") {
        printError("courseErr", "Please select your course");
    } else {
        printError("courseErr", "");
        courseErr = false;
    }

    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || qualificationErr || courseErr) == true) {

        return false;
    } else {

        var dataPreview =
            "You've entered the following details: \n" +
            "Name: " +
            name +
            "\n" +
            "Mobile Number: " +
            number +
            "\n" +
            "Email Address: " +
            email +
            "\n" +
            "Country: " +
            country +
            "\n" +
            "Gender: " +
            gender +
            "\n"+
            "Qualification:" +
            qualification +
            "\n"+
            "Course:" +
            course +
            "\n";

        alert(dataPreview);

    }


}
