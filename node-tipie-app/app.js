const express = require('express');
const app = express();
const port = 3100;

const cors = require('cors');
app.use(cors());
app.options('*', cors());

const firebaseApp = require("firebase/app");
const firestore = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBSDQesYTkIM27NGRU3bkGpJIhImt8msAM",
  authDomain: "tipie-app-b7d21.firebaseapp.com",
  projectId: "tipie-app-b7d21",
  storageBucket: "tipie-app-b7d21.appspot.com",
  messagingSenderId: "877336920735",
  appId: "1:877336920735:web:11bc6b6e7b957a871658aa"
};
const db = firestore.getFirestore(firebaseApp.initializeApp(firebaseConfig));

app.get('/', (req, res) => {
  res.send('Tipie App NodeJS')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/employees', (req, res) => {
    try {
      
      firestore.getDocs(firestore.collection(db,"employees")).then(snapshot => {
        res.send(snapshot.docs.map(doc => doc.data()));
        
      });
    
    } catch (e) {
      res.status(500).send('No employees found on Firestore');
    }
})