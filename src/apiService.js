import axios from "axios";

function postDataAPI(userDetails) {
    //Backend deployment may pause temporarily due to inactivity detection by hosting provider in a mean while this message is shown to the users.
    let timer = setTimeout(() => {
        alert(
            "Please note that our backend deployment process may experience temporary interruptions due to inactivity detection by our hosting provider. If such an interruption occurs, deployment will automatically resume after approximately 50 seconds. We apologize for any inconvenience this may cause and appreciate your understanding.",
        );
    }, 5000);
    //hitting up our API route for posting user details after validation checks at frontend.
    return new Promise((resolve, reject) => {
        axios
            .post("https://dribbble-backend-fzto.onrender.com/register", {
                userDetails,
            })
            .then((response) => {
                clearTimeout(timer);
                resolve(response.data.message);
            })
            .catch((err) => {
                clearTimeout(timer);
                reject(err.response.data.error);
            });
    });
}

function isUserExistAPI(typedInput) {
    return new Promise((resolve, reject) => {
        //this API route is  used to check whether the username has already taken or not.
        //passing object in query parameters
        axios
            .get(
                `https://dribbble-backend-fzto.onrender.com/checkUserName?Username=${typedInput}`,
            )
            .then((response) => {
                resolve(response.data.message);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function sendEmailToUserAPI(userDetails) {
    //this API route is used to send user confirmation message using SMTP service handled by Nodemailer API.
    return new Promise((resolve, reject) => {
        axios
            .post("https://dribbble-backend-fzto.onrender.com/send-email", {
                userDetails,
            })
            .then(() => {
                resolve("Verification email has been Sent");
            })
            .catch((error) => {
                console.log(error);
                reject("email not able to sent");
            });
    });
}

function sendImageAPI(ImageUrl) {
    const formData = new FormData();
    formData.append("file", ImageUrl);
    formData.append("upload_preset", "srpyzeky"); // Specify your upload preset
    //this cloudnary API route is used to send the profile picture to the cloudnary and in response we recieved a URL for that profile picture.
    return new Promise((resolve, reject) => {
        axios
            .post("https://api.cloudinary.com/v1_1/df8suxer2/image/upload", formData)
            .then((response) => {
                //getting URL of our profile picture
                resolve(response.data.secure_url);
            })
            .catch(() => {
                reject("Error uploading image");
            });
    });
}

export { postDataAPI, sendEmailToUserAPI, sendImageAPI, isUserExistAPI };
