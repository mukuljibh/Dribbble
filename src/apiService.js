import axios from 'axios'

function postDataAPI(userDetails) {
    let timer = setTimeout(() => {
        alert("backend is waking up please wait exactly 1minute to start exploring this demo web application")
    }, 5000)
    return new Promise((resolve, reject) => {
        axios.post('https://dribbble-backend-fzto.onrender.com/register', {
            userDetails
        })
            .then((msg) => {
                clearTimeout(timer)
                resolve(msg.data.message)
            })
            .catch((err) => {
                clearTimeout(timer)
                console.log("catch", err.response.data.error)
                reject(err.response.data.error)
            })

    })
}

function sendEmailToUserAPI(userDetails) {
    return new Promise((resolve, reject) => {
        axios.post('https://dribbble-backend-fzto.onrender.com/send-email', {
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