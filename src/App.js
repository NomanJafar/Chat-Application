import './App.css';
import Messanger from './components/messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './Context/AccountProvider';


function App() {

  // get client id from console.cloud.google.com
  const clientId = '384001038813-imgniv44r0ta7kk7uhi6cfd6v9gigt96.apps.googleusercontent.com';

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
        <Messanger />
        </AccountProvider>
      </GoogleOAuthProvider>


    </>
  );
}

export default App;
