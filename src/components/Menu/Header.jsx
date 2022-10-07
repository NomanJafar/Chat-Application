import { React, useContext, useState } from 'react'
import { styled, Box } from "@mui/material"
import { AccountContext } from '../../Context/AccountProvider'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import Profile from './Profile';




const Component = styled(Box)`
height:43px;
width:100%;
border-bottom: solid black;

`

const Wrapper = styled(Box)`
float:right;



`

const MoreIcon = styled(MoreVertIcon)`
padding-top:7px;
cursor:pointer;
`

const Messageicon = styled(MessageIcon)`
font-size:21px;
padding-top:8px;
padding-right:8px;
cursor:pointer;
`

const StoryIcon = styled(SettingsBackupRestoreIcon)`
padding-top:8px;
padding-right:8px;
cursor:pointer;
`

const Image = styled('img')({
    borderRadius: '50%',
    height: 40,
    cursor: "pointer"

})

const Header = () => {
    const { Account } = useContext(AccountContext)
    const [openprofile, setOpenProfile] = useState(false);

    const toggleProfile = () => {
        console.log("clicked")
        setOpenProfile(true);
    }

    return (
        <>
            <Component>
                <Image src={Account.picture} alt="dp" onClick={toggleProfile} />
                <Wrapper>
                    <StoryIcon />
                    <Messageicon />
                    <MoreIcon />
                </Wrapper>
            </Component>
            <Profile open={openprofile} setOpen={setOpenProfile} />
        </>
    )
}

export default Header
