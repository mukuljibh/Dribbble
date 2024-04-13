import axios from 'axios'

function postDataAPI(userDetails) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/register', {
            userDetails
        })
            .then((msg) => {
                resolve(msg.data.message)
            })
            .catch((err) => {
                console.log(err.response.data.error)
                reject(err.response.data.error)
            })
    })
}

function sendEmailToUserAPI(userDetails) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/send-email', {
            userDetails
        })
            .then(() => {
                resolve("email is sent")
            })
            .catch((error) => {
                alert("email not able to sent", error)
            })
    })
}

function sendImageAPI(ImageUrl) {
    const formData = new FormData();
    formData.append('file', ImageUrl);
    formData.append('upload_preset', 'srpyzeky'); // Specify your upload preset
    return new Promise((resolve, reject) => {
        axios.post(
            "https://api.cloudinary.com/v1_1/df8suxer2/image/upload",
            formData
        ).then((response) => {
            resolve(response.data.secure_url)
        }).catch(() => {
            reject("Error uploading image")
        })
    })

}

export {
    postDataAPI,
    sendEmailToUserAPI,
    sendImageAPI
}