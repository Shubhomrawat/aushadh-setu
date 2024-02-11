# औषध-Setu

### Backend Setup
Create .env file in backend folder and add your Twilio and google maps api keys in the file.
```
accountSid=YourSid
authToken=YourAuthToken
whatsapp_phone_no=YourTwilioPhoneNo
GOOGLE_MAP_API = "Your MAP API"
```
Create dev.js in backend/config folder and add the following:
```
module.exports = {
    MONGOURI:
    "Mongodb Atlas url",
    JWT_SECRET: "Your jwt secret",
  };
```

Open terminal in backend folder:
```
cd .\aushadh-setu\backend\
npm install
node app.js
```

### Frontend Setup
Create firebase.js in frontend/src folder and add the following:
```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```
Create keys.js in the same folder and add the following:
```
export const CLOUD_NAME = "";
export const UPLOAD_PRESET = "";
export const REACT_APP_GOOGLE_MAP_API_KEY = "Your API key"
```

Open terminal in frontend folder:
```
cd .\aushadh-setu\frontend\
npm install
npm start
```
Go to your localhost:3000
```
http://localhost:3000/
```

## Tools used
* HTML
* CSS
* Javascript
* Reactjs
* Node.js
* Express
* Socket.io
* Tensorflow
* Google Maps API
* Twilio
* Firebase

