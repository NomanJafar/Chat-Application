import React from 'react'
import { styled, Dialog, Box } from "@mui/material"
import EmptyChat from './EmptyChat'
import Menu from '../Menu/Menu'


const DialogBox = styled(Box)`
height:95vh;
width:100vw;
overflow:'hidden';
display:flex;
`

const ChatMenu = styled(Box)`
height:95vh;
width:24vw;

display:flex;
border-right: solid rgba(0, 0, 0, 0.25)


`
const Chat = styled(Box)`
height:95vh;
width:72vw;
overflow:'hidden';
display:flex;



`


const DialogStyle = {
    height: '95%',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    backgroundColor: 'none'

}



const Chatdialog = () => {
    return (
        <Dialog open={true} PaperProps={{
            sx: DialogStyle
        }} >
            <DialogBox>
                
                {/* chat menu */}
                <ChatMenu>
                    <Menu/>
                </ChatMenu>



                {/* chat box */}
                <Chat>
                    <EmptyChat/>
                </Chat>


            </DialogBox>

        </Dialog>
    )
}

export default Chatdialog