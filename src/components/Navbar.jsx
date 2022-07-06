import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

/**** STYLED COMPONENTS ****/
const Container = styled.div`
  height : 60px;
  ${mobile({height : "50px"})}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding : "10px 0px"})}
`

// Left of Navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft:"2px"})}
`
const Input = styled.input`
  border : none;
`

// Center of NavBar
const Center = styled.div`
  flex: 1 ;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize : "24px"})}
`

// Right of Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:4 , justifyContent : "center"})}
`

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize : "12px" , marginLeft:"5px"})}
`

/**** NAVBAR COMPONENT ****/

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='search'/>
            <SearchIcon style = {{color:"gray",fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>HG</Logo></Center>
        <Right>

          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
          </Badge>
          </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar