import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js';
import app from './config.js';

const auth = getAuth();

const loginBtn = document.getElementById('loginBtn');
// Listener na login dugme
loginBtn.addEventListener('click', () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    // Firebas-ova metoda 
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Sessiona storage
        sessionStorage.setItem('keyUsername', email)
        sessionStorage.setItem('keyPassword', password) // Samo radi provere na serveru inace ne cuvati!
        sessionStorage.setItem('daLiJeAktivnaSesija', true)

        location.href = 'index.html'
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        $('#messageError').text('Niste uneli adekvatne podatke za Username i Password');
        alert(errorMessage);
    });
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });