import {React, useContext } from 'react';
import { AccountContext } from '../../Context/AccountProvider';
import { styled, Dialog, Box } from "@mui/material"
import { GoogleLogin } from '@react-oauth/google';
import { addUser } from '../../Services/api';
import jwt_decode from 'jwt-decode'


// main box inside dialog
const DialogBox = styled(Box)`
height:75vh;
width:85vh;
overflow:hidden;
`
const ContentBox = styled(Box)`
text-align:center;
Padding:5rem 0 0 0;
font-size:1.5rem;
font-family:san-sarif;
`
const GoogleBox = styled(Box)`
padding:2rem 12rem 0 16rem;
width:15rem;
`




const DialogStyle = {
    height: '60%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: 'none'

}




const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);



    const success= async (credentialResponse) => {
        console.log(credentialResponse);
        const decoded = jwt_decode(credentialResponse.credential);
        console.log(decoded);
        setAccount(decoded);
        await addUser(decoded);
    }
    
    const error= (err) => {
        console.log('Login Failed',err);
    }




    return (
        <div>
            <Dialog open={true}  PaperProps={{
            sx: DialogStyle
        }} >
                <DialogBox>
                    <ContentBox>
                        Please Add Your Goolge Account
                    </ContentBox>
                    <GoogleBox>
                        <GoogleLogin
                            onSuccess={success}
                            onError={error}
                        />
                    </GoogleBox>
                </DialogBox>

            </Dialog>

        </div>
    )
}

export default LoginDialog
