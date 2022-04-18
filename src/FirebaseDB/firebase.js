import { initializeApp } from "firebase/app";


//Необходимо защитить данные от несанкционированного доступа, путем их перемещения в  корень проекта, файл .env.local !!!
const firebaseConfig = {
    apiKey: "AIzaSyBIiZeOJ0b8HDs6j4wa-QaGrpJV5hI66yE",
    authDomain: "react-messenger-12ee9.firebaseapp.com",
    projectId: "react-messenger-12ee9",
    storageBucket: "react-messenger-12ee9.appspot.com",
    messagingSenderId: "997053945985",
    appId: "1:997053945985:web:c3068c893abfcad47b5580"
};

const firebaseDB = initializeApp(firebaseConfig);

export default firebaseDB