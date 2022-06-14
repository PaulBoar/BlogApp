import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
 apiKey: "AIzaSyCg7Lsv6ea_gSxxJ_vgJg2WtfstP80lJoo",
 authDomain: "blogapp-c6647.firebaseapp.com",
 databaseURL: "https://blogapp-c6647-default-rtdb.firebaseio.com",
 projectId: "blogapp-c6647",
 storageBucket: "blogapp-c6647.appspot.com",
 messagingSenderId: "705658367990",
 appId: "1:705658367990:web:6a599809746b2465c5e1d7"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)