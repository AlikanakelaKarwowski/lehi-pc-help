import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "lehi-pc-help.firebaseapp.com",
    projectId: "lehi-pc-help",
    storageBucket: "lehi-pc-help.appspot.com",
    messagingSenderId: "191365154445",
    appId: "1:191365154445:web:9a0a476eb559a764e384c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (err) {
            console.log("Error Creating the User");
            console.log(err);
        }
    }
    return userDocRef;
};
