import {Box, Button,styled} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';



const CustomButtons = () => {
  return (
      <Box>
          <Button variant='text' style={{marginRight: 10}}><AccountCircleOutlinedIcon/> Login </Button>
          <Button variant='text' style={{marginRight: 10}}><ShoppingCartOutlinedIcon/> Cart </Button>
          <Button variant='text' style={{marginRight: 10}}><StorefrontOutlinedIcon/> Become a Seller </Button>
      </Box>
  );
};

export default CustomButtons;
