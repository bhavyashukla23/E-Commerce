import { useState } from 'react';

import {Box, Button} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LoginDialogue from '../login/LoginDailogue';


const CustomButtons = () => {

  const[open , setOpen]=useState(false);

  const openDialog=() =>{
    setOpen(true);
  };

  return (
    <Box>
      <Box style={{justifyContent: "space-between"}}>
          <Button variant='text' style={{marginRight: 10}} onClick={()=>openDialog()}><AccountCircleOutlinedIcon/>&nbsp; Login <ExpandMoreOutlinedIcon/></Button>
          <Button variant='text' style={{marginRight: 10}}><ShoppingCartOutlinedIcon/>&nbsp; Cart </Button>
          <Button variant='text' style={{marginRight: 10}}><StorefrontOutlinedIcon/>&nbsp; Become a Seller </Button>
      </Box>
      <LoginDialogue open={open} setOpen={setOpen}/>
    </Box>
  );
};

export default CustomButtons;
