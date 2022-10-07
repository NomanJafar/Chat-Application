import { React, useContext } from 'react'
import { styled, Dialog, Box, InputBase } from "@mui/material"
import { AccountContext } from '../../Context/AccountProvider'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const InputChat = styled(InputBase)`

border-radius: 5%;
width:100%
` 
const Searchicon = styled(SearchIcon)`
float:left;
padding-top:6px;
padding-left:5px;
font-size:20px;
` 

const Wrapper = styled(Box)`
display:flex;
` 

const FilterIcon = styled(FilterListIcon)`
float:right;
cursor:pointer;
` 

const Search = () => {
    return (
        <>
            <Wrapper>
                <Searchicon/>
                <InputChat placeholder=" Search or start a new chat"/>
                <FilterIcon/>
            </Wrapper>

        </>
    )
}

export default Search
