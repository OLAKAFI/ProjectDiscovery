import React from 'react';
import SignInSignUpPage from './SignInSignUpPage';
import './knowyou.css';
import "./introduction.css"; // Import custom CSS for styling if needed



function Register({isSignedIn}) {
    // const [isSignedIn, setIsSignedIn] = useState(false); // Tracks user's sign-in status
  return (
    <div id='wrapper'>
        <section id='intro' className='introduction-container'>
            <div className="">
                {/* {!isSignedIn ? (
                <SignInSignUpPage  />
                ) : (
                <Introduction />
                )} */}
                <SignInSignUpPage  />
            </div>

        </section>

    </div>
  )
}

export default Register