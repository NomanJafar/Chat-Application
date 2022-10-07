import { React, useContext } from 'react';
import { AccountContext } from '../Context/AccountProvider';
import { AppBar, Toolbar, styled } from "@mui/material"
import LoginDialog from "./account/LoginDialog"
import Chatdialog from './chat/Chatdialog';



const Header = styled(AppBar)`
height:125px;
background-color:#3e4244;
box-shadow:none
`

const Messanger = () => {
    const { Account } = useContext(AccountContext);


    return (


        Account ?

            <>
                <Header>
                    <Toolbar>
                    </Toolbar>
                </Header>
                <Chatdialog />
            </>
            :


            <>
                <Header>
                    <Toolbar>
                    </Toolbar>
                </Header>
                <LoginDialog />
            </>
    )
}

export default Messanger