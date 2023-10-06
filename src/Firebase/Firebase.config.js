// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMpwo-bK83enIc5kamRiWQRRHsXQszak",
  authDomain: "auth-projects-c7066.firebaseapp.com",
  projectId: "auth-projects-c7066",
  storageBucket: "auth-projects-c7066.appspot.com",
  messagingSenderId: "788620642027",
  appId: "1:788620642027:web:6273fd8469efe31cd760ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth