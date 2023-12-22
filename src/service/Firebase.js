import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYfQ3C-eBZumVEcdSQp1lOHTO3w648Ga4",
    authDomain: "grpcspeedometer.firebaseapp.com",
    databaseURL: "https://grpcspeedometer.europe-central2.firebaseddatabase.app",
    projectId: "grpcspeedometer",
    storageBucket: "grpcspeedometer.appspot.com",
    messagingSenderId: "306438182746",
    appId: "1:306438182746:web:720d0132b0eaca4a780563",
    measurementId: "G-KGJBMLXJXE"
};

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app)
const database = getFirestore()
export {database}
