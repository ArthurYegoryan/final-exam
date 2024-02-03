import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfTtdZ3XiaV7wXXdMm48H6TQ2ue0p6LxQ",
  authDomain: "final-react-exam.firebaseapp.com",
  databaseURL: "https://final-react-exam-default-rtdb.firebaseio.com",
  projectId: "final-react-exam",
  storageBucket: "final-react-exam.appspot.com",
  messagingSenderId: "892000135570",
  appId: "1:892000135570:web:f34e9149afd99476f5394b"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);