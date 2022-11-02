import './signIn.css';
import Logo from '../../components/logo/logo';
import Form from '../../components/form/form';

function SignIn()
{
    return (
        <div>
          <div className="container">
            <div className="loginContainer">
              <Logo />
              <Form />
            </div>
          </div>
        </div>
      );
}
export default SignIn;