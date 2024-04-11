import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import bodyParser from 'body-parser';
import { Resend } from "resend";
import cors from "cors";

const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: true })); // middleware which fetches the form data 
app.use(bodyParser.json());
app.use(cors());//for cross generation support 

const CONNNECTIONSTRING = 'mongodb://localhost:27017';
const DATABASE_NAME = "UserDB";
const CONNECTION = new MongoClient(CONNNECTIONSTRING);

async function connectToDatabase() {
    //make sure that server open only when database is available
    return new Promise((resolve, reject) => {
        CONNECTION.connect()
            .then(() => {
                return resolve("Connected successfully to Database")
            }).catch((err) => {
                return reject(`Database unreachable`)
            })
    })
}


app.post("/register", (req, res) => {
    const userDataToSave = req.body.userDetails;
    const collectionName = "Credentials";
    // (dbClient) that can be used to interact with the database.
    const dbClient = CONNECTION.db(DATABASE_NAME)
    // This line accesses the specified collection (collectionName) in your MongoDB database using the dbClient
    const userCollection = dbClient.collection(collectionName)
    userCollection.insertOne(userDataToSave)
        .then(() => {
            res.status(200).json({ message: "Data posted into the Database" });
        })
        //    // .json is necessary so that returns a proper promise
        .catch((err) => {
            res.status(500).json({ error: "Problem while Data posted into the Database", msg: err.message });
        })
})

app.post("/send-email", async (req, res) => {
    const resend = new Resend("re_iq67TGAB_CXVmW17ap4YGyh9j3Yh5Bg5j");
    const userDataToEmail = req.body.userDetails;
    resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [userDataToEmail.Email],
        subject: `Thanks for creating  your account and welcome to Dribbble`,
        html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6;">
            <h2 style="color: #333;">Hello ${userDataToEmail.Name},</h2>
            <p>Thank you for registering on Dribbble!</p>
            <p>We are thrilled to have you as part of our community. Your unique username is: <strong>${userDataToEmail.Username}</strong></p>
            <p>Feel free to explore our platform, showcase your work, and connect with other creatives.</p>
            <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
            <p>Best regards,<br/>The Dribbble Team</p>
        </div>
        `
    })
        .then(() => {
            res.status(200).json({ message: "email has been succesfully sent" });
        })
        .catch((error) => {
            res.status(500).json({ error: "email does not sent", msg: error });
        })
})



app.listen(port, () => {
    connectToDatabase()
        .then((mess) => {
            console.log(`server starting runining on port ${port}`)
        })
        .catch((err) => {
            console.log(err)
        })
})