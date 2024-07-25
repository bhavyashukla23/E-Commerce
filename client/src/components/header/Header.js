import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Search from './InputSearch';
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
background : white;
height : 55px;
`;

const BoxStyle = styled(Box)`
margin-left:12%;
line-height:0;
`;

const SubHeading= styled(Typography)`
font-size:10px;
font-style :italic;
`;

//as img tag is an html element,properties in camel case as object
const PlusImg= styled('img')({
 width :10,
 marginLeft: 4,
 height: 10
})

const Header = () =>{

    //const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const logoURL ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxNUDxWhs9Rr5zs57dmifEkAE7DfTytVwAFGyfjanVKSZLO8hdPQG1sY8A28UTQTAbjg&usqp=CAU';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
       <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            {/* box is replacement of div in material ui */}
             <BoxStyle>
                <img src={logoURL} alt="logo" style={{width:75 , height : 40}}/>
                <Box style={{display :'flex',marginTop :-7}}>
                    {/* replecement of <p> in material ui is typography */}
                    <SubHeading style={{color:"grey"}}>
                         Explore&nbsp;
                         <Box component="span" style={{color:'#FFE500'}}>Plus</Box> 
                    </SubHeading>
                    {/* <img src={subURL} alt="sublogo"/> ---- initially */}
                    <PlusImg src={subURL} alt="sublogo"/>
                </Box>
             </BoxStyle>
             <Search/>
             <Box>
             <CustomButtons/>
             </Box>
             &nbsp; <MoreVertOutlinedIcon style={{color:"#1F74BA"}}/>
        </Toolbar>
       </StyledHeader>
    )
};

export default Header;
