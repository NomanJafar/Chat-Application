import { React, useContext } from 'react'
import { styled, Box, Drawer, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountContext } from '../../Context/AccountProvider';

const DialogStyle = {
    top: '17px',
    left: '33px',
    height: '95%',
    width: '27.85%',
    shadow: 'none'

}

const PictureBox = styled(Box)`
height:9rem;
width:100%;
margin-bottom:2rem;
align-items:center;
& > img{
    height:100%;
    border-radius:50%;
    width:150px;
    height:150px;

    padding:20px 55px;
}
}
`

const NameBox = styled(Box)`
margin:2rem;
& > p{
    padding:0.5rem;
    color:black;
    font-weight:bold;
}
`

const Component1 = styled(Box)`
display:flex;
heigth:107px;
background-color:#373b41;

 & > svg {
    margin-top:auto;
    padding:15px;
    cursor:pointer;
    color:#ffff;

 }, & p  {
    margin-top:auto;
    padding:15px;
    color:#ffff;
 } 

`

const Profile = (props) => {
    const { Account } = useContext(AccountContext)


    return (
        <>




            <Drawer
                open={props.open}
                onClose={() => { props.setOpen(false) }}
                style={{ zIndex: 1500 }}
                PaperProps={{
                    sx: DialogStyle
                }}
            >

                <Component1>
                    <ArrowBackIcon onClick={() => { props.setOpen(false) }} />
                    <Typography>Profile</Typography>
                </Component1>

                <PictureBox>
                    <img src={Account.picture} alt="" />
                </PictureBox>

                <NameBox>
                    <Typography>Your Name </Typography>
                    <Typography>{Account.name}</Typography>

                </NameBox>

                <NameBox>
                    <Typography>About</Typography>
                    <Typography>{Account.email}</Typography>
                </NameBox>

            </Drawer>

        </>
    )
}

export default Profile
