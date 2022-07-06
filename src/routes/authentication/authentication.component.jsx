import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <Button buttonType="google" onClick={logGoogleUser}>Sign In With Google Popup</Button>
            <SignUpForm />
        </div>
    );
};

export default Authentication;
