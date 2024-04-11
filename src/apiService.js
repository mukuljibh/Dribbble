import axios from 'axios'

function postData(userDetails) {
    axios.post('http://localhost:4000/register', {
        userDetails
    })
        .then(() => {
            alert("data is posted")
        })
        .catch((error) => {
            alert("something went wrong", error)
            console.log(userDetails)
        })
}

function sendEmailToUser(userDetails) {
    axios.post('http://localhost:4000/send-email', {
        userDetails
    })
        .then(() => {
            alert("email is sent")
        })
        .catch((error) => {
            alert("email not able to sent", error)
        })
}

async function sendImage(ImageUrl) {
    const formData = new FormData();
    formData.append('file', ImageUrl);
    formData.append('upload_preset', 'srpyzeky'); // Specify your upload preset
    try {
        const response = await axios.post(
            "https://api.cloudinary.com/v1_1/df8suxer2/image/upload",
            formData
        );
        return response.data.secure_url;
    } catch (error) {
        alert("Error uploading image: " + error);
        throw error;
    }
}

export {
    postData,
    sendEmailToUser,
    sendImage
}