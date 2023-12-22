import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYgN74GLWckjqFvOg8sVFMCn6uKvKSWV8",
    authDomain: "grpc-cc4be.firebaseapp.com",
    projectId: "grpc-cc4be",
    storageBucket: "grpc-cc4be.appspot.com",
    messagingSenderId: "1050247779665",
    appId: "1:1050247779665:web:628fcfc42c69b408572f70",
    measurementId: "G-5FJ26WT1MV",
    databaseURL: "https://grpc-cc4be.europe-central2.firebaseddatabase.app"
};

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app)
const database = getFirestore()
export {database}
