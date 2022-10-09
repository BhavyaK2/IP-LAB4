function validateForm() {
    // Part A
    const values = [
        document.forms["myForm"]["text-tshirt"].value,
        document.forms["myForm"]["size"].value,
        document.forms["myForm"]["qty"].value,
        document.forms["myForm"]["details"].value,
        document.forms["myForm"]["date"].value,
        document.forms["myForm"]["fname"].value,
        document.forms["myForm"]["lname"].value,
        document.forms["myForm"]["address"].value,
        document.forms["myForm"]["Contact"].value,
        document.forms["myForm"]["email"].value,
        document.forms["myForm"]["payment"].value,
        document.forms["myForm"]["color"].value,
    ];
    const hasEmptyFields = Object.values(values).some(
        (element) => element === ""
    );
    if (hasEmptyFields) {
        alert("Please fill in all fields");
        return;
    }
    if (values[0].length > 10) {
        alert(
            "Please enter a tagline containing less than 10 characters"
        );
        return;
    }
    if (values[8].length !== 10) {
        alert("Please enter a valid mobile number");
        return;
    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    if (!validateEmail(values[9])) {
        alert(values[9] + " is not valid :(");
        return;
    }
    const receipt_formatted = `Thank you for shopping!
Here's your receipt:
Date: ${new Date().toLocaleDateString("UK")}
Tagline: ${values[0]}
Size: ${values[1]}
Qty: ${values[2]}
Details: ${values[3]}
Date: ${values[4]}
First Name: ${values[5]}
Last Name: ${values[6]}
Address: ${values[7]}
Contact: ${values[8]}
Email: ${values[9]}
Payment Method: ${values[10]}
Color: ${values[11]}`;
    alert(receipt_formatted);
}
const form = document.getElementById("shirt_cart");
form.addEventListener("submit", (event) => {
    // stop form submission
    event.preventDefault();
});