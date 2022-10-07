import {React,useContext} from 'react'
import { styled, Dialog, Box } from "@mui/material"
import { AccountContext } from '../../Context/AccountProvider'
import Header from './Header'
import Search from './Search'


const InsideMenu=styled(Box)`
width:100%`;

const Menu = () => {
  return (
        <>
        <InsideMenu>    
            <Header/>
            <Search/>

        </InsideMenu>
        </>
  )
}

export default Menu
