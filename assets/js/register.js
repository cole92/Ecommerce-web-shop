import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js'

import app from './config.js'

const database = getDatabase(app);
const auth = getAuth();

const btnReg = document.getElementById('regBtn');

btnReg.addEventListener('click', () => {
    const addUserInputUI = document.getElementsByClassName('user-input');
    const newUser = {};
    let allFieldsFilled = true;

    // Provera svih polja i popunjavanje novog korisnika
    for(let i = 0; i < addUserInputUI.length; i ++) {
        const keyData = addUserInputUI[i].getAttribute('data-key');
        const value = addUserInputUI[i].value;

        if(!value) {
            allFieldsFilled = false;
            break;
        }
        newUser[keyData] = value;
    }
    if (!allFieldsFilled) {
        // Vracamo false ako nesto nije popunjeno
        return false;
    }
    // Email i password uzimamo zasebno jer su potrebni za Firebase autentifikaciju
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Kreiranje korisnika u bazi kao objekte, pomocu metoda firebase-a
            set(ref(database, 'Customers/' + user.uid), newUser)
            setTimeout(() => {
                window.location = 'login.html';
            }, 1000)

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})
