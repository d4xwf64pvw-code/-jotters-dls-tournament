import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {

    getFirestore,

    doc,

    setDoc,

    serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// FIREBASE CONFIG

const firebaseConfig = {

    apiKey: "AIzaSyAUENK-LXHg2H42irmSMrlzEgQK6mbrfmE",

    authDomain: "jotters-dls-tournament.firebaseapp.com",

    projectId: "jotters-dls-tournament",

    storageBucket: "jotters-dls-tournament.firebasestorage.app",

    messagingSenderId: "339718914725",

    appId: "1:339718914725:web:c3343960eaaa899331034c",

    measurementId: "G-LWEMY00YYC"

};

// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// REGISTRATION FORM

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const playerName = form.playerName.value.trim();

    const dlsId = form.dlsId.value.trim();

    const teamName = form.teamName.value.trim();

    const email = form.email.value.trim().toLowerCase();

    try {

        await setDoc(doc(db, "players", email), {

            playerName: playerName,

            dlsId: dlsId,

            teamName: teamName,

            email: email,

            status: "registered",

            createdAt: serverTimestamp()

        });

        alert("Registration successful! 🏆");

        form.reset();

    } catch (error) {

    console.error("Registration error:", error);

    alert(

        "ERROR CODE: " + error.code +

        "\n\n" +

        error.message

    );

}

    }

});
