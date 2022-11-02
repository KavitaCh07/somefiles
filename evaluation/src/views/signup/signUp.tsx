import './signUp.css';
import Logo from '../../components/logo/logo';
import SignUpForm from '../../components/signupForm/signupForm';

function SignUp () {
    return (
        <div>
          <div className="container">
            <div className="loginContainer">
              <Logo />
              <SignUpForm />
            </div>
          </div>
        </div>
      );
} 

export default SignUp;